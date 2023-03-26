const pairing_section = document.getElementById('pairing-section');

const menteeSurvey = new Storage(Keys.Mentee_Survey);
const mentorSurvey = new Storage(Keys.Mentor_Survey);

const menteeSelectedQuestions = new Storage(Keys.Mentee_Selected_Questions);
const mentorSelectedQuestions = new Storage(Keys.Mentor_Selected_Questions);

menteeSelectedQuestions.getAll().forEach((question) => {
  const select = document.createElement('select');
  select.id = question.id;

  const label = document.createElement('label');
  label.innerText = question.question;
  const breakEl = document.createElement('br');
  populateOptions(mentorSelectedQuestions.getAll(), select);
  pairing_section.append(label, breakEl, select);
});

function populateOptions(questions, tag) {
  questions.forEach((question) => {
    const option = document.createElement('option');
    option.id = question.id;
    option.value = question.id;
    option.innerText = question.question;
    tag.append(option);
  });
}
const submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Submit';
pairing_section.append(submit);

pairing_section.addEventListener('submit', (e) => {
  e.preventDefault();
  const pairs = new Storage(Keys.Question_Pairs);
  pairs.clear();
  savePairs();

  const matcher = new Matcher(pairs);
  matcher.go_through_data();
});

function savePairs() {
  const questionPairs = new Storage(Keys.Question_Pairs);

  const pairs = [];
  menteeSelectedQuestions.getAll().forEach((question) => {
    const menteeQuestion = document.getElementById(question.id);
    pairs.push({
      menteeQuestion: question.id,
      mentorQuestion: menteeQuestion.value,
    });
  });
  questionPairs.insertMany(pairs);
}
