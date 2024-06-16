import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const HomePage = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const vehicles = [
    { id: 1, image: require('./images/dost1.webp') },
    { id: 2, image: require('./images/smoltruck.webp') },
    { id: 3, image: require('./images/truck.jpg') },
  ];

  const handleSelectBox = (id) => {
    setSelectedBox(id);
  };

  return (
    <View style={styles.container}>
      <View> 
        <Text style = {styles.vehicles}> Vehicles </Text>
      </View> 
      <View style = {styles.imagecontainer}> 
      {vehicles.map((vehicle) => (
        <TouchableOpacity
          key={vehicle.id}
          style={[
            styles.box,
            selectedBox === vehicle.id && styles.selectedBox,
          ]}
          onPress={() => handleSelectBox(vehicle.id)}
        >
          <Image source={vehicle.image} style={styles.image} />
        </TouchableOpacity>
      ))}
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  vehicles :{
    marginTop : 20,
    color : 'green',
    fontSize : 25,
  },
  imagecontainer :{
   flex : 1 ,
   flexDirection : 'row',
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  selectedBox: {
    borderColor: 'green',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
