import React, { useContext, useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";
import Signin from "../../screens/Signin";
import Signup from "../../screens/Signup";
import Home from "../../screens/Home";
import forgotPassword from "../../screens/forgotPassword";
import Donate from "../../screens/Donate";
import Donate_Online from "../../screens/Donate_Online";
import putUpForAdoption from "../../screens/putUpForAdoption";
import Adopt from "../../screens/Adopt";
import { useColorScheme } from "react-native";

const Stack = createStackNavigator();

const Navigation = () => {
  const { state, persistLogin } = useContext(AuthContext);
  useEffect(() => {
    persistLogin();
  }, []);

  const scheme = useColorScheme();
  const MyDarkTheme = {
    dark:true,
    colors:{
      primary:"#ffffff",
      background: "#242d42",
      card:"#242d42",
      text: "#ffffff",
      border:"#242d42",
    }
  }
  return (
    <NavigationContainer
    theme={scheme ==="dark" ? MyDarkTheme:DefaultTheme}>
    {!state.loading && (
      <>
        {state.loggedIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Donate" component={Donate} />
            <Stack.Screen name="Donate_Online" component={Donate_Online}/>
            <Stack.Screen name="putUpForAdoption" component={putUpForAdoption}/>
            <Stack.Screen name="Adopt" component={Adopt}/>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="forgotPassword" component={forgotPassword}  options={{headerShown: false,headerStyle:{backgroundColor:"#085A75"} }} />
          </Stack.Navigator>
        )}
      </>
    )}
  </NavigationContainer>
  );
};

export default Navigation;