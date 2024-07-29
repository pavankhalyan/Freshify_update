import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Badge = ({ text, imageSource }) => {
  return (
    <View style={styles.badge}>
      <Image 
        source={imageSource} 
        style={styles.badgeImage} 
      />
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={require('./images/mine profile.jpg')} // Update the path to your profile picture
          style={styles.profileImage}
        />
        <Text style={styles.text}>Pavan Khalyan S</Text>
      </View>
      
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Successful Trips</Text>
          <Text style={styles.boxText}>Total Trips</Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.boxText}>Saved Boxes</Text>
        </View>
      </View>
      
      <View style={styles.badgeContainer}>
        {/* <View style={styles.badgeBox}>
          <Badge text="Badge 1" imageSource={require('./images/badge1.png')} />
        </View>
        <View style={styles.badgeBox}>
          <Badge text="Badge 2" imageSource={require('./images/badge2.png')} />
        </View>
        <View style={styles.badgeBox}>
          <Badge text="Badge 3" imageSource={require('./images/badge3.png')} />
        </View> */}
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 10,
  },
  profileImage: {
    width: 50, 
    height: 50,
    borderRadius: 25, 
    marginRight: 20, 
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  box: {
    backgroundColor: 'grey',
    flex: 1,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    height: 150,
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: 'green',
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    height: 150, 
    justifyContent: 'center',
  },
  boxText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  badgeBox: {
    backgroundColor: 'grey',
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  badgeImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 5,
  },
  badgeText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
});
