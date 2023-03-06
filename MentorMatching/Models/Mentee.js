class Mentee extends User {
  MAX_MATCHES = 3;

  possible_matches = [];

  constructor(responses) {
    super(responses);
  }

  /**
   *
   * @param {Mentor} mentor Mentor to add to possible matches.
   * @returns {Boolean}     True if the operation was successful, false if the operation was unsuccesful.
   */
  addPossibleMatch(mentor) {
    if (!this.isMaxedOut()) {
      this.possible_matches = [mentor, ...this.possible_matches];
      return true;
    }
    return false;
  }

  /**
   *
   * @returns {Boolean} Whether the mentee has reached the maximum amount of matches.
   */
  isMaxedOut() {
    if (this.possible_matches.length == this.maxedMatches) {
      return true;
    }
    return false;
  }
}
