import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { Overlay } from 'react-native-elements'
import theme from "../theme";
import Logo from "../shared/Logo";

const { width, height } = Dimensions.get("screen");

const PopUpMessage = ({navigation,visibleState, successMessage, hintMessage, logoTitle, navigationScreen}) => {
  return (
    <View style={styles.input}>
        <Overlay >
            <View>
                <Text>{successMessage}</Text>
                <Text>{hintMessage}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(navigationScreen)
                    }}
                >
                    <Text>Okay</Text>
                </TouchableOpacity>
            </View>
        </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        marginTop:50,
        borderRadius: 50,
        borderStyle: "Solid",
        border:1,
        textAlign: "center",
      },
});

export default PopUpMessage;