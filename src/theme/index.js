import { DefaultTheme, DarkTheme } from "react-native-paper";
import { Appearance, useColorScheme } from 'react-native';

const theme = {
    ...DefaultTheme,
    colors:{
        primary: "#10BCF5", /*Color azul claro*/
        secondary: "#085A75", /*Color azul oscuro */
        backgroundDark:"#000000",
        gray:"#737576",
        red:"#e94235",
        blanco:"#ffffff",
        white: "#fff"
    },
};

export default theme;