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

    mentees.forEach((mentee) => {
      mentors.forEach((mentor) => {
        let total_score = this.tally_score(mentee, mentor);
        console.log(
          `Mentee: ${mentee.id} and Mentor: ${mentor.id} scored: ${total_score}`
        );
      });
    });
  }

  /**
   * @param {Person} mentee
   * @param {Person} mentor
   * @returns {number}
   */
  tally_score(mentee, mentor) {
    let question_pairs = new Storage(Keys.Question_Pairs).getAll();
    let score = 0;

    question_pairs.forEach((pair) => {
      const { menteeQuestion, mentorQuestion } = pair;

      let mentee_answer = mentee.responses.find(
        ({ question }) => question == menteeQuestion
      );
      let mentor_answer = mentor.responses.find(
        ({ question }) => question == mentorQuestion
      );
      score += this.get_score(mentee_answer.answer, mentor_answer.answer);
    });

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
