import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
<<<<<<< HEAD
import { Text, Image, Input, Button } from "react-native-elements";
=======
import { Text,Button } from "react-native-elements";
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
import Logo from "../shared/Logo";
import SigninForm from "../components/forms/SigninForm";
import theme from "../theme";
import Alert from "../shared/Alert";
import Icon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation, route }) => {
  const { userCreated } = route.params;
  return (
    <View style={styles.container}>
      <Logo />
      {userCreated ? (
        <Alert type="success" title="User created! You can now sign in!" />
      ) : null}
      <SigninForm navigation={navigation} />
      <Button buttonStyle={styles.button} title="Create Account" onPress={() => navigation.navigate("Signup")} />
<<<<<<< HEAD
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
=======
      

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("forgotPassword");
        }}
      >
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
      <Button icon={<Icon name="google-plus" size={15} color="white" />} iconLeft buttonStyle={styles.buttonGoogle} title=" Sign In with Google" />
      {/*<TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.backgroundWhite,
    marginTop: 70,
  },
  forgotPassword: {
    textAlign: "center",
<<<<<<< HEAD
  },
  button: {
    width: 220,
    backgroundColor: theme.colors.gray,
    margin: 5,
    borderRadius: 50,
    alignSelf: "center",
  },
=======
  },
  button: {
    width: 220,
    backgroundColor: theme.colors.gray,
    margin: 5,
    borderRadius: 50,
    alignSelf: "center",
  },
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
  buttonGoogle: {
    width: 220,
    backgroundColor: theme.colors.red,
    margin: 5,
    borderRadius: 50,
    alignSelf: "center",
  }
});
export default Login;