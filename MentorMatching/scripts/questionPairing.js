const pairing_section = document.getElementById('pairing-section');

const menteeSurvey = new Storage(Keys.Mentee_Survey);
const mentorSurvey = new Storage(Keys.Mentor_Survey);

const menteeSelectedQuestions = new Storage(Keys.Mentee_Selected_Questions);
const mentorSelectedQuestions = new Storage(Keys.Mentor_Selected_Questions);

const questionPairs = new Storage(Keys.Question_Pairs);

menteeSelectedQuestions.getAll().forEach(({ data }) => {
  const currentQuestion = menteeSurvey.findOne({ data });
  const select = document.createElement('select');
  select.id = currentQuestion.id;

  const label = document.createElement('label');
  label.innerText = currentQuestion.data;
  const breakEl = document.createElement('br');
  populateOptions(mentorSelectedQuestions.getAll(), select);
  pairing_section.append(label, breakEl, select);
});

function populateOptions(questions, tag) {
  questions.forEach(({ data }) => {
    const currentQuestion = mentorSurvey.findOne({ data });
    const option = document.createElement('option');
    option.id = currentQuestion.id;
    option.value = currentQuestion.id;
    option.innerText = currentQuestion.data;
    tag.append(option);
  });
}
const submit = document.createElement('input');
submit.type = 'submit';
pairing_section.append(submit);

pairing_section.addEventListener('submit', (e) => {
  e.preventDefault();
  const pairs = [];
  menteeSelectedQuestions.getAll().forEach(({ data }) => {
    const currentQuestion = menteeSurvey.findOne({ data });
    const menteeQuestion = document.getElementById(currentQuestion.id);
    pairs.push({
      menteeQuestion: currentQuestion.id,
      mentorQuestion: menteeQuestion.value,
    });
  });
  questionPairs.insertMany(pairs);
});
