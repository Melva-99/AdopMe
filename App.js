<<<<<<< HEAD
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
=======
import React, { useEffect, useState } from "react";
import { StyleSheet} from "react-native";
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
<<<<<<< HEAD
import theme from "./src/theme";
import Home from "./src/screens/Home";
=======
import Home from "./src/screens/Home";
import forgotPassword from "./src/screens/forgotPassword";
import theme from "./src/theme";
import PersistLogin from "./src/firebase/persistLogin"
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({});

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    const userData = PersistLogin();
    setUser(userData);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
<<<<<<< HEAD
            <Stack.Screen
=======
          <Stack.Screen
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
              name="Signin"
              component={Signin}
              initialParams={{ userCreated: false }}
              options={{ headerShown: false, headerStyle:{backgroundColor:"#085A75"} }}
<<<<<<< HEAD

            />
            <Stack.Screen name="Signup" component={Signup}  options={{headerStyle:{backgroundColor:"#085A75"} }} />
            <Stack.Screen style={styles.color} name="Home" component={Home}  
            options={{headerStyle:{backgroundColor:"#085A75"} }}/>
=======
            />
            <Stack.Screen name="Signup" component={Signup}  options={{headerStyle:{backgroundColor:"#085A75"} }} />
            <Stack.Screen style={styles.color} name="Home" component={Home}  
            options={{headerStyle:{backgroundColor:"#085A75"} }} 
            initialParams={{ user: user }}/>
            <Stack.Screen name="forgotPassword" component={forgotPassword}  options={{headerStyle:{backgroundColor:"#085A75"} }} />
>>>>>>> 526addab31d8e27da152ef32eb87a6f938412973
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  color:{
    color: "#fff"
  }
});