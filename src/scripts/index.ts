import '../styles/global.css';
import '../styles/index.css';

import { parse } from 'papaparse';

const myForm = document.getElementById('myForm');
const menteeFile = document.getElementById('menteeFile') as HTMLInputElement;
const mentorFile = document.getElementById('mentorFile') as HTMLInputElement;

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.clear();
  parseCSV(menteeFile.files[0], 'Mentees', 'MenteeSurvey');
  parseCSV(mentorFile.files[0], 'Mentors', 'MentorSurvey');

  window.location.href = './question-selection.html';
});

interface Response {
  id: string;
  question: Question;
  answer: string;
  multiplier: Number;
}

interface User {
  id: string;
  name: string;
  email: string;
  responses: Response[];
}

interface Mentee extends User {
  matches?: User[];
}

interface Question {
  id: string;
  text: string;
}

/**
 *
 * @param {any} file
 * @param {Storage} survey
 * @param {Storage} user
 */
function parseCSV(file: File, userType: string, survey: string): void {
  const surveyQuestions: Question[] = [];
  const users: User[] = [];

  parse(file, {
    complete: function (results) {
      const header: string[] = results.data[0];
      surveyQuestions.push(
        ...header.map((question) => {
          return { id: crypto.randomUUID(), text: question };
        })
      );

      for (let i = 0; i < header.length; i++) {
        let user: User = {
          id: crypto.randomUUID(),
          email: '',
          name: '',
          responses: [],
        };
        for (let j = 1; j < header.length; j++) {
          let response: Response = {
            id: crypto.randomUUID(),
            question: {
              id: surveyQuestions[i].id,
              text: surveyQuestions[i].text,
            },
            answer: results.data[j][i],
            multiplier: 1,
          };
          user.responses.push(response);
        }
        users.push(user);
      }
      localStorage.setItem(survey, JSON.stringify(surveyQuestions));
      localStorage.setItem(userType, JSON.stringify(users));
    },
  });
}
