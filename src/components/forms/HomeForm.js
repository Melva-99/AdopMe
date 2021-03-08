import React, { useState, useEffect } from "react";
import { StyleSheet, Text,Dimensions, View , TextInput} from "react-native";
import  {fetchAccessToken, fetchPets} from "../api";

const { width } = Dimensions.get("screen");

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
    <View> 
      {!newAccessToken && accessToken.length ? (
        <View>
          {!newPets && pets.length ? console.log(pets): null}
        </View>
      ) : null}
    </View>
  );
};