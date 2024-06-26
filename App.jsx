import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomePage from './src/screens/HomePage';
import Profile from './src/screens/Profile';
import Truck from './src/screens/Truck';
import Location from './src/screens/Location';
import CustomHeaderTitle from './src/screens/custom/CustomHeaderTitle';
import AuthNavigator from './src/screens/custom/AuthNavigator';

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ name, color, size }) => (
  <View style={styles.iconContainer}>
    <FontAwesome name={name} color={color} size={size} />
  </View>
);

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
              borderTopWidth: 0,
              elevation: 10,
              shadowOpacity: 0.25,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 10 },
            },
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitle: () => <CustomHeaderTitle />,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <CustomTabBarIcon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Location"
            component={Location}
            options={{
              tabBarLabel: 'Location',
              tabBarIcon: ({ color, size }) => (
                <CustomTabBarIcon name="map-marker" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Truck"
            component={Truck}
            options={{
              tabBarLabel: 'Truck',
              tabBarIcon: ({ color, size }) => (
                <CustomTabBarIcon name="truck" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <CustomTabBarIcon name="user" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <AuthNavigator setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
