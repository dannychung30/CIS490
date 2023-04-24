export default function createdUserProfiles(
  users,
  emailID,
  firstNameID,
  lastNameID
) {
  const email = users[0].responses.findIndex(
    (question) => question.id == emailID
  );
  const firstName = users[0].responses.findIndex(
    (question) => question.id == firstNameID
  );
  const lastName = users[0].responses.findIndex(
    (question) => question.id == lastNameID
  );
  const newUsers = users.map((user) => {
    const emailAnswer = user.responses[email].answer;
    const firstNameAnswer = user.responses[firstName].answer;
    const lastNameAnswer = user.responses[lastName].answer;

    return {
      ...user,
      email: emailAnswer,
      name: `${firstNameAnswer} ${lastNameAnswer}`,
    };
  });

  return newUsers;
}
