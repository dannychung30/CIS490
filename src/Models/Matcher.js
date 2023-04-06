import Storage from './Storage';
import Keys from './Keys';
import Mentee from '../Models/Mentee';
import Mentor from '../Models/Mentor';
import { ratio } from 'fuzzball';

export default class Matcher {
  mentees = new Storage(Keys.Mentees);
  mentors = new Storage(Keys.Mentors);
  question_pairs = new Storage(Keys.Question_Pairs);

  /**
   * @returns {none}
   */
  generateScores() {
    const mentees_copy = new Storage(Keys.Mentees).getAll();

    mentees_copy.forEach((mentee) => {
      const matches = [];
      this.mentors.getAll().forEach((mentor) => {
        let total_score = this.tallyScore(mentee, mentor);
        matches.push({ mentor, scores: total_score });
        matches.sort((a, b) => b.scores.total_score - a.scores.total_score);
      });
      mentee.possible_matches = matches.slice(0, 5);
    });

    this.mentees.clear();
    this.mentees.insertMany(mentees_copy);
  }

  /**
   * @param {Mentee} mentee
   * @param {Mentor} mentor
   * @returns {number}
   */
  tallyScore(mentee, mentor) {
    let total_score = 0;
    const scores = {};

    this.question_pairs
      .getAll()
      .forEach(({ menteeQuestion, mentorQuestion, weightMultiplier }) => {
        let mentee_answer = this.getAnswer(mentee, menteeQuestion.id);
        let mentor_answer = this.getAnswer(mentor, mentorQuestion.id);
        const answerScore =
          this.get_score(mentee_answer.answer, mentor_answer.answer) *
          weightMultiplier;

        scores.question = menteeQuestion;
        scores.score = answerScore;

        total_score += answerScore;
      });

    return { total_score, ...scores };
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
