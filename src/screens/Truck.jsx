import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons

const Truck = () => {
  const numberOfBoxes = 6; // Example for 6 boxes
  const boxes = Array.from({ length: numberOfBoxes }, (_, i) => i + 1); // Create an array for the boxes

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {boxes.map((boxId) => (
          <TouchableOpacity key={boxId} style={styles.box}>
            <Icon name="dropbox" size={40} color="white" style={styles.icon} />
            <Text style={styles.boxText}>Box {boxId}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Truck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    color: 'green',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows the items to wrap to the next line
    justifyContent: 'space-between', // Distribute boxes evenly
  },
  box: {
    backgroundColor: 'green',
    borderRadius: 10,
    width: '45%', // 45% width to fit two boxes in a row
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
    fontSize: 18,
  },
});
