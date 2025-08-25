import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../componets/Header';
import CustomButton from '../componets/CustomButton';
import { Fonts } from '../constants/Font';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        title={'Hello Again!'}
        text={'Welcome back you’ve been missed.'}
        height={200}
      />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email Id"
            value={email}
            placeholderTextColor={Colors.Placeholder}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Ionicons
            name="mail-outline"
            size={width * 0.05}
            color={Colors.Lightgray}
            style={styles.icon}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              { color: showPassword ? Colors.black : Colors.black },
            ]}
            placeholder="Password"
            value={password}
            placeholderTextColor={Colors.Lightgray}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={width * 0.055}
              color={Colors.Lightgray}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.btn}>
          <CustomButton
            onPress={() => navigation.navigate('MainApp')}
            title={'Log In'}
            width={width*0.9}
          />
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>Or Continue With</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
             source={require('../assets/images/google.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={require('../assets/images/apple.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={require('../assets/images/facebook.png')}
              style={[styles.socialIcon, { tintColor: Colors.Blue }]}
            />
          </TouchableOpacity>
        </View>

        {/* Register Text */}
        <View style={styles.registerContainer}>
          <Text style={styles.normalText}>Not a Member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Body,
  },
  form: {
    marginTop: height * 0.06, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: width * 0.06,
    borderColor: Colors.SecondaryBorder,
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.017,
    backgroundColor: Colors.WHITE,
    height: height * 0.075,
  },
  icon: {
    marginLeft: width * 0.02,
  },
  input: {
    flex: 1,
    fontSize: width * 0.04,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: width * 0.06,
    marginBottom: height * 0.027,
  },
  forgotText: {
    fontFamily: Fonts.INTERREGULAR,
    color: Colors.Secondary,
    fontSize: width * 0.035,
     textDecorationLine: 'underline',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.06,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.SecondaryBorder,
  },
  orText: {
    fontFamily: Fonts.INTERREGULAR,
   
    fontSize: 12.8,
    marginHorizontal: width * 0.03,
    color: Colors.Lightgray,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: height * 0.034,
  },
  socialBtn: {
    backgroundColor: 'white',
    marginHorizontal: width * 0.025,
    padding: width * 0.03,
    borderRadius: 8,
  },
  socialIcon: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
  registerContainer: {
    marginTop: height * 0.067,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  normalText: {
    fontFamily: Fonts.INTERREGULAR,
    color: Colors.Darkgray,
    fontSize: width * 0.039,
  },
  registerText: {
    fontFamily: Fonts.INTERSEMIBOLD,
    color: Colors.PRIMARY,
    fontSize: width * 0.039,
  },
  btn: {
    alignItems: 'center',
  },
});
