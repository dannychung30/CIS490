import '../styles/global.css';
import '../styles/questionselection.css';
import Storage from '../Models/Storage';
import Mentee from '../Models/Mentee';
import Mentor from '../Models/Mentor';
import Keys from '../Models/Keys';
import { useReducer, useState } from 'react';
import ProfileCreatorForm from './components/ProfileCreatorForm';
import { initialState, selectionReducer } from './reducers/selectionReducer';

const Question = ({ id, question, disabled, dispatch, action }) => {
  return (
    <input
      className='question'
      type='button'
      id={id}
      value={question}
      disabled={disabled}
      onClick={() =>
        dispatch({ type: action, payload: { id: id, text: question } })
      }
    />
  );
};

const Questions = ({ data, disabled, dispatch, action }) => {
  return (
    <div className='survey'>
      {data.map((question) => (
        <Question
          disabled={disabled}
          dispatch={dispatch}
          action={action}
          key={question.id}
          id={question.id}
          question={question.question}
        />
      ))}
    </div>
  );
};

const Pair = ({ data }) => (
  <div className='pair'>
    <p>{data.mentee_question.text}</p>
    <p>{data.mentor_question.text}</p>
  </div>
);

function Pairs({ pairs }) {
  return (
    <div className='pairs-container'>
      {pairs.map((pair) => (
        <Pair key={pair.mentee_question.id} data={pair} />
      ))}
    </div>
  );
}

function createUserProfiles(key, userType, emailID, firstNameID, lastNameID) {
  const userProfilesCreated = JSON.parse(
    localStorage.getItem('UserProfilesCreated')
  );
  localStorage.setItem('UserProfilesCreated', JSON.stringify(true));

  if (!userProfilesCreated) {
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
}

function submitQuestionPairs(pairs) {
  const pairsStorage = new Storage(Keys.Question_Pairs);
  pairsStorage.clear();
  const pairsToSave = pairs.map((pair) => {
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
  pairsStorage.insertMany(pairsToSave);
}

const Survey = ({ menteeSurvey, mentorSurvey }) => {
  const [state, dispatch] = useReducer(selectionReducer, initialState);

  const [menteeEmail, setMenteeEmail] = useState(menteeSurvey[0].id);
  const [menteeFirstName, setMenteeFirstName] = useState(menteeSurvey[0].id);
  const [menteeLastName, setMenteeLastName] = useState(menteeSurvey[0].id);

  const [mentorEmail, setMentorEmail] = useState(mentorSurvey[0].id);
  const [mentorFirstName, setMentorFirstName] = useState(mentorSurvey[0].id);
  const [mentorLastName, setMentorLastName] = useState(mentorSurvey[0].id);

  function handleFormSubmit(e) {
    e.preventDefault();
    submitQuestionPairs(state.pairs);
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
    window.location.href = './results.html';
  }

  return (
    <>
      <Pairs pairs={state.pairs} />
      <form onSubmit={handleFormSubmit} className='question-form'>
        <div id='container'>
          <div className='survey'>
            <h2 className='survey-title'>Mentee Survey</h2>
            <ProfileCreatorForm
              data={menteeSurvey}
              setEmail={setMenteeEmail}
              setFirstName={setMenteeFirstName}
              setLastName={setMenteeLastName}
            />
            <Questions
              data={menteeSurvey}
              disabled={state.disable_mentee_questions}
              dispatch={dispatch}
              action='mentee_question_selected'
            />
          </div>
          <div className='survey'>
            <h2 className='survey-title'>Mentor Survey</h2>
            <ProfileCreatorForm
              data={mentorSurvey}
              setEmail={setMentorEmail}
              setFirstName={setMentorFirstName}
              setLastName={setMentorLastName}
            />
            <Questions
              data={mentorSurvey}
              disabled={state.disable_mentor_questions}
              dispatch={dispatch}
              action='mentor_question_selected'
            />
          </div>
        </div>
        <div className='buttons-container'>
          <input className='clear-button'
            type='button'
            value='Clear selections'
            onClick={() => dispatch({ type: 'clear_pairs' })}
          />
          <input className='submit-button' type='submit' value='&#8674;' />
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
