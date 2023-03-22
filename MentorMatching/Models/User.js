class User {
  /**
   * @type {string}
   */
  first_name;
  /**
   * @type {string}
   */
  last_name;
  /**
   * @type {string}
   */
  email;

  /**
   *
   * @param {int} response_id
   * @param {int} responses
   */
  constructor(response_id, responses) {
    this.response_id = response_id;
    this.responses = responses;
  }
}
