import Database from './Database';

export default class Survey {
  db = new Database();
  /**
   * Questions in the survey.
   * @type string[]
   */
  questions = [];

  /**
   * Questions that will be matched.
   * @type string[]
   */
  questions_to_match = [];

  /**
   *
   * @returns {string[]} All questions asked on the survey.
   */
  getAll() {
    return this.questions;
  }

  /**
   *
   * @param {number} idx Index of the question in the array.
   * @returns {string}   Question at the index from parameter.
   */
  getQuestionAtIndex(idx) {
    if (idx < this.size() - 1) {
      return this.questions[idx];
    }
  }

  /**
   *
   * @returns {number} The number of questions in the survey.
   */
  size() {
    return this.questions.length;
  }

  /**
   *
   * @returns {string[]} Questions to match.
   */
  getQuestionsToMatch() {
    return this.questions_to_match;
  }

  /**
   *
   * @returns {int} Returns number of questions that will be matched.
   */
  numberOfQuestionsToMatch() {
    return this.questions_to_match.length;
  }
}
