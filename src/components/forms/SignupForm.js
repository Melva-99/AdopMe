import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { firebase } from "../../firebase";
import { validate } from "email-validator";
import Alert from "../../shared/Alert";
<<<<<<< HEAD
=======
import theme from "../../theme/index"
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973

const SignupForm = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState("");

  // Verifica que los datos ingresados sean correctos
  const handleVerify = (input) => {
    if (input === "fullname") {
      // Verificar el nombre del usuario
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "email") {
      // Verificar el correo electrónico
      if (!email) setEmailError(true);
      else if (!validate(email)) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      // Verificar la contraseña
      if (!password) setPasswordError(true);
      else if (password.length < 6) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      // Verificar la confirmación de la contraseña
      if (!confirmPassword) setConfirmPasswordError(true);
      else if (confirmPassword !== password) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    }
  };
  const handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // Obtener el Unique Identifier generado para cada usuario
        // Firebase -> Authentication
        const uid = response.user.uid;

        // Construir el objeto que le enviaremos a la collección de "users"
        const data = {
          id: uid,
          email,
          fullname,
        };

        // Obtener la colección desde Firebase
        const usersRef = firebase.firestore().collection("users");

        // Almacenar la información del usuario que se registra en Firestore
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <View>
      {error ? <Alert type="error" title={error} /> : null}
      <Input
<<<<<<< HEAD
        placeholder="Full name"
        leftIcon={<Icon name="user" />}
=======
        inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input}
        placeholder="   Full name"
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
        value={fullname}
        onChangeText={setFullname}
        onBlur={() => {
          handleVerify("fullname");
        }}
        errorMessage={
          fullnameError ? "Por favor ingresa tu nombre completo" : ""
        }
      />
      <Input
<<<<<<< HEAD
        placeholder="Email"
        leftIcon={<Icon name="envelope" />}
=======
        inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input}
        placeholder="   Email"
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError ? "Por favor ingresa una dirección de correo válida" : ""
        }
      />
      <Input
<<<<<<< HEAD
        placeholder="Password"
        leftIcon={<Icon name="lock" />}
=======
        inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input}
        placeholder="   Password"
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={
          passwordError
            ? "Por favor ingresa una contraseña de mínimo 6 caracteres"
            : ""
        }
      />
<<<<<<< HEAD
      <Input
        placeholder="Confirm password"
        leftIcon={<Icon name="lock" />}
=======
      <Input 
        inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input}
        placeholder="   Confirm password"
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("confirmPassword");
        }}
        errorMessage={
          confirmPasswordError
            ? "Por favor reingresa la contraseña y verifica que es correcta"
            : ""
        }
      />
<<<<<<< HEAD
      <Button title="Create account" onPress={handleSignup} />
=======
      <Button buttonStyle={styles.button} title="Create account" onPress={handleSignup} />
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({});
=======
const styles = StyleSheet.create({
  button: {
    width: 220,
    backgroundColor: theme.colors.secondary,
    margin: 15,
    borderRadius: 50,
    alignSelf: "Center",
  },
  input:{
    marginTop:30,
    borderRadius: 50,
    borderStyle: "Solid",
    border:1,
  },
});
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973

export default SignupForm;