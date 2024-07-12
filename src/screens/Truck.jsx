import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Truck = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Trip</Text>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />    
        </View>
        <View style = {styles.box}> 
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        <FontAwesome name="archive" size={40} color="green" />
        </View>
    </View>
  );
}

export default Truck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'green',
    fontSize: 18,
    marginBottom: 20,
    alignItems : 'center',
    paddingRight : '24',
  },
  box: {
    flexDirection: 'row',
    padding : 10,
    justifyContent :'space-between',
  },
  boxText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});
