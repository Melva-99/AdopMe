import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text,Button } from "react-native-elements";
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
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("forgotPassword");
        }}
      >
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      <Button icon={<Icon name="google-plus" size={15} color="white" />} onPress={() => navigation.navigate("GoogleIn")} iconLeft buttonStyle={styles.buttonGoogle} title=" Sign In with Google" />

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
  },
  button: {
    width: 220,
    backgroundColor: theme.colors.gray,
    margin: 5,
    borderRadius: 50,
    alignSelf: "center",
  },
  buttonGoogle: {
    width: 220,
    backgroundColor: theme.colors.red,
    margin: 5,
    borderRadius: 50,
    alignSelf: "center",
  }
});
export default Login;