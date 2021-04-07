import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Logo from "../shared/Logo";
import SignupForm from "../components/forms/SignupForm";
import theme from "../theme";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <SignupForm navigation={navigation} />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.sign}>Already got an account? <Text style={styles.signIn}>Sign In</Text></Text>
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
  signIn: {
    textAlign: "center",
    color: theme.colors.secondary,
  },
  sign:{
    textAlign: "center",
  }
});

export default Signup;