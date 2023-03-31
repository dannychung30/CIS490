export default class Mentee {
  /**
   *
   * @param {String} id
   * @param {{}[]} responses
   * @param {String} email
   * @param {String} firstName
   * @param {String} lastName
   */
  constructor(id, responses, email, firstName, lastName) {
    this.id = id;
    this.responses = responses;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.MAX_MATCHES = 3;
    this.possible_matches = [];
  }
}
