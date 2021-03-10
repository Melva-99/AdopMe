import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View, } from "react-native";
import theme from "../theme";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button buttonStyle={styles.button} title="Adopt"/>
      <Button buttonStyle={styles.button} title="Put up for adoption"/>
      <Button buttonStyle={styles.button} title="Donate"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop:120,
  },
  button:{
    width: 150,
    backgroundColor: theme.colors.secondary,
    marginBottom:80,
    borderRadius: 50,
    alignSelf: "center",
  }
});
export default Home;
