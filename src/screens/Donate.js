import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, } from "react-native";
import theme from "../theme";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.tituloS}><Text style={styles.titulo}>Donate to the AdopMe Foundation for a third way to help pets</Text></View>
      <Text style={styles.subTitulo}>Have you donated to the AdopMe Foundation? Here are your top 4 reasons to consider donating.</Text>
      <View style={styles.info}>
      <Text style={styles.info}>1. It’s a great gift for your favorite pet-lover. Donate in honor of a loved one and we’ll send her or him a beautiful holiday card with a personal letter announcing your gift.</Text>
      <Text style={styles.info}>2. Our partners help your donation go further.</Text>
      <Text style={styles.info}>3. You can meet the pets your donation is helping. We ask the shelters and rescue groups we help to tell the stories of the pets whose lives are impacted by our grants. You can read these stories in the adoption groups’ own words, and see pictures of the pets, in our Success Stories section.</Text>
      <Text style={styles.info}>4. Your donation will go toward pets, not fundraising. Over 90% of every dollar we spend goes toward programs that help homeless pets — not toward advertising or other fundraising or administrative expenses.</Text>
      </View>
      <Text style={styles.cuentas}>Accounts where you can donate.</Text>
      <Text style={styles.cuentas}>2100 0418 40 1234567891</Text>
      <Text style={styles.cuentas}>2101 0420 10 1987367891</Text>
      <Text style={styles.cuentas}>2201 0980 10 7847287432</Text>
      <Button buttonStyle={styles.button} title=" Donate Online" onPress={() => {navigation.navigate("Donate_Online")}} />
    </View>
    </ScrollView>
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
    marginBottom:20,
    fontSize:30,
    marginTop:-70,
    marginLeft:15,
    marginRight:15,
    backgroundColor: theme.colors.secondary,
    color:theme.colors.blanco,
    borderRadius:40,
  },
  tituloS:{
    borderRadius:40,
    backgroundColor: theme.colors.secondary,
    marginLeft:15,
    marginRight:15,
    paddingTop:80,
    marginTop:-80,
    marginBottom:20,
  },
  subTitulo: {
    textAlign: "center",
    color:theme.colors.secondary,
    fontSize:20,
    marginTop:-10,
  },
  info:{
    fontSize:15,
    marginBottom:10,
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    textAlign: "justify",
    backgroundColor:theme.colors.secondary,
    color:theme.colors.blanco,
    borderRadius:40,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    marginTop: 20,
    marginLeft:60,
    marginRight:60,
    borderRadius: 50,
    marginBottom:50,
  },
  cuentas:{
    fontSize:25,
    color:theme.colors.secondary,
    textAlign: "center",
    marginBottom:10,
    marginTop:10,
  }
});

export default Home;
//mr_romerom@unicah.edu
