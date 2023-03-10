const db = new Database();
const myForm = document.getElementById('myForm');
const menteeFile = document.getElementById('menteeFile');
const mentorFile = document.getElementById('mentorFile');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const mentees = [];
  const mentors = [];
  localStorage.clear();

  parse(mentees, menteeFile, db.saveMenteeSurvey, db.saveMentees);
  parse(mentors, mentorFile, db.saveMentorSurvey, db.saveMentors);
});

function parse(users, input, saveSurvey, saveUsers) {
  Papa.parse(input.files[0], {
    complete: function (results) {
      saveSurvey(results.data[0]);

      for (let i = 1; i < results.data[0].length; i++) {
        const user = {};
        for (let j = 0; j < results.data[0].length; j++) {
          const question = results.data[0][j];
          const answer = results.data[i][j];
          user[question] = answer;
        }
        users[i - 1] = user;
      }
      saveUsers(users);
    },
  });
}
