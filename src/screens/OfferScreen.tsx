import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';
import Header from '../componets/Header';
import { Fonts } from '../constants/Font';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

const offerData = [
  {
    id: '1',
    title: '50% OFF on Chairs',
    description: 'Grab your favorite chairs at half price!',
  },
  {
    id: '2',
    title: 'Buy 1 Get 1 Free',
    description: 'On selected cushions and pillows.',
  },
  {
    id: '3',
    title: 'Festive Discount',
    description: 'Flat 30% off on home decor items.',
  },
];

const CARD_MARGIN = width * 0.04;

const OfferScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.offerTitle}>{item.title}</Text>
      <Text style={styles.offerDesc}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title="Special Offers"
        text="Grab the best deals today!"
        height={width * 0.35}
      />
      <FlatList
        data={offerData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  list: {
    paddingHorizontal: width * 0.04,
    paddingTop: width * 0.05,
  },
  card: {
    backgroundColor: Colors.Body,
    borderRadius: width * 0.04,
    padding: width * 0.05,
    marginBottom: CARD_MARGIN,
    elevation: 3,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  offerTitle: {
    fontSize: width * 0.05,
    fontFamily: Fonts.INTERSEMIBOLD,
    color: Colors.PRIMARY,
    marginBottom: width * 0.02,
    textAlign: 'left',
  },
  offerDesc: {
    fontSize: width * 0.04,
    fontFamily: Fonts.INTERMEDIUM,
    color: Colors.HeaderText,
    lineHeight: width * 0.05,
  },
});
