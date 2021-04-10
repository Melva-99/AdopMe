import React, { useContext, useState } from "react";
import { Button, Text, Input, CheckBox,} from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { TextInput, Caption } from "react-native-paper";
import theme from "../theme";
import { Context as AuthContext } from "../providers/AuthContext";
import { ScrollView } from "react-native-gesture-handler";
import { firebase } from "../firebase";


const putUpForAdoption = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const [checked, toggleChecked] = useState(false);
  const [petName, setPetName] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [reason, setReason] = useState("");
  const [petNameError, setPetNameError] = useState(false);
  const [speciesError, setSpeciesError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [reasonError, setReasonError] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = (input) => {
    if (input === "petName") {
      // Verificar el nombre de la mascota
      if (!petName) setPetNameError(true);
      else setPetNameError(false);
    } else if (input === "species") {
      // Verificar la especie (felino, canino, ave etc)
      if (!species) setSpeciesError(true);
      else setSpeciesError(false);
    } else if (input === "gender") {
      // Verificar el género de la mascota
      if (!gender) setGenderError(true);
      else setGenderError(false);
    } else if (input === "reason") {
      // Verificar la razón
      if (!reason) setReasonError(true);
      else setReasonError(false);
    }
  };

  return (
    <>
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.titulo}>AdopMe</Text>
        <Text style={styles.petData}>Pet data</Text>
        <Input 
        placeholder="Pet's name"
        value={petName}
        onChangeText={setPetName}
        onBlur={() => {
          handleVerify("petName");
        }}
        errorMessage={
          petNameError ? "Please, write the name of the pet" : ""
        }/>
        <Input 
        placeholder="Species"
        value={species}
        onChangeText={setSpecies}
        onBlur={() => {
          handleVerify("species");
        }}
        errorMessage={
          speciesError ? "Please, write the pet species" : ""
        }/>
        <Input 
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
        onBlur={() => {
          handleVerify("gender");
        }}
        errorMessage={
          genderError ? "Please, write the pet genre" : ""
        }/>
        <Text style={styles.vacuna}>Vaccines</Text>
        <CheckBox containerStyle={styles.CheckBoxSi} title='Yes' checked={checked} onPress={() => toggleChecked(!checked)}/>
        <CheckBox containerStyle={styles.CheckBoxNo} title='No' center checked={checked} onPress={() => toggleChecked(!checked)}/>
        <TextInput
        style={styles.input}
        mode="outlined"
        label=""
        placeholder="Reason"
        value={reason}
        onChangeText={setReason}
        onBlur={() => {
          handleVerify("reason");
        }}
        error={reasonError}
      />
      {reasonError && (
        <Caption>Please, write down the reason for the adoption</Caption>)}
        <Button buttonStyle={styles.button} title="Accept"/>
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
  button:{
    width: 150,
    backgroundColor: theme.colors.secondary,
    marginBottom:80,
    borderRadius: 50,
    alignSelf: "center",
  },
  titulo: {
    textAlign: "center",
    marginBottom:30,
    fontSize:35,
    marginTop:-90,
  },
  petData:{
      fontSize:30,
      textAlign: "center",
      marginBottom:30,
  },
  CheckBoxNo:{
      marginTop:-50,
      width:80,
      marginLeft:190,
      marginBottom:30,
  },
  CheckBoxSi:{
    width:80,
    marginLeft:100,
},
input:{
    height: 150,
    width:350,
    marginLeft:10,
  },
  vacuna:{
      textAlign:"center",
      fontSize:20,
      marginBottom:20,
      marginTop:20,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    marginTop: 20,
    marginLeft:60,
    marginRight:60,
    borderRadius: 50,
    marginBottom:50,
  },
});

export default putUpForAdoption;
