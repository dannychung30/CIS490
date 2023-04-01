import Storage from './Storage';
import Keys from './Keys';
import { ratio } from 'fuzzball';

export default class Matcher {
  /**
   * @returns {none}
   */
  generateScores() {
    const mentees = new Storage(Keys.Mentees);
    const mentors = new Storage(Keys.Mentors).getAll();

    const mentees_copy = new Storage(Keys.Mentees).getAll();

    mentees_copy.forEach((mentee) => {
      const matches = [];
      mentors.forEach((mentor) => {
        let total_score = this.tally_score(mentee, mentor);
        // console.log(
        //   `Mentee: ${mentee.id} and Mentor: ${mentor.id} scored: ${total_score}`
        // );
        matches.push({ mentor, score: total_score });
        matches.sort((a, b) => b.score - a.score);
      });
      mentee.possible_matches = matches.slice(0, 3);
    });

    mentees.clear();
    mentees.insertMany(mentees_copy);
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

      let mentee_answer = this.getAnswer(mentee, menteeQuestion);
      let mentor_answer = this.getAnswer(mentor, mentorQuestion);

      score += this.get_score(mentee_answer.answer, mentor_answer.answer);
    });

    return score;
  }

  getAnswer(user, userQuestion) {
    return user.responses.find(({ question }) => question == userQuestion);
  }

  /**
   * @param {String} mentor_answer
   * @param {String} mentor_answer
   * @returns {number}
   */
  get_score(mentee_answer, mentor_answer) {
    let score = ratio(mentee_answer, mentor_answer);
    // console.log(
    //   `Mentee Answered: ${mentee_answer}\nMentor Answered: ${mentor_answer}`
    // );
    return score;
  }
}
