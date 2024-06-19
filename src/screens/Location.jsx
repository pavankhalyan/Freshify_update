import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Location = () => {
  const initialRegion = {
    latitude: 12.7409,
    longitude: 77.8236,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: 12.7409, longitude: 77.8236 }}
          title="Hosur, Tamil Nadu"
          description="This is Hosur in Tamil Nadu"
        />
      </MapView>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
