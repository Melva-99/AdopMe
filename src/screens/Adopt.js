import React, { useState, useEffect } from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Dimensions} from "react-native";
import theme from "../theme";
import { Context as AuthContext } from "../providers/AuthContext";
import  {fetchAccessToken, fetchPets} from "../api";
const width = Dimensions.get("screen");
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
    <View style={styles.card}> 
      {!newAccessToken && accessToken.length ? (
        <View>
          
          {!newPets && pets.length ? (
          <View >
            <FlatList
              numColumns = {2}
              keyExtractor = {(item) => item.id}
              data={pets}
              renderItem={({item}) =>(
                <TouchableOpacity style={styles.container}>
                  <Text style={styles.tittle}>{item.name}</Text>
                  <Image style={styles.img} source={{uri: item.primary_photo_cropped ? item.primary_photo_cropped.small : "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_pets_48px-256.png"}}/>
                  <Text style={styles.subTittle}>{item.species}</Text>
                </TouchableOpacity>
              )}
            />
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
    textAlign: "center",
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset:{width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  card: {
    justifyContent: "center",
    alignSelf: "center",
  
  },
  tittle:{
    width: "100%",
    padding: 5,
    backgroundColor: theme.colors.secondary,
    color: "#fff",
    borderRadius: 6,
    alignSelf: "center",
  },
  img:{
    height: 150,
    width: 150,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  subTittle:{
    width: "100%",
    backgroundColor: theme.colors.primary,
    color: "#fff",
    padding: 2,
    borderRadius: 4,
    alignSelf: "center",
  },
});

export default Home;
//mr_romerom@unicah.edu
