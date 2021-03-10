import React from "react";
<<<<<<< HEAD
import { Button } from "react-native-elements";
=======
import { Button, Text } from "react-native-elements";
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
import { StyleSheet, View, } from "react-native";
import theme from "../theme";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
=======
      <Text style={styles.titulo}>AdopMe</Text>
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
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
<<<<<<< HEAD
  }
});
export default Home;
=======
  },
  titulo: {
    textAlign: "center",
    marginBottom:50,
    fontSize:30,
  },
});

export default Home;
//mr_romerom@unicah.edu
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
