import React, { useState, useEffect, useContext } from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Dimensions} from "react-native";
import { Context as AuthContext } from "../providers/AuthContext";
import theme from "../theme";
import  {fetchPet} from "../api";

const InformationAdopt = ({ route ,navigation }) => {
    const [data, setData] = useState(route.params);
    const [pet, setPet] = useState([]);
    const [newPet, setNewPet] = useState(0);
    const { state, createAdoptMe } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleAdoptPet = () => {
        createAdoptMe(data.id, pet.name, state.user.id);
        setError("The api have problem with data");
        navigation.navigate("Home");
    };
  
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
      {!newPet && pet ? (
        <TouchableOpacity style={styles.container} >
          <Text style={styles.tittle}>{pet.name}</Text>
          <Image style={styles.img} source={{uri: pet.primary_photo_cropped ? pet.primary_photo_cropped.small : "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_pets_48px-256.png"}}/>
          <Text style={styles.desItemTittle}>Information General The Pet </Text>
          <Text style={styles.desItemTittle}>Age</Text>
          <Text style={styles.desTittle}>{pet.age}</Text>
          <Text style={styles.desItemTittle}>Gender</Text>
          <Text style={styles.desTittle}>{pet.gender}</Text>
          <Text style={styles.desItemTittle}>Size</Text>
          <Text style={styles.desTittle}>{pet.size}</Text>
          <Text style={styles.desItemTittle}>breeds</Text>
          <Text style={styles.desTittle}>{pet.breeds ? pet.breeds.primary : "error" }</Text>
          <Text style={styles.desItemTittle}>Specie</Text>
          <Text style={styles.desTittle}>{pet.species}</Text>
          <Text style={styles.desItemTittle}>Information Contact</Text>
          <Text style={styles.desItemTittle}>Email</Text>
          <Text style={styles.desTittle}>{pet.contact ? pet.contact.email : "error"}</Text>
          <Text style={styles.desItemTittle}>Country</Text>
          <Text style={styles.desTittle}>{pet.contact ? pet.contact.address.country : "error"}</Text>
          <Text style={styles.desItemTittle}>State</Text>
          <Text style={styles.desTittle}>{pet.contact ? pet.contact.address.state : "error"}</Text>
          <Text style={styles.desItemTittle}>City</Text>
          <Text style={styles.desTittle}>{pet.contact ? pet.contact.address.city : "error"}</Text>
          <Button buttonStyle={styles.button} onPress={handleAdoptPet} title="Adopt me"/>
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
  button:{
    width: 150,
    backgroundColor: theme.colors.secondary,
    marginBottom:80,
    borderRadius: 50,
    alignSelf: "center",
    marginTop:50,
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
    backgroundColor: theme.colors.white,
    color: theme.colors.secondary,
    alignSelf: "center",
    shadowOffset:{width: 2, height: 2},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  desItemTittle:{
    width: "100%",
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    alignSelf: "center",
    shadowOffset:{width: 2, height: 2},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  img:{
    height: 200,
    width: 200,
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