class Matcher {
  constructor(data) {
    this.data = data;
  }

  /**
   * @returns {none}
   */
  go_through_data() {
    const mentees = new Storage(Keys.Mentees).getAll();
    const mentors = new Storage(Keys.Mentors).getAll();

    for (let i = 0; i < mentees.length; i++) {
      for (let j = 0; j < mentors.length; j++) {
        let total_score = this.tally_score(mentees[j], mentors[i]);
        console.log(
          `Mentee: ${mentees[j].id} and Mentor: ${mentors[i].id} scored: ${total_score}`
        );
      }
    }
  }

  /**
   * @param {Person} mentee
   * @param {Person} mentor
   * @returns {number}
   */
  tally_score(mentee, mentor) {
    let question_pairs = new Storage(Keys.Question_Pairs).getAll();
    let score = 0;
    for (let i = 0; i < question_pairs.length; i++) {
      let mentee_answer = mentee.responses.find(
        (question) => question.question == question_pairs[i].menteeQuestion
      );
      let mentor_answer = mentor.responses.find(
        (question) => question.question == question_pairs[i].mentorQuestion
      );
      score += this.get_score(mentee_answer.answer, mentor_answer.answer);
    }
    return score;
  }

  /**
   * @param {String} mentor_answer
   * @param {String} mentor_answer
   * @returns {number}
   */
  get_score(mentee_answer, mentor_answer) {
    let score = fuzzball.ratio(mentee_answer, mentor_answer);
    console.log(
      `Mentee Answered: ${mentee_answer}\nMentor Answered: ${mentor_answer}`
    );
    return score;
  }
}
