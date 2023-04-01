import '../styles/global.css';
import '../styles/questionselection.css';
import Storage from '../Models/Storage';
import Keys from '../Models/Keys';
import Mentee from '../Models/Mentee';
import Mentor from '../Models/Mentor';

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
const question_forms_button = document.querySelector(
  '#question-forms-submit-button'
);

question_forms_button.addEventListener('click', submitBothForms);

/**
 *
 * @param {Event} e
 */
function submitBothForms(e) {
  e.preventDefault();

  menteeSelectedQuestions.clear();
  saveSelectedQuestions(mentee_question_form, menteeSelectedQuestions);

  mentorSelectedQuestions.clear();
  saveSelectedQuestions(mentor_question_form, mentorSelectedQuestions);

  let mentee_checked = menteeSelectedQuestions.getAll().length;
  let mentor_checked = mentorSelectedQuestions.getAll().length;
  let difference = Math.abs(mentee_checked - mentor_checked);

  if (mentee_checked > mentor_checked) {
    alert(
      'The Mentee Survey has ' +
        difference +
        ' more question(s) checked than the Mentor Survey. Make sure both surveys have the same amount of questions checked'
    );
  } else if (mentor_checked > mentee_checked) {
    alert(
      'The Mentor Survey has ' +
        difference +
        ' more question(s) checked than the Mentee Survey. Make sure both surveys have the same amount of questions checked'
    );
  } else if ((mentee_checked && mentor_checked) === 0) {
    alert('No question(s) are selected from either survey');
  } else {
    const mentee_email = document.getElementById('mentee-email').value;
    const mentee_first_name =
      document.getElementById('mentee-first-name').value;
    const mentee_last_name = document.getElementById('mentee-last-name').value;

    const mentor_email = document.getElementById('mentor-email').value;
    const mentor_first_name =
      document.getElementById('mentor-first-name').value;
    const mentor_last_name = document.getElementById('mentor-last-name').value;

    const userProfilesCreated = JSON.parse(
      localStorage.getItem('UserProfilesCreated')
    );
    if (!userProfilesCreated) {
      createUserProfiles(
        Keys.Mentees,
        Mentee,
        mentee_email,
        mentee_first_name,
        mentee_last_name
      );
      createUserProfiles(
        Keys.Mentors,
        Mentor,
        mentor_email,
        mentor_first_name,
        mentor_last_name
      );

      localStorage.setItem('UserProfilesCreated', JSON.stringify(true));
    }
    window.location.href = './question-pairing.html';
  }
}
/**
 *
 * @param {Storage} survey Storage item that includes the User's questions.
 * @param {HTMLDivElement} questionsDiv
 */

function displayQuestions(survey, questionsDiv) {
  survey.getAll().forEach(({ id, question }) => {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.value = question;
    const label = document.createElement('label');
    label.htmlFor = id;
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
    option.value = question.id;
    option.innerText = question.question;
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
      checkedBoxes.push({
        id: checkboxes[i].id,
        question: checkboxes[i].value,
      });
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

function createUserProfiles(key, userType, emailID, firstNameID, lastNameID) {
  const currentData = new Storage(key);
  const users = currentData.getAll().map((user) => {
    const email = user.data.responses.find(
      (response) => emailID == response.question
    ).answer;
    const firstName = user.data.responses.find(
      (response) => firstNameID == response.question
    ).answer;
    const lastName = user.data.responses.find(
      (response) => lastNameID == response.question
    ).answer;

    return new userType(
      user.id,
      user.data.responses,
      email,
      firstName,
      lastName
    );
  });
  currentData.clear();
  currentData.insertMany(users);
}
