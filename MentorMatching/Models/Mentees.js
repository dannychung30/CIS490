class Mentees extends Users {
  constructor() {
    super();
    this.data = this.db.getMentees();
  }
}
