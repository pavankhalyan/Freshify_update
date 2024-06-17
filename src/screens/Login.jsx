import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = ({ setIsLoggedIn }) => {
  const navigation = useNavigation();

  const handleLogin = (values) => {
    setIsLoggedIn(true); 
  };

  const loginSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.greenText}>Fresh</Text>
        <Text style={styles.whiteText}>ify</Text>
      </Text>
      <Formik
        initialValues={{ name: '', mobileNumber: '', email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <View style={styles.inputContainer}>
              <FontAwesome name="user" size={20} color="white" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your name"
                placeholderTextColor="white"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </View>
            {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            
            <View style={styles.inputContainer}>
              <FontAwesome name="phone" size={20} color="white" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your Mobile Number"
                placeholderTextColor="white"
                keyboardType='phone-pad'
                onChangeText={handleChange('mobileNumber')}
                onBlur={handleBlur('mobileNumber')}
                value={values.mobileNumber}
              />
            </View>
            {touched.mobileNumber && errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
            
            <View style={styles.inputContainer}>
              <FontAwesome name="envelope" size={20} color="white" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor="white"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            
            <View style={styles.inputContainer}>
              <FontAwesome name="lock" size={20} color="white" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter password"
                placeholderTextColor="white"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
