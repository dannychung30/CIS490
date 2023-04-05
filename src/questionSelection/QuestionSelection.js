import '../styles/global.css';
import '../styles/questionselection.css';
import Storage from '../Models/Storage';
import Keys from '../Models/Keys';
import { useEffect, useState } from 'react';

const menteeSurvey = new Storage(Keys.Mentee_Survey);
const mentorSurvey = new Storage(Keys.Mentor_Survey);

// const menteeSelectedQuestions = new Storage(Keys.Mentee_Selected_Questions);
// const mentorSelectedQuestions = new Storage(Keys.Mentor_Selected_Questions);

const ProfileCreatorSection = ({
  data,
  setEmail,
  setFirstName,
  setLastName,
}) => {
  return (
    <div className='profile-creator'>
      <div>
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
      <div>
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
      <div>
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
};

const Questions = ({ data }) => {
  return data.map(({ id, question }) => (
    <div key={id}>
      <input type='checkbox' id={id} value={question} />
      <label htmlFor={id}>{question}</label>
    </div>
  ));
};

const Survey = ({ data }) => {
  const [email, setEmail] = useState(data[0].id);
  const [firstName, setFirstName] = useState(data[0].id);
  const [lastName, setLastName] = useState(data[0].id);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.table([{ email, firstName, lastName }]);
  }

  return (
    <form onSubmit={handleFormSubmit} className='question-form'>
      <ProfileCreatorSection
        data={data}
        setEmail={setEmail}
        setFirstName={setFirstName}
        setLastName={setLastName}
      />
      <Questions data={data} />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default function QuestionSelection() {
  return (
    <div id='container'>
      <Survey data={menteeSurvey.getAll().slice(17)} />
      <Survey data={mentorSurvey.getAll().slice(17)} />
    </div>
  );
}
