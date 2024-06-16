import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import HomePage from './src/screens/HomePage';
import Truck from './src/screens/Truck';
import Location from './src/screens/Location';
import CustomHeaderTitle from './src/screens/custom/CustomHeaderTitle';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: {
              backgroundColor: 'black',
            },
            headerStyle: {
              backgroundColor: 'black', // Background color of the header
            },
            headerTintColor: 'white', // Color of the header text
            headerTitle: () => <CustomHeaderTitle />,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Location"
            component={Location}
            options={{
              tabBarLabel: 'Location',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="map-marker" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Truck"
            component={Truck}
            options={{
              tabBarLabel: 'Truck',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="truck" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
