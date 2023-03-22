const pairing_section = document.getElementById('pairing-section');

const menteeSurvey = new Storage(Keys.Mentee_Survey);
const mentorSurvey = new Storage(Keys.Mentor_Survey);

const menteeSelectedQuestions = new Storage(Keys.Mentee_Selected_Questions);
const mentorSelectedQuestions = new Storage(Keys.Mentor_Selected_Questions);

// const menteeSelectedQuestions = menteeSurvey.getQuestionsToMatch().map((q) => {
//   const index = q.split('-')[1];
//   return menteeSurvey.getQuestionAtIndex(index);
// });

// const mentorSelectedQuestions = mentorSurvey.getQuestionsToMatch().map((q) => {
//   const index = q.split('-')[1];
//   return menteeSurvey.getQuestionAtIndex(index);
// });

// for (let i = 0; i < menteeSurvey.numberOfQuestionsToMatch(); i++) {
//   const currentQuestion = menteeSelectedQuestions[i];
//   const select = document.createElement('select');
//   select.name = 'Q' + (i + 1);
//   select.id = 'Q' + (i + 1);

//   const label = document.createElement('label');
//   label.innerText = currentQuestion;
//   const breakEl = document.createElement('br');
//   populateOptions(mentorSelectedQuestions, select);
//   pairing_section.append(label, breakEl, select);
// }

menteeSelectedQuestions.getAll().forEach((question) => {
  const currentQuestion = menteeSurvey.findOne({ data: question.data })[0];
  const select = document.createElement('select');
  select.name = 'Q' + (i + 1);
  select.id = 'Q' + (i + 1);

  const label = document.createElement('label');
  label.innerText = currentQuestion;
  const breakEl = document.createElement('br');
  populateOptions(mentorSelectedQuestions, select);
  pairing_section.append(label, breakEl, select);
});

function populateOptions(questions, tag) {
  questions.forEach((question) => {
    const option = document.createElement('option');
    option.value = question;
    option.innerText = question;
    tag.append(option);
  });
}
