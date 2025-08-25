import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { Fonts } from '../constants/Font';
import CustomButton from '../componets/CustomButton';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/images/banner.png')}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>Viorra</Text>
        <Text style={styles.subtitle}>Your Beauty, Delivered.</Text>
        <CustomButton
          title="Get Started"
          width={width * 0.44} // 40% of screen width
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Onboardbackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: width, 
    height: height * 0.55, 
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontFamily: Fonts.ITALIANAREGULAR,
    fontSize: width * 0.13, 
    letterSpacing: -0.32,
    textAlign: 'center',
    color: Colors.WHITE,
    marginBottom: height * 0.0049,
  },
  subtitle: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.06, 
    color: Colors.WHITE,
    letterSpacing: -0.32,
    textAlign: 'center',
    marginBottom: height * 0.0246,
  },
});
