class Mentees extends Users {
  constructor() {
    this.data = this.db.getMentees();
  }
}
