import '../styles/global.css';
import '../styles/questionselection.css';

import Storage from '../Models/Storage';
import Keys from '../Models/Keys';
import { useReducer, useState } from 'react';
import ProfileCreatorForm from './components/ProfileCreatorForm';
import { initialState, selectionReducer } from './reducers/selectionReducer';
import createdUserProfiles from './utils/createdUserProfiles';

const Questions = ({ data, disabled, dispatch, action }) => {
  return (
    <div className='survey'>
      {data.map((question, idx, data) => {
        return (
          <input
            className='question'
            type='button'
            key={question.id}
            value={question.text}
            disabled={disabled}
            onClick={() =>
              dispatch({
                type: action,
                payload: {
                  id: question.id,
                  idx: idx,
                  text: question.text,
                  weight: idx + 1,
                },
              })
            }
          />
        );
      })}
    </div>
  );
};

const Pair = ({ data, dispatch }) => {
  return (
    <div className='pair'>
      <p>{data.mentee_question.text}</p>
      {/* <div id='pair-controller'> */}
      <img
        onClick={() =>
          dispatch({ type: 'remove_pair', payload: data.mentee_question.id })
        }
        id='connecting-arrow'
        src='./images/arrow-right.svg'
        alt='arrow pointing right'
      />
      {/* <img id='remove-pair' src='./images/x.svg' alt='Remove pair' />
      </div> */}
      <p>{data.mentor_question.text}</p>
    </div>
  );
};

function Pairs({ pairs, dispatch }) {
  return (
    <div className='pairs-container'>
      {pairs.map((pair) => (
        <Pair dispatch={dispatch} key={pair.mentee_question.id} data={pair} />
      ))}
    </div>
  );
}

function submitQuestionPairs(pairs) {
  const pairsStorage = new Storage(Keys.Question_Pairs);
  pairsStorage.clear();
  const pairsToSave = pairs.map((pair) => {
    return {
      menteeQuestion: {
        id: pair.mentee_question.id,
        idx: pair.mentee_question.idx,
        question: pair.mentee_question.text,
        weight: pair.mentee_question.weight,
      },
      mentorQuestion: {
        id: pair.mentor_question.id,
        idx: pair.mentor_question.idx,
        question: pair.mentor_question.text,
      },
    };
  });
  pairsStorage.insertMany(pairsToSave);
}

const Survey = ({ menteeSurvey, mentorSurvey }) => {
  const [state, dispatch] = useReducer(selectionReducer, initialState);

  const [menteeEmail, setMenteeEmail] = useState(menteeSurvey[0].id);
  const [menteeFullName, setMenteeFullName] = useState(menteeSurvey[0].id);

  const [mentorEmail, setMentorEmail] = useState(mentorSurvey[2].id);
  const [mentorFullName, setMentorFullName] = useState(mentorSurvey[0].id);

  function handleFormSubmit(e) {
    e.preventDefault();
    submitQuestionPairs(state.pairs);

    const mentees = JSON.parse(localStorage.getItem('Mentees'));
    const mentors = JSON.parse(localStorage.getItem('Mentors'));

    const newMentees = createdUserProfiles(
      mentees,
      menteeEmail,
      menteeFullName
    );
    const newMentors = createdUserProfiles(
      mentors,
      mentorEmail,
      mentorFullName
    );

    localStorage.setItem('Mentees', JSON.stringify(newMentees));
    localStorage.setItem('Mentors', JSON.stringify(newMentors));
    localStorage.setItem('questions_asked', JSON.stringify(state.pairs.length));

    window.location.href = './results.html';
  }

  return (
    <>
      <Pairs pairs={state.pairs} dispatch={dispatch} />
      <form onSubmit={handleFormSubmit} className='question-form'>
        {state.pairs.length && (
          <div className='buttons-container'>
            <input
              className='button-secondary'
              type='button'
              value='Clear selections'
              onClick={() => dispatch({ type: 'clear_pairs' })}
            />
            <input className='button-primary' type='submit' value='&#8674;' />
          </div>
        )}
        <div id='container'>
          <div className='survey'>
            <h2 className='survey-title'>Mentee Survey</h2>
            <ProfileCreatorForm
              type='Mentee'
              data={menteeSurvey}
              setEmail={setMenteeEmail}
              setFullName={setMenteeFullName}
            />
            <Questions
              type='Mentor'
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
              setFullName={setMentorFullName}
            />
            <Questions
              data={mentorSurvey}
              disabled={state.disable_mentor_questions}
              dispatch={dispatch}
              action='mentor_question_selected'
            />
          </div>
        </div>
      </form>
    </>
  );
};

const menteeSurvey = new Storage(Keys.Mentee_Survey).getAll(); //.slice(17);
const mentorSurvey = new Storage(Keys.Mentor_Survey).getAll(); //.slice(17);

export default function QuestionSelection() {
  const [mentees, setMentee] = useState(menteeSurvey);
  const [mentors, setMentor] = useState(mentorSurvey);

  return <Survey menteeSurvey={mentees} mentorSurvey={mentors} />;
}

const top_scroll = document.querySelector('.scroll-top-button');
const btm_scroll = document.querySelector('.scroll-btm-button');

top_scroll.addEventListener('click', () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

btm_scroll.addEventListener('click', () => {
  document.documentElement.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
});

document.addEventListener('scroll', () => {
  if (
    document.documentElement.scrollTop > 1000 ||
    document.body.scrollTop > 1000
  ) {
    top_scroll.classList.remove('hidden-button');
    btm_scroll.classList.add('hidden-button');
  } else {
    top_scroll.classList.add('hidden-button');
    btm_scroll.classList.remove('hidden-button');
  }
});
