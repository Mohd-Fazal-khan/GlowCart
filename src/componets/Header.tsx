import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Fonts } from '../constants/Font';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const Header = ({ title, text, height: headerHeight }) => {
  return (
    <View style={[styles.container, { height: headerHeight || height * 0.15 }]}>
      <Text style={styles.title}>{title || ' '}</Text>
      <Text style={styles.text}>{text || ' '}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomLeftRadius: width * 0.08,
    borderBottomRightRadius: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Backgroud,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  title: {
    fontFamily: Fonts.PLAYFAIRDISPLAYEXTRABOLD,
    color: Colors.PRIMARY,
    fontStyle: 'normal',
    fontSize: width * 0.07, 
    letterSpacing: 0.68,
    textAlign: 'center',
  },
  text: {
    fontFamily: Fonts.INTERMEDIUM,
    fontSize: width * 0.06,
    lineHeight: height * 0.04,
    letterSpacing: 0.42,
    textAlign: 'center',
    width: width * 0.7,
    color: Colors.HeaderText,
    marginTop: height * 0.005,
  },
});
