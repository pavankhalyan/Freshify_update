import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import SignUp from '../SignUp';

const AuthStack = createStackNavigator();

function AuthNavigator({ setIsLoggedIn }) {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login">
        {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
