import '../styles/global.css';
import '../styles/questionselection.css';
import Storage from '../Models/Storage';
import Mentee from '../Models/Mentee';
import Mentor from '../Models/Mentor';
import Keys from '../Models/Keys';
import { useReducer, useState } from 'react';

function ProfileCreatorSection({ data, setEmail, setFirstName, setLastName }) {
  return (
    <div className='profile-creator'>
      <div className='form-control'>
        <label htmlFor='email'>Email</label>
        <select
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          id='email'
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='first-name'>First Name</label>
        <select
          onChange={(e) => setFirstName(e.target.value)}
          name='first-name'
          id='first-name'
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='last-name'>Last Name</label>
        <select
          onChange={(e) => setLastName(e.target.value)}
          name='last-name'
          id='last-name'
        >
          {data.map((q) => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function QuestionsToSelect({ data, disabled, dispatch, action }) {
  return (
    <div className='survey'>
      {data.map(({ id, question, selected }) => (
        <input
          className='question'
          key={id}
          type='button'
          id={id}
          value={question}
          disabled={disabled}
          onClick={() =>
            dispatch({ type: action, payload: { id: id, text: question } })
          }
        />
      ))}
    </div>
  );
}

const initialState = {
  disable_mentee_questions: false,
  disable_mentor_questions: true,
  mentee_question: { id: '', text: '' },
  mentor_question: { id: '', text: '' },
  pairs: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'mentee_question_selected':
      return {
        ...state,
        disable_mentee_questions: true,
        disable_mentor_questions: false,
        mentee_question: { id: action.payload.id, text: action.payload.text },
      };
    case 'mentor_question_selected':
      return {
        ...state,
        disable_mentee_questions: false,
        disable_mentor_questions: true,
        mentor_question: { id: action.payload.id, text: action.payload.text },
        pairs: [
          ...state.pairs,
          {
            mentee_question: state.mentee_question,
            mentor_question: {
              id: action.payload.id,
              text: action.payload.text,
            },
          },
        ],
      };
    case 'clear_pairs':
      return {
        ...state,
        pairs: [],
      };
    default:
      return state;
  }
}

function Pairs({ pairs }) {
  return (
    <div className='pairs-container'>
      {pairs.map((pair) => (
        <div className='pair'>
          <p>{pair.mentee_question.text}</p>
          <p>{pair.mentor_question.text}</p>
        </div>
      ))}
    </div>
  );
}

function createUserProfiles(key, userType, emailID, firstNameID, lastNameID) {
  const currentData = new Storage(key);
  const users = currentData.getAll().map((user) => {
    const email = user.data.responses.find(
      (response) => emailID == response.question
    ).answer;
    const firstName = user.data.responses.find(
      (response) => firstNameID == response.question
    ).answer;
    const lastName = user.data.responses.find(
      (response) => lastNameID == response.question
    ).answer;

    return new userType(
      user.id,
      user.data.responses,
      email,
      firstName,
      lastName
    );
  });
  currentData.clear();
  currentData.insertMany(users);
}

const Survey = ({ menteeSurvey, mentorSurvey }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [menteeEmail, setMenteeEmail] = useState(menteeSurvey[0].id);
  const [menteeFirstName, setMenteeFirstName] = useState(menteeSurvey[0].id);
  const [menteeLastName, setMenteeLastName] = useState(menteeSurvey[0].id);

  const [mentorEmail, setMentorEmail] = useState(mentorSurvey[0].id);
  const [mentorFirstName, setMentorFirstName] = useState(mentorSurvey[0].id);
  const [mentorLastName, setMentorLastName] = useState(mentorSurvey[0].id);

  function handleFormSubmit(e) {
    e.preventDefault();
    const pairs = new Storage(Keys.Question_Pairs);
    pairs.clear();
    const pairsToSave = state.pairs.map((pair) => {
      return {
        menteeQuestion: {
          id: pair.mentee_question.id,
          question: pair.mentee_question.text,
        },
        mentorQuestion: {
          id: pair.mentor_question.id,
          question: pair.mentor_question.text,
        },

        weightMultiplier: 1,
      };
    });
    pairs.insertMany(pairsToSave);

    const userProfilesCreated = JSON.parse(
      localStorage.getItem('UserProfilesCreated')
    );

    if (!userProfilesCreated) {
      createUserProfiles(
        Keys.Mentees,
        Mentee,
        menteeEmail,
        menteeFirstName,
        menteeLastName
      );
      createUserProfiles(
        Keys.Mentors,
        Mentor,
        mentorEmail,
        mentorFirstName,
        mentorLastName
      );

      localStorage.setItem('UserProfilesCreated', JSON.stringify(true));
    }

    window.location.href = './results.html';
  }

  return (
    <>
      <Pairs pairs={state.pairs} />
      <form onSubmit={handleFormSubmit} className='question-form'>
        <div id='container'>
          <div className='survey'>
            <h2 className='survey-title'>Mentee Survey</h2>
            <ProfileCreatorSection
              data={menteeSurvey}
              setEmail={setMenteeEmail}
              setFirstName={setMenteeFirstName}
              setLastName={setMenteeLastName}
            />
            <QuestionsToSelect
              data={menteeSurvey}
              disabled={state.disable_mentee_questions}
              dispatch={dispatch}
              action='mentee_question_selected'
            />
          </div>
          <div className='survey'>
            <h2 className='survey-title'>Mentor Survey</h2>
            <ProfileCreatorSection
              data={mentorSurvey}
              setEmail={setMentorEmail}
              setFirstName={setMentorFirstName}
              setLastName={setMentorLastName}
            />
            <QuestionsToSelect
              data={mentorSurvey}
              disabled={state.disable_mentor_questions}
              dispatch={dispatch}
              action='mentor_question_selected'
            />
          </div>
        </div>
        <div className='button-containers'>
          <input
            type='button'
            value='Clear selections'
            onClick={() => dispatch({ type: 'clear_pairs' })}
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  );
};

const menteeSurvey = new Storage(Keys.Mentee_Survey).getAll().slice(17);
// .map((question) => {
//   return { selected: false, ...question };
// });

const mentorSurvey = new Storage(Keys.Mentor_Survey).getAll().slice(17);
// .map((question) => {
//   return { selected: false, ...question };
// });

export default function QuestionSelection() {
  const [mentees, setMentee] = useState(menteeSurvey);
  const [mentors, setMentor] = useState(mentorSurvey);

  return <Survey menteeSurvey={mentees} mentorSurvey={mentors} />;
}
