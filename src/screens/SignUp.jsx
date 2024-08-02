import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth, db } from './firebaseConfig'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = ({ setIsLoggedIn }) => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  const handlesignUp = async (values) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredentials.user;

      await setDoc(doc(db, "users", user.uid), {
        name: values.name,
        mobileNumber: values.mobileNumber,
        email: values.email,
      });

      setIsLoggedIn(true);
      navigation.navigate('Homepage');
    } catch (err) {
      console.error('SignUp Error:', err);
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  };

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.greenText}>Fresh</Text>
        <Text style={styles.whiteText}>ify</Text>
      </Text>
      <Formik
        initialValues={{ name: '', mobileNumber: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={signUpSchema}
        onSubmit={handlesignUp}
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
                keyboardType="phone-pad"
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
                placeholder="Enter your Email Address"
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
                placeholder="Create your own Password"
                placeholderTextColor="white"
                secureTextEntry={!passwordVisible}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <FontAwesome name={passwordVisible ? "eye" : "eye-slash"} size={20} color="white" style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <View style={styles.inputContainer}>
              <FontAwesome name="lock" size={20} color="white" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                secureTextEntry={!confirmPasswordVisible}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                <FontAwesome name={confirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="white" style={styles.eyeIcon} />
              </TouchableOpacity>
            </View>
            {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signup}>
                Already have an account? <Text style={styles.underline}>Log in</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

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
  },
  signup: {
    color: 'white',
    fontSize: 15,
    marginTop: 20,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
});

export default SignUp;
