import '../styles/global.css';
import '../styles/index.css';

import Storage from '../Models/Storage';
import Keys from '../Models/Keys';
import { parse } from 'papaparse';

const myForm = document.getElementById('myForm');
const menteeFile = document.getElementById('menteeFile');
const mentorFile = document.getElementById('mentorFile');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.clear();
  const MenteeSurvey = new Storage(Keys.Mentee_Survey);
  const Mentees = new Storage(Keys.Mentees);

  const MentorSurvey = new Storage(Keys.Mentor_Survey);
  const Mentors = new Storage(Keys.Mentors);

  localStorage.setItem('UserProfilesCreated', JSON.stringify(false));
  parseCSV(menteeFile.files[0], MenteeSurvey, Mentees);
  parseCSV(mentorFile.files[0], MentorSurvey, Mentors);
  window.location.href = './question-selection.html';
});

/**
 *
 * @param {any} file
 * @param {Storage} survey
 * @param {Storage} user
 */
function parseCSV(file, survey, user) {
  const users = [];
  parse(file, {
    complete: function (results) {
      const header = results.data[0].slice(17);
      survey.insertMany(header, 'question');

      for (let i = 1; i < header.length; i++) {
        const user = { responses: [] };
        for (let j = 0; j < header.length; j++) {
          const correspondingQuestion = survey.find({
            question: header[j],
          });
          user.responses.push({
            question: correspondingQuestion[0].id,
            answer: results.data[i][j],
          });
        }
        users[i - 1] = user;
      }
      user.insertMany(users, 'data');
    },
  });
}
