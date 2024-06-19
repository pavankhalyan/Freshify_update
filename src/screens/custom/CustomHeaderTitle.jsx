import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const CustomHeaderTitle = () => {
  return (
    <View style={styles.headerTitleContainer}>
    
    
      <Text style={styles.greenText}>FRESH</Text>
      <Text style={styles.whiteText}>IFY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
  },
  greenText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
  whiteText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeaderTitle;
