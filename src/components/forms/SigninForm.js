import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View,} from "react-native";
import { Button,Input, } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
import Alert from "../../shared/Alert";
import { Context as AuthContext } from "../../providers/AuthContext";
import theme from "../../theme/index";

const SigninForm = () => {
  // Implementación del Context para funcionalidades de autenticación
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError(state.errorMessage);
  }, [state.errorMessage]);

  useEffect(() => {
    console.log(state.user);
  }, [state.user]);

  // Verifica que se ingresan los datos del email y el password
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
    // Iniciar sesión implementado el Contexto de autenticación
    signin(email, password);
  };

  return (
    <View>
      {error ? <Alert title={error} type="error" /> : null}
      <Input
        placeholder="   Email"
        leftIcon={<Icon name="envelope" />}
        autoCapitalize="none"
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
      <Input
        placeholder="   Password"
        leftIcon={<Icon name="lock" />}
        autoCapitalize="none"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onBlur={() => {
          handleVerify("password");
        }}
        errorMessage={passwordError ? "Please, write your password" : null}
      />
      <Button title="Sign In" buttonStyle={styles.button} onPress={handleSignin}/>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    borderRadius: 50,
    marginBottom: 20,
    marginLeft:100,
    marginRight:100,
    backgroundColor: theme.colors.secondary,
  },
});

export default SigninForm;