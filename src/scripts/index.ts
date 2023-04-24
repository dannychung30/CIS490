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
  question: String;
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
  matches: Mentor[];
}

interface Mentor extends User {
  max_mentees: Number;
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

      for (let i = 1; i < header.length; i++) {
        let user: Mentee | Mentor;
        if (userType === 'Mentees') {
          user = {
            id: crypto.randomUUID(),
            email: '',
            name: '',
            responses: [],
            matches: [],
          };
        } else if (userType === 'Mentors') {
          user = {
            id: crypto.randomUUID(),
            email: '',
            name: '',
            responses: [],
            max_mentees: 1,
          };
        }
        for (let j = 0; j < header.length; j++) {
          let response: Response = {
            id: surveyQuestions[j].id,
            question: surveyQuestions[j].text,
            answer: results.data[i][j],
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
