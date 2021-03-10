import React from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View, } from "react-native";
import theme from "../theme";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>AdopMe</Text>
      <Button buttonStyle={styles.button} title="Adopt"/>
      <Button buttonStyle={styles.button} title="Put up for adoption"/>
      <Button buttonStyle={styles.button} title="Donate"/>
      <Button buttonStyle={styles.button} title="Sign Out" onPress={() => navigation.navigate("Signin")}/>
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
  },
  titulo: {
    textAlign: "center",
    marginBottom:50,
    fontSize:30,
  },
});

export default Home;
//mr_romerom@unicah.edu
