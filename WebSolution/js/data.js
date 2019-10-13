import firebase from "react-native-firebase";

function writeUserData(userId, name, email, imageUrl) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
}


function testPostJob() {
  postJob(1,"cleaning","bob", 123, "1/1","clean stuff","earth");
}
function postJob(
  jobID,
  jobName,
  posterName,
  posterID,
  datePosted,
  description,
  location
) {
  const uuidv1 = require("uuid/v1");
  firebase
    .database()
    .ref("jobID/" + jobID)
    .set({
      jobID: {uuidv1()},
      jobName: jobName,
      posterName: posterName,
      posterID: posterID,
      fulfilled: false,
      datePosted: datePosted,
      description: description,
      replied: [],
      location: location
    });
}

