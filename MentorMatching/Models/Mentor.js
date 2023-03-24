class Mentor {
  /**
   *
   * @param {String} id
   */
  constructor() {
    this.id = crypto.randomUUID();
    this.responses = {};
    this.mentees = [];
    this.max_mentees = 1;
  }

  /**
   *
   * @param {Mentee} new_mentee New mentee that should be added.
   * @returns {Boolean}         Returns true if operation was successful, false otherwise.
   */
  addMentee(new_mentee) {
    if (!this.isMaxedOut()) {
      mentees = [new_mentee, ...this.mentees];
    }
    return false;
  }

  /**
   *
   * @returns {Boolean} Returns true if the mentor has reached the maximum amount of mentees has been reached, false otherwise.
   */
  isMaxedOut() {
    if (this.mentees.length == this.max_mentees) {
      return true;
    }
    return false;
  }
}
