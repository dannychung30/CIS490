class MentorSurvey extends Survey {
  constructor() {
    super();
    this.questions = this.db.getMentorSurvey();
    this.questions_to_match = this.db.getSelectedMentorQuestions();
  }
}
