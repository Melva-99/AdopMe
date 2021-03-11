import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import { Input, Button } from "react-native-elements";
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import Alert from "../../shared/Alert";
import theme from "../../theme/index"


const SigninForm = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleVerify = (input) => {
    if (input === "email") {
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    }
  };

  const handleSignin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              setError("User does not exist in the database!");
              return;
            }
            const user = firestoreDocument.data();

            navigation.navigate("Home", { user });
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {error ? <Alert title={error} type="error" /> : null}
      <Input inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input}
        placeholder="   Email"
        value={email}
        onChangeText={setEmail}
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError
            ? "Please, write your email"
            : null
        }
      />
      <Input inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input}
        placeholder="   Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={passwordError ? "Please, write your password" : null}
      />
      <Button buttonStyle={styles.button} title="Sign In" onPress={handleSignin} />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 110,
    backgroundColor: theme.colors.secondary,
    margin: 15,
    borderRadius: 50,
    alignSelf: "Center",
    
  },
  input:{
    marginTop:50,
    borderRadius: 50,
    borderStyle: "Solid",
    border:1,
  },
  
});

export default SigninForm;