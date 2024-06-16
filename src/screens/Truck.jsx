import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Truck = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Truck</Text>
    </View>
  );
}

export default Truck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
