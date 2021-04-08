import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Logo from '../shared/Logo'
import { firebase } from "../firebase";
const {width, height} = Dimensions.get("screen");
import theme from '../theme/index'
import { validate } from "email-validator";
import Alert from '../shared/Alert'
import { Input,Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const forgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = (input) => {
        if (input === "email") {
          if (!email) setEmailError(true);
          else if (!validate(email)) setEmailError(true);
          else setEmailError(false);
        }
    };
    const handleRecovery = () =>{
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(()=>{
                navigation.navigate("Signin");
                })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <View style={styles.container}>
            <Logo/>
            {error ? <Alert title={error} type="error" /> : null}
            <Input
        placeholder="Email"
        leftIcon={<Icon name="envelope" />}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        onBlur={() => {
          handleVerify("email");
        }}
        errorMessage={
          emailError ? "Por favor ingresa una dirección de correo válida" : ""
        }
      />
            <Button buttonStyle={styles.button} title="Verify" onPress={handleRecovery}/>
            <TouchableOpacity
                onPress={() => navigation.navigate("Signin")}
            >
                <Text style={styles.goBack}>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
   button: {
        width: 110,
        borderRadius: 50,
        backgroundColor: theme.colors.secondary,
        marginLeft: 125,
        marginTop:30,
      },
      goBack: {
        textAlign: "center",
        marginTop:30,
      },
      input:{
        marginTop:50,
      },
      container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.backgroundWhite,
      },
});

export default forgotPassword;