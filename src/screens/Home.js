import React, { useContext, } from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import { Context as AuthContext } from "../providers/AuthContext";

const Home = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.titulo}>AdopMe</Text>
      <Button buttonStyle={styles.button} title="Adopt" onPress={() => {navigation.navigate("Adopt")}}/>
      <Button buttonStyle={styles.button} title="Put up for adoption" onPress={() => {navigation.navigate("Put up for Adoption")}}/>
      <Button buttonStyle={styles.button} title="Donate" onPress={() => {navigation.navigate("Donate")}}/>
      <Button buttonStyle={styles.button} title="Sign Out" onPress={() => {signout()}}/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop:120,
  },
  button:{
    width: 250,
    backgroundColor: theme.colors.secondary,
    marginBottom:80,
    borderRadius: 50,
    alignSelf: "center",
  },
  titulo: {
    textAlign: "center",
    marginBottom:50,
    fontSize:30,
    marginTop:-30,
    color:theme.colors.secondary,
  },
});

export default Home;
//mr_romerom@unicah.edu
