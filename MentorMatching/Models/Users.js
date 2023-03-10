import User from './User.js';
import Database from './Database.js';

export default class Users {
  /**
   * Data retrieved from database
   * @type {string[]}
   */
  data;
  db = new Database();
  /**
   *
   * @param {int} response_id
   * @returns {User}
   */
  find(response_id) {
    return this.data.filter((user) => user.id == response_id);
  }

  /**
   *
   * @returns {int} The number of users.
   */
  size() {
    return this.data.length;
  }
}
