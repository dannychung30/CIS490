import Storage from './Storage';
import Keys from './Keys';
import Mentee from '../Models/Mentee';
import Mentor from '../Models/Mentor';
import { compareTwoStrings } from 'string-similarity';

export default class Matcher {
  /**
   * @returns {none}
   */
  generateScores() {
    const mentees = JSON.parse(localStorage.getItem('Mentees'));
    const mentors = JSON.parse(localStorage.getItem('Mentors'));

    const newMentees = mentees.map((mentee) => {
      const matches = [];
      mentors.forEach((mentor) => {
        let total_score = this.tallyScore(mentee, mentor);
        matches.push({ mentor, scores: total_score });
        matches.sort((a, b) => b.scores.total_score - a.scores.total_score);
      });
      return { ...mentee, matches: matches.splice(0, 5) };
    });
    localStorage.setItem('Mentees', JSON.stringify(newMentees));
  }

  /**
   * @param {Mentee} mentee
   * @param {Mentor} mentor
   * @returns {number}
   */
  tallyScore(mentee, mentor) {
    const question_pairs = new Storage(Keys.Question_Pairs);
    let total_score = 0;
    const scores = {};

    question_pairs.getAll().forEach(({ menteeQuestion, mentorQuestion }) => {
      let mentee_answer = this.getAnswer(mentee, menteeQuestion.idx);
      let mentor_answer = this.getAnswer(mentor, mentorQuestion.idx);
      let weight =
        parseInt(this.getAnswer(mentee, menteeQuestion.weight)[0]) + 1;

      const answer_score = this.get_score(mentee_answer, mentor_answer, weight);

      total_score += answer_score;
    });

    return {
      total_score: total_score,
      ...scores,
    };
  }

  /**
   *
   * @param {Mentee | Mentor} user
   * @param {String} userQuestion
   * @returns the answer for the given question
   */
  getAnswer(user, idx) {
    return user.responses[idx].answer;
  }

  /**
   * @param {String} mentor_answer
   * @param {String} mentor_answer
   * @returns {number}
   */
  get_score(mentee_answer, mentor_answer, weight) {
    let questions_asked = parseInt(localStorage.getItem('questions_asked'));

    const similarity_score =
      compareTwoStrings(mentee_answer, mentor_answer) * 100;
    const with_weight_multiplier = similarity_score * weight;
    const out_of_questions_asked = with_weight_multiplier / questions_asked;
    return Math.round(out_of_questions_asked);
  }
}
