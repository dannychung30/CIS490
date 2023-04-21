import Storage from '../../Models/Storage';

function createUserProfiles(key, userType, emailID, firstNameID, lastNameID) {
  const currentData = new Storage(key);
  const users = currentData.getAll().map((user) => {
    const email = user.data.responses.find(
      (response) => emailID == response.question
    ).answer;
    const firstName = user.data.responses.find(
      (response) => firstNameID == response.question
    ).answer;
    const lastName = user.data.responses.find(
      (response) => lastNameID == response.question
    ).answer;

    return new userType(
      user.id,
      user.data.responses,
      email,
      firstName,
      lastName
    );
  });
  currentData.clear();
  currentData.insertMany(users);
}

export default createUserProfiles;
