const db = new Database();

const menteeSurvey = new MenteeSurvey();
const mentorSurvey = new MentorSurvey();

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

function populateOptions(survey, tag) {
  survey.getAll().forEach((question) => {
    const option = document.createElement('option');
    option.value = question;
    option.innerText = question;
    tag.append(option);
  });
}

const mentee_options = document.getElementById('mentee-options');

menteeSurvey.getAll().forEach((question, idx) => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'mentee-' + idx;
  input.name = 'mentee-' + idx;
  input.value = 'mentee-' + idx;
  const label = document.createElement('label');
  label.htmlFor = 'mentee-' + idx;
  label.innerText = question;
  const breakEl = document.createElement('br');
  mentee_options.append(input, label, breakEl);
});

const mentor_options = document.getElementById('mentor-options');

mentorSurvey.getAll().forEach((question, idx) => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'mentor-' + idx;
  input.name = 'mentor-' + idx;
  input.value = 'mentor-' + idx;
  const label = document.createElement('label');
  label.htmlFor = 'mentor-' + idx;
  label.innerText = question;
  const breakEl = document.createElement('br');
  mentor_options.append(input, label, breakEl);
});

const mentee_question_form = document.getElementById('mentee-question-form');

const mentor_question_form = document.getElementById('mentor-question-form');

mentee_question_form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selected = getCheckedBoxes(mentee_question_form);
  db.saveSelectedMenteeQuestions(selected);
});

mentor_question_form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selected = getCheckedBoxes(mentor_question_form);
  db.saveSelectedMentorQuestions(selected);
});

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
