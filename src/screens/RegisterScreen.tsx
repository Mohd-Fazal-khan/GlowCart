import React, { useState } from 'react';
import Header from '../componets/Header';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../componets/CustomButton';
import { Fonts } from '../constants/Font';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Header height={height * 0.18} title="Join The Glow!" />

      <View style={styles.form}>
      
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={Colors.Placeholder}
            value={fullName}
            onChangeText={setFullName}
          />
          <Ionicons
            name="person-outline"
            size={20}
            color={Colors.Lightgray}
            style={styles.icon}
          />
        </View>

    
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={Colors.Placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Ionicons
            name="mail-outline"
            size={20}
            color="#888"
            style={styles.icon}
          />
        </View>

      
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: Colors.black }]}
            placeholder="Password"
            placeholderTextColor={Colors.Placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={Colors.Lightgray}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

       
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: Colors.black }]}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.Placeholder}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={Colors.Lightgray}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

      
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={() => navigation.navigate('MainApp')}
           width={width*0.9}
            title={'Create Account'}
          />
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.normalText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Body,
  },
  form: {
    marginTop: height * 0.05, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: width * 0.06,
    borderColor: Colors.SecondaryBorder,
    borderRadius: 12, 
    paddingHorizontal: 12,
    marginBottom: height * 0.018, 
    backgroundColor: Colors.WHITE,
    height: height * 0.08, 
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    flex: 1,
    fontSize: width * 0.042, 
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: height * 0.035, 
  },
  registerContainer: {
    marginTop: height * 0.1, 
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
});
