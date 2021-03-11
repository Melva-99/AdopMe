import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Logo from "../shared/Logo";
<<<<<<< HEAD
import SignupForm from "../components/forms/SignupForm"
=======
import SignupForm from "../components/forms/SignupForm";
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
import theme from "../theme";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
<<<<<<< HEAD
      <SignupForm navigation={navigation}/>
=======
      <SignupForm navigation={navigation} />
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.signIn}>Already got an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.backgroundWhite,
  },
<<<<<<< HEAD
=======
  signIn: {
    textAlign: "center",
  },
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
});

export default Signup;