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

  /**
   * Sets user's email
   * @param {string} email
   */
  setEmail(email) {
    this.email = email;
  }

  /**
   * Sets user's first name.
   * @param {string} first_name
   */
  setFirstName(first_name) {
    this.first_name = first_name;
  }

  /**
   * Sets user's last name.
   * @param {string} last_name
   */
  setLastName(last_name) {
    this.last_name = last_name;
  }
}
