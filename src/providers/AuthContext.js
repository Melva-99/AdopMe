import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

// Acciones disponibles para el reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "errorMessage":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, user: action.payload, loggedIn: true };
    case "signout":
      return { ...state, user: action.payload, loggedIn: false };
    case "persistLogin":
      return {
        ...state,
        user: action.payload.user,
        loggedIn: action.payload.loggedIn,
        loading: false,
      };
    default:
      return state;
  }
};

// Permite el inicio de sesión mediante firebase con email y password
const signin = (dispatch) => (email, password) => {
  // Hacer la petición al API de firebasee
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      // Obtener el Unique Identifier generado para cada usuario
      // Firebase -> Authentication
      const uid = response.user.uid;

      // Obtener la colección desde Firebase
      const usersRef = firebase.firestore().collection("users");

      // Verificar que el usuario existe en Firebase authentication
      // y también está almacenado en la colección de usuarios.
      usersRef
        .doc(uid)
        .get()
        .then((firestoreDocument) => {
          if (!firestoreDocument.exists) {
            dispatch({
              type: "errorMessage",
              payload: "User does not exist in the database!",
            });
          } else {
            // Llamar el reducer y enviarle los valores del usuario al estado
            dispatch({ type: "errorMessage", payload: "" });
            dispatch({ type: "signin", payload: firestoreDocument.data() });
          }
        });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Cierra la sesión del usuario
const signout = (dispatch) => () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "signout", payload: {} });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

// Verifica si existe el token de firebase para iniciar sesión sin credenciales
const persistLogin = (dispatch) => () => {
  const userRef = firebase.firestore().collection("users");

  // Si el usuario ya se ha autenticado previamente, retornar
  // la información del usuario, caso contrario,retonar un objeto vacío.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userRef
        .doc(user.uid)
        .get()
        .then((document) => {
          dispatch({
            type: "persistLogin",
            payload: { user: document.data(), loggedIn: true },
          });
        })
        .catch((error) => {
          dispatch({ type: "errorMessage", payload: error.message });
        });
    } else {
      dispatch({
        type: "persistLogin",
        payload: { user: {}, loggedIn: false },
      });
    }
  });
};

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        return true;
      }
    }
  }
  return false;
}

const signInWithGoogle = (dispatch) => (googleUser) =>{
  const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    if (!isUserEqual(googleUser, firebaseUser)) {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((response) => {
          const uid = response.user.uid;
          const email = response.user.email
          const fullname = response.user.displayName
          const data = {
            id: uid,
            email,
            fullname,
          };
          const usersRef = firebase.firestore().collection("users");
          usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                  dispatch({
                    type: "signup",
                    payload: { user: data, registered: true },
                  });
                })
                .catch((error) => {
                  dispatch({ type: "errorMessage", payload: error.message });
                });
            } else {
              dispatch({ type: "errorMessage", payload: "" });
              dispatch({ type: "signin", payload: firestoreDocument.data() });
            }
          });
        })
        .catch((error) => { 
          dispatch({ type: "errorMessage", payload: error.message });
        });
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
}
const createAdoptMe = (dispatch) => (petId, petName,userid) => {
  const data = {
    uid:userid,
    petName: petName,
    petId:petId,
  };
      // Obtener la colección desde Firebase
      const userData = firebase.firestore().collection("getAdoptme");
      // Almacenar la información de la mascota que se va dar en adopción en Firestore
      userData
        .add(data)
        .then((response) => {
         
          dispatch({ type: "errorMessage", payload: "" });
        })
        .catch((error) => {
          dispatch({ type: "errorMessage", payload: error.message });
        });
    };

// Exportar las funcionalidades requeridas al contexto
export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signout,
    persistLogin,
    signInWithGoogle,
    createAdoptMe,
  },
  {
    user: {},
    errorMessage: "",
    loggedIn: false,
    loading: true,
  }
);