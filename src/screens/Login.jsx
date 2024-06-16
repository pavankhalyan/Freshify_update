import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Login = ({ setIsLoggedIn }) => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
    // For example, you can set the login state to true
    setIsLoggedIn(true); // This will trigger the tab navigator to be displayed
    // navigation.navigate('Home'); // This line is not necessary here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.greenText}>Fresh</Text>
        <Text style={styles.whiteText}>ify</Text>
      </Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="white" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="phone" size={20} color="white" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Mobile Number"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="white" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="white" style={styles.inputIcon} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          placeholderTextColor="white"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
    flexDirection: 'row',
  },
  greenText: {
    color: 'green',
  },
  whiteText: {
    color: 'white',
  },
  inputContainer: {
    backgroundColor: 'grey',
    borderRadius: 20,
    flexDirection: 'row',
    width: 300,
    marginHorizontal: 40,
    marginVertical: 10,
    height: 50,
    alignItems: 'center',
  },
  inputIcon: {
    marginLeft: 10,
  },
  textInput: {
    marginLeft: 20,
    flex: 1,
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'green',
    width: 200,
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
