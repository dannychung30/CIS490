export default function createdUserProfiles(users, emailID, fullNameID) {
  const email = users[0].responses.findIndex(
    (question) => question.id == emailID
  );
  const fullName = users[0].responses.findIndex(
    (question) => question.id == fullNameID
  );
  const newUsers = users.map((user) => {
    const emailAnswer = user.responses[email].answer;
    const fullNameAnswer = user.responses[fullName].answer;

    return {
      ...user,
      email: emailAnswer,
      name: fullNameAnswer,
    };
  });

  return newUsers;
}
