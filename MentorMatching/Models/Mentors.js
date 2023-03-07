class Mentors extends Users {
  constructor() {
    this.data = this.db.getMentors();
  }
}
