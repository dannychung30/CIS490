import '../styles/global.css';
import '../styles/questionpairing.css';
import Storage from '../Models/Storage';
import Keys from '../Models/Keys';

const pairing_section = document.querySelector('.pairing-section');
const mentee_questions = document.querySelector('.mentee-questions');
const mentor_questions = document.querySelector('.mentor-questions');

const submit_button_container = document.querySelector(
  '.submit-button-container'
);
const pair_form = document.getElementById('pair-form');

const menteeSelectedQuestions = new Storage(Keys.Mentee_Selected_Questions);
const mentorSelectedQuestions = new Storage(Keys.Mentor_Selected_Questions);

menteeSelectedQuestions.getAll().forEach((question) => {
  const break_line = document.createElement('br');
  const select_divs = document.createElement('div');
  const label_divs = document.createElement('div');
  const select = document.createElement('select');

  label_divs.classList.add('label-containers');
  select_divs.classList.add('select-containers');
  select.id = question.id;
  select.classList.add('selects');

  const label = document.createElement('label');
  label.innerText = question.question + ': ';
  populateOptions(mentorSelectedQuestions.getAll(), select);
  label_divs.append(label);
  select_divs.append(select);
  mentee_questions.append(label_divs);
  mentor_questions.append(select_divs);
  // mentee_questions.append(label);
  // mentor_questions.append(select);
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
submit.value = 'Get Matches';
submit.className = 'submit-question';
submit_button_container.append(submit);

pair_form.addEventListener('submit', (e) => {
  e.preventDefault();
  const pairs = new Storage(Keys.Question_Pairs);
  pairs.clear();
  savePairs();
  window.location.href = './results.html';
});

function savePairs() {
  const questionPairs = new Storage(Keys.Question_Pairs);

  const pairs = [];
  menteeSelectedQuestions.getAll().forEach(({ id, question }) => {
    const menteeQuestion = document.getElementById(id);
    console.log(menteeQuestion);
    pairs.push({
      menteeQuestion: { id, question },
      mentorQuestion: {
        id: menteeQuestion.value,
        question: menteeQuestion.textContent,
      },
      weightMultiplier: 1,
    });
  });
  questionPairs.insertMany(pairs);
}
