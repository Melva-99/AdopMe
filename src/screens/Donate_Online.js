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
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [cvv, setCVV] = useState("");
  const [amount, setAmount] = useState("");
  const [nameCardError, setNameCardError] = useState(false);
  const [creditCardNumberError, setCreditCardNumberError] = useState(false);
  const [cvvError, setCVVError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [monthError, setMonthError] = useState(false);
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
    } else if (input === "month") {
      // Verificar el mes
      if (!month) setMonthError(true);
      else setMonthError(false);
    } else if (input === "amount") {
      // Verificar el género de la mascota
      if (!amount) setAmountError(true);
      else setAmountError(false);
    }else if (input === "year") {
      // Verificar el año
      if (!year) setYearError(true);
      else setYearError(false);
  };
}

  const handleDonate = () => {
    if (!nameCard && !creditCardNumber && !cvv && !amount){setError("If you want to donate, enter your payment information online!");}
    else if(!nameCard){setNameCardError(true)}
    else if(!creditCardNumber){setCreditCardNumberError(true)}
    else if(!cvv) {setCVVError(true)}
    else if(!amount) {setAmountError(true)}
    else if(creditCardNumber.length !== 16 ) {setError("Enter the card number correctly!");}
    else if(month.length !== 2 ) {setError("Please, enter a correct month");}
    else if(month > 31 ) {setError("Please, enter a correct month");}
    else if(year < 21 ) {setError("Please, enter a correct year");}
    else if(year > 24 ) {setError("Please, enter a correct year");}
    else if(cvv.length !== 4 ) {setError("The cvv contains 4 digits!");}
    else if(amount === "0" ) {setError("Amount greater than $1!");}
    else{
        setError("")
        createDonate(nameCard, creditCardNumber,year,month, cvv, amount, state.user.id)
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
      autoCapitalize="words"
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
        <Caption>Pleaser, write the name that appears on the card</Caption>)}
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
        <Caption>Please, write the card number</Caption>)}
      <Text style={styles.datos}>Expiration:</Text>
      <TextInput
      style={styles.inputMes}
      mode="outlined"
      label=""
      placeholder="Mes"
      autoCapitalize="none"
      value={month}
      onChangeText={setMonth}
      onBlur={() => {
          handleVerifyDonate("month");
        }}
        error={monthError}
      />{monthError && (
        <Caption>Please, write the month</Caption>)}
       <TextInput
      style={styles.inputAño}
      mode="outlined"
      label=""
      placeholder="Año"
      autoCapitalize="none"
      value={year}
      onChangeText={setYear}
      onBlur={() => {
          handleVerifyDonate("year");
        }}
        error={yearError}
      />
      {yearError && (
        <Caption>Please, write the year</Caption>)}
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
        <Caption>Please, write the cvv</Caption>)}
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
        <Caption>Please, enter a valid amount</Caption>)}
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
    marginTop:-70,
  },
  datos:{
    fontSize:15,
    marginTop:10,
    marginLeft:10,
    marginLeft:34,
    color: theme.colors.secondary,
  },
  button: {
    backgroundColor: theme.colors.secondary,
    marginTop: 50,
    marginLeft:60,
    marginRight:60,
    borderRadius: 50,
  },
  input:{
    height: 30,
    width:300,
    marginLeft:34,
    marginBottom:20,
    backgroundColor: 'transparent',
  },
  inputMes:{
    width:60,
    height: 30,
    marginLeft:34,
  },
  inputAño:{
    width:60,
    height: 30,
    marginLeft:110,
    marginTop:-38,
    marginBottom:20,
  }
});

export default Donate_Online;