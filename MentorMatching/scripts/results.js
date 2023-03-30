const mentees = new Storage(Keys.Mentees);

const matcher = new Matcher();
matcher.generateScores();

console.log(mentees.getAll());
