class Users {
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
   * @returns {int} The number of respondants.
   */
  size() {
    return this.data.length;
  }
}
