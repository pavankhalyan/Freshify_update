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
      try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${hosur.latitude},${hosur.longitude}&destination=${coimbatore.latitude},${coimbatore.longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`);
        const points = response.data.routes[0].overview_polyline.points;
        const decodedPoints = decode(points);
        setRoute(decodedPoints);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoute();
  }, []);

  const decode = (t, e = 5) => {
    let points = [];
    for (let step = 0, lat = 0, lng = 0; step < t.length;) {
      let a, b, res = 1, shift = 0;
      do {
        a = t.charCodeAt(step++) - 63 - 1;
        res += a << shift;
        shift += 5;
      } while (a >= 0x1f);
      lat += (res & 1 ? ~(res >> 1) : res >> 1);
      res = 1, shift = 0;
      do {
        b = t.charCodeAt(step++) - 63 - 1;
        res += b << shift;
        shift += 5;
      } while (b >= 0x1f);
      lng += (res & 1 ? ~(res >> 1) : res >> 1);
      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
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
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}
      >
        <Marker coordinate={hosur} title="Hosur" />
        <Marker coordinate={coimbatore} title="Coimbatore" />
        {route.length > 0 && <Polyline coordinates={route} strokeWidth={4} strokeColor="green" />}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Location;
