import Storage from './Storage';
import Keys from './Keys';
import Mentee from '../Models/Mentee';
import Mentor from '../Models/Mentor';
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
        let total_score = this.tallyScore(mentee, mentor);
        matches.push({ mentor, score: total_score });
        matches.sort((a, b) => b.score - a.score);
      });
      mentee.possible_matches = matches.slice(0, 3);
    });

    mentees.clear();
    mentees.insertMany(mentees_copy);
  }

  /**
   * @param {Mentee} mentee
   * @param {Mentor} mentor
   * @returns {number}
   */
  tallyScore(mentee, mentor) {
    let question_pairs = new Storage(Keys.Question_Pairs).getAll();
    let score = 0;

    question_pairs.forEach(({ menteeQuestion, mentorQuestion }) => {
      let mentee_answer = this.getAnswer(mentee, menteeQuestion);
      let mentor_answer = this.getAnswer(mentor, mentorQuestion);
      score += this.get_score(mentee_answer.answer, mentor_answer.answer);
    });

    return score;
  }

  /**
   *
   * @param {Mentee | Mentor} user
   * @param {String} userQuestion
   * @returns the answer for the given question
   */
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
    return score;
  }
}
