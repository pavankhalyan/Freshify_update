import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomePage = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('select');
  const [isPickupSelected, setIsPickupSelected] = useState(false);
  const [isDeliverySelected, setIsDeliverySelected] = useState(false);

  const vehicles = [
    { id: 1, image: require('./images/dost1.webp') },
    { id: 2, image: require('./images/smoltruck.webp') },
    { id: 3, image: require('./images/truck.jpg') },
  ];

  const handleSelectBox = (id) => {
    setSelectedBox(id);
  };

  const handleProductChange = (itemValue) => {
    setSelectedProduct(itemValue);
  };

  const togglePickup = () => {
    setIsPickupSelected(!isPickupSelected);
  };

  const toggleDelivery = () => {
    setIsDeliverySelected(!isDeliverySelected);
  };

  const handleGoPress = () => {
    console.log('Go button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.vehicles}>Vehicles</Text>
      <View style={styles.imageContainer}>
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
      <Text style={styles.details}>Details</Text>
      <Picker
        selectedValue={selectedProduct}
        style={styles.dropdown}
        onValueChange={(itemValue) => handleProductChange(itemValue)}
      >
        <Picker.Item label="Select Product" value="select" />
        <Picker.Item label="Apple" value="apple" />
        <Picker.Item label="Banana" value="banana" />
        <Picker.Item label="Tomato" value="tomato" />
      </Picker>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} onPress={togglePickup}>
          <FontAwesome
            name={isPickupSelected ? 'check-square-o' : 'square-o'}
            size={20}
            color="white"
          />
          <Text style={styles.checkboxLabel}>Pickup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkbox} onPress={toggleDelivery}>
          <FontAwesome
            name={isDeliverySelected ? 'check-square-o' : 'square-o'}
            size={20}
            color="white"
          />
          <Text style={styles.checkboxLabel}>Delivery</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.b}> 

      </View>
      <TouchableOpacity style={styles.goButton} onPress={handleGoPress}>
        <Text style={styles.goButtonText}>Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  vehicles: {
    marginTop: 20,
    color: 'green',
    fontSize: 25,
  },
  details: {
    color: 'green',
    marginTop: 20,
    fontSize: 25,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  box: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
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
  dropdown: {
    height: 50,
    width: 370,
    backgroundColor: 'white',
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  checkboxLabel: {
    color: 'white',
    marginLeft: 10,
  },
  goButton: {
    backgroundColor: 'green',
    height : 50,
    width : 100 ,
    borderRadius: 5,
    marginTop: 70,
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 130,
  },
  goButtonText: {
    color: 'white',
    fontSize: 30,
  },
});
