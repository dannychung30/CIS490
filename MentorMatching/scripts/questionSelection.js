const menteeSurvey = new Storage(Keys.Mentee_Survey);
const mentorSurvey = new Storage(Keys.Mentor_Survey);

const menteeSelectedQuestions = new Storage(Keys.Mentee_Selected_Questions);
const mentorSelectedQuestions = new Storage(Keys.Mentor_Selected_Questions);

const mentee_first_name_select = document.getElementById('mentee-first-name');
populateOptions(menteeSurvey, mentee_first_name_select);

const mentee_last_name_select = document.getElementById('mentee-last-name');
populateOptions(menteeSurvey, mentee_last_name_select);

const mentee_email_select = document.getElementById('mentee-email');
populateOptions(menteeSurvey, mentee_email_select);

const mentor_first_name_select = document.getElementById('mentor-first-name');
populateOptions(mentorSurvey, mentor_first_name_select);

const mentor_last_name_select = document.getElementById('mentor-last-name');
populateOptions(mentorSurvey, mentor_last_name_select);

const mentor_email_select = document.getElementById('mentor-email');
populateOptions(mentorSurvey, mentor_email_select);

const mentee_options = document.getElementById('mentee-questions');
const mentor_options = document.getElementById('mentor-questions');

displayQuestions(menteeSurvey, mentee_options);
displayQuestions(mentorSurvey, mentor_options);

const mentee_question_form = document.getElementById('mentee-question-form');
const mentor_question_form = document.getElementById('mentor-question-form');

mentee_question_form.addEventListener('submit', (e) => {
  e.preventDefault();
  menteeSelectedQuestions.clear();
  saveSelectedQuestions(mentee_question_form, menteeSelectedQuestions);
});

mentor_question_form.addEventListener('submit', (e) => {
  e.preventDefault();
  mentorSelectedQuestions.clear();
  saveSelectedQuestions(mentor_question_form, mentorSelectedQuestions);
});

/**
 *
 * @param {Storage} survey Storage item that includes the User's questions.
 * @param {HTMLDivElement} questionsDiv
 */

function displayQuestions(survey, questionsDiv) {
  survey.getAll().forEach(({ id, data }) => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.name = data;
    input.value = id;
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = data;
    const breakEl = document.createElement('br');
    questionsDiv.append(input, label, breakEl);
  });
}

/**
 *
 * @param {Storage} survey Storage item that includes the User's questions
 * @param {HTMLSelectElement} selectElement
 */
function populateOptions(survey, selectElement) {
  survey.getAll().forEach((question) => {
    const option = document.createElement('option');
    option.value = question.data;
    option.innerText = question.data;
    selectElement.append(option);
  });
}

/**
 *
 * @param {HTMLFormElement} form
 * @returns {NodeListOf<Element>}
 */
function getCheckedBoxes(form) {
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const checkedBoxes = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedBoxes.push(checkboxes[i].value);
    }
  }
  return checkedBoxes;
}

/**
 *
 * @param {HTMLFormElement} form
 * @param {Storage} userSelectedQuestions Storage item to save the selected questions for.
 */
function saveSelectedQuestions(form, userSelectedQuestions) {
  const selected = getCheckedBoxes(form);
  userSelectedQuestions.insertMany(selected);
}
