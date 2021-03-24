import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import Logo from '../shared/Logo'
import { firebase } from "../firebase";
const {width, height} = Dimensions.get("screen");
import theme from '../theme/index'
import { validate } from "email-validator";
import Alert from '../shared/Alert'
import { Input,Button } from "react-native-elements";
import PopUpMessage from '../shared/PopUpMessage';

const forgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const logoTitle ="Success"
    const successMessage = "A password recovery message was sent to the email you provided."
    const hintMessage = "If you are unable to find it please do check your Junk/Spam folder."

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
                inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input}
                placeholder="   Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onBlur={() => {
                    handleVerify("email");
                }}
                errorMessage={
                    emailError
                    ? "Please verify your accounts email address"
                    : null
                }
            />
            <Button buttonStyle={styles.button} title="Verify" onPress={handleRecovery} />
            <TouchableOpacity
                onPress={() => navigation.navigate("Signin")}
            >
                <Text style={styles.goBack}>Go back</Text>
            </TouchableOpacity>
            {/* Success Message of the password recovery email */}
            <PopUpMessage 
                navigation={navigation} 
                navigationScreen="Signin" 
                visibleState={visible} 
                logoTitle={logoTitle} 
                successMessage={successMessage} 
                hintMessage={hintMessage} />
        </View>
    )
}

const styles = StyleSheet.create({
   button: {
        width: 110,
        backgroundColor: theme.colors.secondary,
        margin: 15,
        borderRadius: 50,
        alignSelf: "Center",
      },
      goBack: {
        textAlign: "center",
      },
      input:{
        marginTop:50,
        borderRadius: 50,
        borderStyle: "Solid",
        border:1,
      },
      container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.backgroundWhite,
      },
});

export default forgotPassword;