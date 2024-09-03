import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';

const Truck = () => {
  const route = useRoute();
  const { numberOfBoxes } = route.params;

  const renderBoxes = () => {
    const boxes = [];
    for (let i = 0; i < numberOfBoxes; i++) {
      boxes.push(
        <View key={i} style={styles.box}>
          <FontAwesome name="archive" size={50} color="green" />
          <Text style={styles.boxText}>{`Box ${i + 1}`}</Text>
        </View>
      );
    }
    return boxes;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Boxes</Text>
      {renderBoxes()}
    </View>
  );
};

export default Truck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text: {
    color: 'green',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  boxText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});
