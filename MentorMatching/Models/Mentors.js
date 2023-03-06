class Mentors extends Users {
  constructor() {
    super();
    this.data = this.db.getMentors();
  }
}
