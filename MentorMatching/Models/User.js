class Survey {
  db = new Database();
  questions = [];
  questions_to_match = [];

  getAll() {
    return this.questions;
  }

  getQuestionAtIndex(idx) {
    if (idx < this.size() - 1) {
      return this.questions[idx];
    }
  }

  size() {
    return this.questions.length;
  }

  getQuestionsToMatch() {
    return this.questions_to_match;
  }
}

class MenteeSurvey extends Survey {
  constructor() {
    super();
    this.questions = this.db.getMenteeSurvey();
    this.questions_to_match = this.db.getSelectedMenteeQuestions();
  }
}

class MentorSurvey extends Survey {
  constructor() {
    super();
    this.questions = this.db.getMentorSurvey();
    this.questions_to_match = this.db.getSelectedMentorQuestions();
  }
}

class User {
  db = new Database();
  data = [];

  find(id) {
    return this.data.filter((user) => user.id == id);
  }

  size() {
    return this.data.length;
  }
}

class Student extends User {
  MAX_MATCHES = 3;

  constructor(first_name, last_name, email) {
    super(first_name, last_name, email);
    this.possible_matches = [];
  }

  addPossibleMatch(mentor) {
    if (this.possible_matches.length < this.MAX_MATCHES) {
      this.possible_matches = [...mentor, this.possible_matches];
      return true;
    }
    return false;
  }
}

class Mentor extends User {
  constructor(first_name, last_name, email, max_metees) {
    super(first_name, last_name, email);
    this.max_metees = max_metees;
    this.num_of_mentees = 0;
    this.mentees = [];
  }

  getCurrentAmountMentees() {
    return this.mentees.length;
  }

  addMentee(student) {
    if (this.getCurrentAmountMentees() < this.max_metees) {
      this.mentees = [student, ...this.mentees];
      return true;
    }
    return false;
  }
}

class Database {
  saveMenteeSurvey(data) {
    localStorage.setItem('MenteeSurvey', JSON.stringify(data));
  }

  getMenteeSurvey() {
    return JSON.parse(localStorage.getItem('MenteeSurvey'));
  }

  saveMentees(data) {
    localStorage.setItem('Mentees', JSON.stringify(data));
  }

  getMentees() {
    return JSON.parse(localStorage.getItem('Mentees'));
  }

  saveSelectedMenteeQuestions(data) {
    localStorage.setItem('MenteeSelectedQuestions', JSON.stringify(data));
  }

  getSelectedMenteeQuestions() {
    return JSON.parse(localStorage.getItem('MenteeSelectedQuestions'));
  }

  saveMentorSurvey(data) {
    localStorage.setItem('MentorSurvey', JSON.stringify(data));
  }

  getMentorSurvey() {
    return JSON.parse(localStorage.getItem('MentorSurvey'));
  }

  saveMentors(data) {
    localStorage.setItem('Mentors', JSON.stringify(data));
  }

  getMentors() {
    return JSON.parse(localStorage.getItem('Mentors'));
  }

  saveSelectedMentorQuestions(data) {
    localStorage.setItem('MentorSelectedQuestions', JSON.stringify(data));
  }

  getSelectedMentorQuestions() {
    return JSON.parse(localStorage.getItem('MentorSelectedQuestions'));
  }
}
