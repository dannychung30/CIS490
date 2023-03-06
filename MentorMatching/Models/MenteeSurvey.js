class MenteeSurvey extends Survey {
  constructor() {
    super();
    this.questions = this.db.getMenteeSurvey();
    this.questions_to_match = this.db.getSelectedMenteeQuestions();
  }
}
