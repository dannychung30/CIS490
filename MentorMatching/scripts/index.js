const myForm = document.getElementById('myForm');
const menteeFile = document.getElementById('menteeFile');
const mentorFile = document.getElementById('mentorFile');

const keys = new Keys();

const MenteeSurvey = new Storage(Keys.Mentee_Survey);
const Mentees = new Storage(Keys.Mentees);

const MentorSurvey = new Storage(Keys.Mentor_Survey);
const Mentors = new Storage(Keys.Mentors);

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
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
  Papa.parse(file, {
    complete: function (results) {
      results.data[0].forEach((question) => {
        survey.insert(question);
      });
      // survey.insertMany(results.data[0]);

      for (let i = 1; i < results.data[0].length; i++) {
        const user = {};
        for (let j = 0; j < results.data[0].length; j++) {
          user[results.data[0][j]] = results.data[i][j];
        }
        users[i - 1] = user;
      }
      user.insertMany(users);
    },
  });
}
