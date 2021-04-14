import React, { useContext,useState } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, } from "react-native";
import theme from "../theme";
import { TextInput, Caption } from "react-native-paper";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../providers/AuthContext";
import { ScrollView } from "react-native";
import Alert from "../shared/Alert";

const Donate_Online = ({navigation}) => {
  const { state, createDonate } = useContext(AuthContext);
  const [nameCard, setNameCard] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState("");
  const [amount, setAmount] = useState("");
  const [nameCardError, setNameCardError] = useState(false);
  const [creditCardNumberError, setCreditCardNumberError] = useState(false);
  const [cvvError, setCVVError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [expirationError, setExpirationError] = useState(false);
  const [error, setError] = useState("");

  const handleVerifyDonate = (input) => {
    if (input === "nameCard") {
      // Verificar el nombre de la mascota
      if (!nameCard) setNameCardError(true);
      else setNameCardError(false);
    } else if (input === "creditCardNumber") {
      // Verificar la especie (felino, canino, ave etc)
      if (!creditCardNumber) setCreditCardNumberError(true);
      else setCreditCardNumberError(false);
    } else if (input === "cvv") {
      // Verificar el género de la mascota
      if (!cvv) setCVVError(true);
      else setCVVError(false);
    } else if (input === "expiration") {
      // Verificar la razón
      if (!expiration) setExpirationError(true);
      else setExpirationError(false);
    } else if (input === "amount") {
      // Verificar el género de la mascota
      if (!amount) setAmountError(true);
      else setAmountError(false);
    }
  };

  const handleDonate = () => {
    if (!nameCard && !creditCardNumber && !cvv && !expiration && !amount){setError("If you want to donate, enter your payment information online!");}
    else if(!nameCard){setNameCardError(true)}
    else if(!creditCardNumber){setCreditCardNumberError(true)}
    else if(!cvv) {setCVVError(true)}
    else if(!expiration) {setExpirationError(true)}
    else if(!amount) {setAmountError(true)}
    else{
        setError("")
        createDonate(nameCard, creditCardNumber,expiration, cvv, amount, state.user.id)
        navigation.navigate("Home");
      }
    };
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Donate</Text>
      {error ? <Alert type="error" title={error} /> : null}
      <Text style={styles.datos}>Name that appears on the card:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      placeholder="Juan Luis Alvarado"
      value={nameCard}
      onChangeText={setNameCard}
      onBlur={() => {
          handleVerifyDonate("nameCard");
        }}
        error={nameCardError}
      />
      {nameCardError && (
        <Caption>Please, write down the reason for the adoption</Caption>)}
      <Text style={styles.datos}>Card number:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      textContentType="creditCardNumber"
      placeholder="4000 1234 5678 9010"
      autoCapitalize="none"
      value={creditCardNumber}
      onChangeText={setCreditCardNumber}
      onBlur={() => {
          handleVerifyDonate("creditCardNumber");
        }}
        error={creditCardNumberError}
      />
      {creditCardNumberError && (
        <Caption>Please, write down the reason for the adoption</Caption>)}
      <Text style={styles.datos}>Expiration:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      placeholder="12/2021"
      autoCapitalize="none"
      value={expiration}
      onChangeText={setExpiration}
      onBlur={() => {
          handleVerifyDonate("expiration");
        }}
        error={expirationError}
      />
      {expirationError && (
        <Caption>Please, write down the reason for the adoption</Caption>)}
      <Text style={styles.datos}>CVV:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      placeholder="1234"
      autoCapitalize="none"
      value={cvv}
      onChangeText={setCVV}
      onBlur={() => {
          handleVerifyDonate("cvv");
        }}
        error={cvvError}
      />
      {cvvError && (
        <Caption>Please, write down the reason for the adoption</Caption>)}
      <Text style={styles.datos}>Amount:</Text>
      <TextInput
      style={styles.input}
      mode="outlined"
      label=""
      placeholder="$50"
      autoCapitalize="none"
      value={amount}
      onChangeText={setAmount}
      onBlur={() => {
          handleVerifyDonate("amount");
        }}
        error={amountError}
      />
      {amountError && (
        <Caption>Please, write down the reason for the adoption</Caption>)}
      <Button buttonStyle={styles.button} title=" Donate" onPress={handleDonate}/>
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
    marginBottom:30,
    fontSize:30,
    color: theme.colors.secondary,
  },
  datos:{
    fontSize:15,
    marginTop:10,
    marginLeft:10,
    marginLeft:30,
    color: theme.colors.secondary,
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
    backgroundColor: 'transparent',
  }
});

export default Donate_Online;