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

displayQuestions('mentee', menteeSurvey, mentee_options);
displayQuestions('mentor', mentorSurvey, mentor_options);

const mentee_question_form = document.getElementById('mentee-question-form');
const mentor_question_form = document.getElementById('mentor-question-form');

mentee_question_form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveSelectedQuestions(menteeSelectedQuestions, mentee_question_form);
});

mentor_question_form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveSelectedQuestions(mentorSelectedQuestions, mentor_question_form);
});

/**
 *
 * @param {string} user Type of user that the questions correspond to.
 * @param {Storage} survey Storage item that includes the User's questions.
 * @param {HTMLDivElement} questionsDiv
 */

function displayQuestions(user, survey, questionsDiv) {
  survey.getAll().forEach((question, idx) => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = user + idx;
    input.name = user + idx;
    input.value = user + idx;
    const label = document.createElement('label');
    label.htmlFor = user + idx;
    label.innerText = question;
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
    option.value = question;
    option.innerText = question;
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
