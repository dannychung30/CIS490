class Database {
  /**
   * Keys in localstorage
   */
  constants = {
    Mentees: 'Mentees',
    Mentee_Survey: 'MenteeSurvey',
    Mentee_Selected_Questions: 'MenteeSelectedQuestions',
    Mentors: 'Mentors',
    Mentor_Survey: 'MentorSurvey',
    Mentor_Selected_Questions: 'MentorSelectedQuestions',
  };

  /**
   * Saves questions array to local storage.
   * @param {string[]} questions
   */
  saveMenteeSurvey(questions) {
    localStorage.setItem(
      this.constants.Mentee_Survey,
      JSON.stringify(questions)
    );
  }

  /**
   *
   * @returns {string[]} Array of questions asked in Mentee Survey.
   */
  getMenteeSurvey() {
    return JSON.parse(localStorage.getItem(this.constants.Mentee_Survey));
  }

  /**
   * Saves array of responses in {question, answer} format.
   * @param {{string: string}[]} data
   */
  saveMentees(data) {
    localStorage.setItem(this.constants.Mentees, JSON.stringify(data));
  }

  /**
   *
   * @returns {Mentee[]} Returns array of instances of Mentee class.
   */
  getMentees() {
    mentees = JSON.parse(localStorage.getItem(this.constants.Mentees)).map(
      (response) => new Mentee(response['Response ID'], response)
    );
  }

  /**
   * Saves selected questions that will be matched.
   * @param {string[]} selected_questions
   */
  saveSelectedMenteeQuestions(selected_questions) {
    localStorage.setItem(
      this.constants.Mentee_Selected_Questions,
      JSON.stringify(selected_questions)
    );
  }

  /**
   *
   * @returns {string[]} Returns questions selected to be matched for mentees.
   */
  getSelectedMenteeQuestions() {
    return JSON.parse(
      localStorage.getItem(this.constants.Mentee_Selected_Questions)
    );
  }

  /**
   * Saves questions asked to the mentors to local storage.
   * @param {string[]} questions
   */
  saveMentorSurvey(questions) {
    localStorage.setItem(
      this.constants.Mentor_Survey,
      JSON.stringify(questions)
    );
  }

  /**
   *
   * @returns {string[]} Array of questions asked in Mentor Survey.
   */
  getMentorSurvey() {
    return JSON.parse(localStorage.getItem(this.constants.Mentor_Survey));
  }

  /**
   * Saves array of responses in {question, answer} format.
   * @param {{string: string}[]} data
   */
  saveMentors(data) {
    localStorage.setItem(this.constants.Mentors, JSON.stringify(data));
  }

  /**
   *
   * @returns {Mentor[]} Returns array of instances of Mentor class.
   */
  getMentors() {
    return JSON.parse(localStorage.getItem(this.constants.Mentors)).map(
      (response) => new Mentor(response['Response ID'], response)
    );
  }

  /**
   * Saves selected questions that will be matched.
   * @param {string[]} selected_questions
   */
  saveSelectedMentorQuestions(selected_questions) {
    localStorage.setItem(
      this.constants.Mentor_Selected_Questions,
      JSON.stringify(selected_questions)
    );
  }

  /**
   *
   * @returns {string[]} Returns questions selected to be matched for mentors.
   */
  getSelectedMentorQuestions() {
    return JSON.parse(
      localStorage.getItem(this.constants.Mentor_Selected_Questions)
    );
  }
}
