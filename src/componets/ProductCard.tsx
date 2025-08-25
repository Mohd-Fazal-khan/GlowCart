import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
// import { Fonts } from './src/constants/Font';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from "../constants/Font";
import { Colors } from "../constants/Colors";
const { width, height } = Dimensions.get("window");

const ProductCard = ({ product, cardWidth, cardMargin }) => {

  return (
    <View style={[styles.container, { width: cardWidth-10, margin: cardMargin / 2 }]}>
      <Image source={{ uri: product.thumbnail }} style={[styles.img, { width: cardWidth - 24 }]} />
      <View style={[styles.details, { width: cardWidth - 24 }]}>
        <Text style={styles.text}>{product.title.split(" ").slice(0, 2).join(" ")}</Text>
        <View style={styles.group}>
          <Text style={styles.pricetext}>${product.price}</Text>
          <Ionicons name="heart-outline" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: height * 0.26, 
    backgroundColor: Colors.WHITE,
    borderRadius: width * 0.025, 
    alignItems: "center",
    paddingTop: height * 0.012, 
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    
  },
  img: {
    width: width * 0.4, 
    height: height * 0.17, 
    borderRadius: width * 0.025,
    resizeMode: "contain",
    backgroundColor: Colors.Imagebackground,
  },
  details: {
    marginTop: height * 0.01,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.005,
  },
  text: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.033,
    lineHeight: height * 0.025,
    letterSpacing: -0.32,
    color: Colors.black,
  },
  pricetext: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.033,
    lineHeight: height * 0.025,
    letterSpacing: -0.32,
    color: Colors.Gray,
  },
});
