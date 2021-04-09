import React, { useState, useEffect } from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import { Context as AuthContext } from "../providers/AuthContext";
import  {fetchAccessToken, fetchPets} from "../api";

const Home = ({ navigation }) => {
  const [accessToken, setAccessToken] = useState("");
  const [newAccessToken, setNewAccessToken] = useState(false);
  const [pets, setPets] = useState([]);
  const [newPets, setNewPets] = useState(0);
  useEffect(() => {
    handlerStart();
  },[]);
  const handlerStart = () => {
    setNewAccessToken(0);

    const getAccessToken = async () => {
      const newAccessToken = await fetchAccessToken();
      
      setAccessToken(newAccessToken);
    };
    getAccessToken();
  };
  useEffect(() => {
    startSearchDefault();
  },[accessToken]);
  const startSearchDefault = () => {
    setNewPets(0);
    const getPets = async () => {
      const newPets = await fetchPets(accessToken);
      setPets(newPets);
    };
    getPets();
  };

  return (
    <>
    <View> 
      {!newAccessToken && accessToken.length ? (
        <View>
          
          {!newPets && pets.length ? (
          <View>
            <Text>Id + {pets[0].id}</Text>
            {console.log(pets)}
          </View>
          ): null}
          
        </View>
      ) : null}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop:120,
  },
  button:{
    width: 150,
    backgroundColor: theme.colors.secondary,
    marginBottom:80,
    borderRadius: 50,
    alignSelf: "center",
  },
  titulo: {
    textAlign: "center",
    marginBottom:50,
    fontSize:30,
  },
});

export default Home;
//mr_romerom@unicah.edu
