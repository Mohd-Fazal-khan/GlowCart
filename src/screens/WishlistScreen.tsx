import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import Header from '../componets/Header';
import { Fonts } from '../constants/Font';
import axios from 'axios';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

const CARD_MARGIN = width * 0.02;
const CARD_WIDTH = width / 2 - CARD_MARGIN * 3;

const WishlistScreen = ({ navigation }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setWishlistData(response.data.products.slice(0, 4)); // Limit to 10 items for demo
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity  onPress={() => navigation.navigate('ProductDetails', { product: item })} style={[styles.card, { width: CARD_WIDTH }]}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.itemName}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Wishlist" text="Your saved items" height={width * 0.35} />
      <FlatList
        data={wishlistData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Body,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: width * 0.03,
    paddingTop: width * 0.05,
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: width * 0.04,
    margin: CARD_MARGIN,
    padding: width * 0.03,
    alignItems: 'center',
    elevation: 3,
    shadowColor:Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: width * 0.35,
    borderRadius: width * 0.03,
    marginBottom: width * 0.02,
    backgroundColor: Colors.Imagebackground,
  },
  itemName: {
    fontSize: width * 0.04,
    fontFamily: Fonts.INTERMEDIUM,
    color: Colors.PRIMARY,
    textAlign: 'center',
  },
  price: {
    fontSize: width * 0.035,
    color: Colors.black,
    marginTop: width * 0.01,
    fontFamily: Fonts.INTERREGULAR,
  },
});
