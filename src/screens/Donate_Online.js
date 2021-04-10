import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, } from "react-native";
import theme from "../theme";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-elements";

const Donate_Online = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.titulo}>Donate</Text>
      <Text style={styles.datos}>Name that appears on the card:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      placeholder="Juan Luis Alvarado"
      autoCapitalize="none"></TextInput>
      <Text style={styles.datos}>Card number:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      textContentType="creditCardNumber"
      placeholder="4000 1234 5678 9010"
      autoCapitalize="none"></TextInput>
      <Text style={styles.datos}>Expiration:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      placeholder="12/2021"
      autoCapitalize="none"></TextInput>
      <Text style={styles.datos}>CVV:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      placeholder="1234"
      autoCapitalize="none"></TextInput>
      <Button buttonStyle={styles.button} title=" Donate" />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop:120,
  },
  titulo: {
    textAlign: "center",
    marginBottom:30,
    fontSize:30,
  },
  datos:{
    fontSize:15,
    marginTop:10,
    marginLeft:10,
    marginLeft:30,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    marginTop: 20,
    marginLeft:60,
    marginRight:60,
    borderRadius: 50,
  },
  input:{
    height: 30,
    width:300,
    marginLeft:30,
  }
});

export default Donate_Online;