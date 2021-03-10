import { firebase } from "../firebase";

const PersistLogin = () => {
  const userRef = firebase.firestore().collection("users");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userRef
        .doc(user.uid)
        .get()
        .then((document) => {
          return document.data();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return {};
};

export default PersistLogin;