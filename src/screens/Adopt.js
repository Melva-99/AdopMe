import React, { useState, useEffect } from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Dimensions} from "react-native";
import theme from "../theme";
import { Context as AuthContext } from "../providers/AuthContext";
import  {fetchAccessToken, fetchPets} from "../api";
const width = Dimensions.get("screen");
const Adopt = ({ navigation }) => {
  const [accessToken, setAccessToken] = useState({});
  const [newAccessToken, setNewAccessToken] = useState(0);
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
      const newPets = await fetchPets(accessToken.access_token);
      setPets(newPets);
    };
    getPets();
  };

  return (
    <>
    <View style={styles.card}> 
      {!newAccessToken && accessToken.access_token ? (
        <View>          
          {!newPets && pets ? (
          <View >
            <FlatList
              numColumns = {2}
              keyExtractor = {(item) => item.id}
              data={pets}
              renderItem={({item}) =>(
                <TouchableOpacity style={styles.container}>
                  <Text style={styles.tittle}>{item.name}</Text>
                  <Image style={styles.img} source={{uri: item.primary_photo_cropped ? item.primary_photo_cropped.small : "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_pets_48px-256.png"}}/>
                  <Text style={styles.desTittle}>{item.age}</Text>
                  <Text style={styles.subTittle}>{item.species}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          ): 
          <View>
            <Text>Loading data</Text>
          </View>
          }
          
        </View>
      ) : 
        <View>
          <Text>Loading data</Text>
        </View>
      }
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset:{width: 2, height: 2},
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
    alignSelf: "center",
  },
  desTittle:{
    width: "100%",
    padding: 5,
    backgroundColor: theme.colors.white,
    color: theme.colors.backgroundDark,
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
    
    alignSelf: "center",
  },
});

export default Adopt;
//mr_romerom@unicah.edu
