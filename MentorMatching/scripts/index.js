const db = new Database();
const myForm = document.getElementById('myForm');
const menteeFile = document.getElementById('menteeFile');
const mentorFile = document.getElementById('mentorFile');

const mentees = [];
const mentors = [];

myForm.addEventListener('submit', (e) => {
  e.preventDefault();

  parseCSV(menteeFile.files[0], db.saveMenteeSurvey, db.saveMentees);

  Papa.parse(menteeFile.files[0], {
    complete: function (results) {
      db.saveMenteeSurvey(results.data[0]);

      for (let i = 1; i < results.data[0].length; i++) {
        const mentee = {};
        for (let j = 0; j < results.data[0].length; j++) {
          mentee[results.data[0][j]] = results.data[i][j];
        }
        mentees[i - 1] = mentee;
      }
      db.saveMentees(mentees);
    },
  });

  Papa.parse(mentorFile.files[0], {
    complete: function (results) {
      db.saveMentorSurvey(results.data[0]);

      for (let i = 1; i < results.data[0].length; i++) {
        const mentor = {};
        for (let j = 0; j < results.data[0].length; j++) {
          const question = results.data[0][j];
          const answer = results.data[i][j];
          mentor[question] = answer;
        }
        mentors[i - 1] = mentor;
      }
      db.saveMentors(mentors);
    },
  });

  window.location.href = './question-selection.html';
});
