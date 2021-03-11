import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import Logo from '../shared/Logo'
import { firebase } from "../firebase";
const {width, height} = Dimensions.get("screen");
import theme from '../theme/index'
import Alert from '../shared/Alert'
import { Button } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";
const GoogleIn = ({ navigation }) => {
    const [error, setError] = useState("");
    
    const handleGoogleIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(()=>{
                navigation.navigate("Home");
                })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <View style={styles.container}>
            <Logo/>
            {error ? <Alert title={error} type="error" /> : null}
            <Button icon={<Icon name="google-plus" size={15} color="white" />} onPress={handleGoogleIn} iconLeft buttonStyle={styles.buttonGoogle} title=" Sign In with Google" />
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
      buttonGoogle: {
        width: 220,
        backgroundColor: theme.colors.red,
        margin: 5,
        borderRadius: 50,
        alignSelf: "center",
      }
});

export default GoogleIn;