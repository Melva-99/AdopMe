import React, { useState, useEffect } from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Dimensions} from "react-native";
import theme from "../theme";
import  {fetchPet} from "../api";

const InformationAdopt = ({ route ,navigation }) => {
    const [data, setData] = useState(route.params);
    const [pet, setPet] = useState([]);
    const [newPet, setNewPet] = useState(0);
    useEffect(() => {
      startSearchDefault();
    },[]);
    const startSearchDefault = () => {
      setNewPet(0);
      const getPet = async () => {
        const newPet = await fetchPet(data.id, data.accessToken);
        setPet(newPet);
      };
      getPet();
    };
  return (
    <>
    <View>
      {pet ? (
        <TouchableOpacity style={styles.container} >
          <Text style={styles.tittle}>{pet.name}</Text>
          <Image style={styles.img} source={{uri: pet.primary_photo_cropped ? pet.primary_photo_cropped.small : "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_pets_48px-256.png"}}/>
          <Text style={styles.desItemTittle}>Age</Text>
          <Text style={styles.desTittle}>{pet.age}</Text>
          <Text style={styles.desItemTittle}>Gender</Text>
          <Text style={styles.desTittle}>{pet.gender}</Text>
          <Text style={styles.desItemTittle}>Size</Text>
          <Text style={styles.desTittle}>{pet.size}</Text>
          <Text style={styles.desItemTittle}>breeds</Text>
          <Text style={styles.desTittle}>{pet.breeds ? pet.breeds.primary : "error" }</Text>
          <Text style={styles.subTittle}>Specie: {pet.species}</Text>
        </TouchableOpacity>
      ): null}
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
  desItemTittle:{
    width: "100%",
    padding: 5,
    backgroundColor: theme.colors.primary,
    color: theme.colors.backgroundDark,
    alignSelf: "center",
    shadowOffset:{width: 2, height: 2},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  img:{
    height: 150,
    width: 150,
    marginHorizontal: 4,
    marginVertical: 6,
    alignSelf: "center",
  },
  subTittle:{
    width: "100%",
    backgroundColor: theme.colors.primary,
    color: "#fff",
    padding: 2,
    
    alignSelf: "center",
  },
});
export default InformationAdopt;
//mr_romerom@unicah.edu
