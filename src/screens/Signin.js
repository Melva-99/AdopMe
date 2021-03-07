import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Image, Input, Button } from "react-native-elements";
import Logo from "../shared/Logo";
import SigninForm from "../components/forms/SigninForm";
import theme from "../theme";
import Alert from "../shared/Alert";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation, route }) => {
  const { userCreated } = route.params;
  return (
    <View style={styles.container}>
      <Logo />
      {userCreated ? (
        <Alert type="success" title="User created! You can now sign in!" />
      ) : null}
      <SigninForm />
      <Button buttonStyle={styles.button} title="Create Account" onPress={() => navigation.navigate("Signup")}/>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      {/*<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.backgroundWhite,
  },
  forgotPassword: {
    textAlign: "right",
  },
  button: {
    width: 150,
    backgroundColor: theme.colors.gray,
    margin: 5,
    borderRadius: 50,
    alignSelf: "center",
  }
});

export default Login;