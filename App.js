import React from "react";
import { StyleSheet} from "react-native";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import forgotPassword from "./src/screens/forgotPassword";
import theme from "./src/theme";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Signin"
              component={Signin}
              initialParams={{ userCreated: false }}
              options={{ headerShown: false, headerStyle:{backgroundColor:"#085A75"} }}
            />
            <Stack.Screen name="Signup" component={Signup}  options={{headerStyle:{backgroundColor:"#085A75"} }} />
            <Stack.Screen style={styles.color} name="Home" component={Home}  
            options={{headerStyle:{backgroundColor:"#085A75"} }}/>
            <Stack.Screen name="forgotPassword" component={forgotPassword}  options={{headerStyle:{backgroundColor:"#085A75"} }} />
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