import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Dimensions } from 'react-native';
import { Fonts } from '../constants/Font';
import { Colors } from '../constants/Colors';

const { height } = Dimensions.get('window');
export default function CustomButton({ title, onPress, width }) {
  const { width: screenWidth } = useWindowDimensions();
  const buttonWidth = width ? width : screenWidth * 0.8;
  const fontSize = screenWidth < 380 ? 16 : 19; 
  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontSize }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: Fonts.INTERMEDIUM,
  },
});
