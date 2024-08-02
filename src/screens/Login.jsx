import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Animated, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth, db } from './firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Login = ({ setIsLoggedIn }) => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handleLogin = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        lastLogin: new Date().toISOString(),
      });

      setIsLoggedIn(true);
      navigation.navigate('Homepage');
    } catch (error) {
      console.error(error);
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Image source={require('./custom/image/logo.png')} style={styles.logo} />
      <Text style={styles.title}>
        <Text style={styles.greenText}>Fresh</Text>
        <Text style={styles.whiteText}>ify</Text>
      </Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <Animated.View style={[styles.inputContainer, { transform: [{ translateX: shakeAnimation }] }]}>
              <FontAwesome name="envelope" size={20} color="white" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your Email Address"
                placeholderTextColor="white"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </Animated.View>
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <Animated.View style={[styles.inputContainer, { transform: [{ translateX: shakeAnimation }] }]}>
              <FontAwesome name="lock" size={20} color="white" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your Password"
                placeholderTextColor="white"
                secureTextEntry={!passwordVisible}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <FontAwesome name={passwordVisible ? "eye" : "eye-slash"} size={20} color="white" style={styles.eyeIcon} />
              </TouchableOpacity>
            </Animated.View>
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signup}>
                Don't have an account? <Text style={styles.underline}>Create one</Text>
              </Text>
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
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  eyeIcon: {
    marginRight: 10,
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
  signup: {
    color: 'white',
    marginTop: 20,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
