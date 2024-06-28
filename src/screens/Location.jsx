import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

const hosur = { latitude: 12.740938, longitude: 77.825292 };
const coimbatore = { latitude: 11.0168, longitude: 76.9558 };

const Location = () => {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    const fetchRoute = async () => {
      const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your Google API key
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${hosur.latitude},${hosur.longitude}&destination=${coimbatore.latitude},${coimbatore.longitude}&key=${apiKey}`;
      try {
        const response = await axios.get(url);
        const points = decode(response.data.routes[0].overview_polyline.points);
        setRoute(points);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoute();
  }, []);

  const decode = (t, e = 5) => {
    let points = [];
    for (let step of t.split('?')) {
      let x = 0, y = 0;
      let stepBytes = step.split('').map(char => char.charCodeAt(0) - 63);
      for (let i = 0; i < stepBytes.length; ) {
        let pointByte = [];
        do {
          pointByte.push(stepBytes[i++]);
        } while (pointByte[pointByte.length - 1] >= 0x20);
        let result = pointByte.reduce((sum, byte, idx) => sum | ((byte & 0x1f) << (idx * 5)), 0);
        let shift = (result & 1) ? ~(result >> 1) : (result >> 1);
        x += shift;
        y += shift;
        points.push({ latitude: x * 1e-5, longitude: y * 1e-5 });
      }
    }
    return points;
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (hosur.latitude + coimbatore.latitude) / 2,
          longitude: (hosur.longitude + coimbatore.longitude) / 2,
          latitudeDelta: 3.0,
          longitudeDelta: 3.0,
        }}
      >
        <Marker coordinate={hosur} title="Hosur" />
        <Marker coordinate={coimbatore} title="Coimbatore" />
        {route.length > 0 && (
          <Polyline
            coordinates={route}
            strokeColor="#00FF00" 
            strokeWidth={6}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Location;
