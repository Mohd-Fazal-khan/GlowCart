import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Fonts } from '../constants/Font';
import ProductCard from '../componets/ProductCard';
import axios from 'axios';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');
const CARD_MARGIN = width * 0.02;
const CARD_WIDTH = width / 2 - CARD_MARGIN * 3;
const numColumns = 2;

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    let tempProducts = [...products];

    if (searchText) {
      tempProducts = tempProducts.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    tempProducts = tempProducts.filter(
      item => item.price >= priceRange[0] && item.price <= priceRange[1],
    );

    if (selectedCategory) {
      tempProducts = tempProducts.filter(
        item =>
          typeof item.category === 'string' &&
          item.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    if (selectedBrand) {
      tempProducts = tempProducts.filter(
        item =>
          typeof item.brand === 'string' &&
          item.brand.toLowerCase() === selectedBrand.toLowerCase(),
      );
    }

    setFilteredProducts(tempProducts);
  }, [searchText, priceRange, selectedCategory, selectedBrand, products]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <ProductCard
        product={item}
        cardWidth={CARD_WIDTH}
        cardMargin={CARD_MARGIN}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.top}>
        <View style={styles.topRow}>
          <Text style={styles.logo} >Viorra</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={{ marginRight: width * 0.04 }}>
              <Ionicons
                name="notifications-outline"
                size={width * 0.06}
                color={Colors.black}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="bag-outline"
                size={width * 0.06}
                color={Colors.black}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={width * 0.05}
            color={Colors.Lightgray}
            style={{ marginHorizontal: width * 0.02 }}
          />
          <TextInput
            placeholder="Search for all products"
            placeholderTextColor={Colors.Placeholder}
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            
          />
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Best Products</Text>
            <Text style={styles.subtitle}>
              {filteredProducts.length} products
            </Text>
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setFilterModalVisible(true)}
          >
            <Text
              style={styles.filterText}
              allowFontScaling={false}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              Apply Filter
            </Text>
            <Ionicons
              name="chevron-down"
              size={width * 0.045}
              color={Colors.Gray}
              style={{ marginLeft: width * 0.01 }}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={numColumns}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: CARD_MARGIN,
          }}
          contentContainerStyle={{
            paddingHorizontal: CARD_MARGIN / 2,
            paddingBottom: height * 0.02,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Filter Modal */}
      <Modal
        visible={filterModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Icon */}
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setFilterModalVisible(false)}
            >
              <Ionicons name="close" size={width * 0.07} color={Colors.black} />
            </TouchableOpacity>

            <ScrollView>
              <Text style={styles.modalTitle}>Filter by Price</Text>
              <Text style={styles.modalLabel}>
                Price: ${priceRange[0]} - ${priceRange[1]}
              </Text>

              <MultiSlider
                values={priceRange}
                sliderLength={width * 0.7}
                onValuesChange={values => setPriceRange(values)}
                min={0}
                max={1000}
                step={10}
                selectedStyle={{ backgroundColor: Colors.PRIMARY }}
                unselectedStyle={{ backgroundColor: Colors.Lightgray }}
                markerStyle={{ backgroundColor: Colors.PRIMARY }}
              />

              {/* Category Filter */}
              <Text style={styles.modalTitle}>Filter by Category</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: 10 }}
              >
                {Array.from(new Set(products.map(item => item.category))).map(
                  category => (
                    <TouchableOpacity
                      key={category}
                      style={[
                        styles.filterOption,
                        selectedCategory === category && {
                          backgroundColor: Colors.PRIMARY,
                        },
                      ]}
                      onPress={() =>
                        setSelectedCategory(
                          selectedCategory === category ? null : category,
                        )
                      }
                    >
                      <Text
                        style={[
                          styles.filterOptionText,
                          selectedCategory === category && {
                            color: Colors.WHITE,
                          },
                        ]}
                      >
                        {category}
                      </Text>
                    </TouchableOpacity>
                  ),
                )}
              </ScrollView>

              {/* Brand Filter */}
              <Text style={styles.modalTitle}>Filter by Brand</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginVertical: 10 }}
              >
                {Array.from(new Set(products.map(item => item.brand))).map(
                  brand => (
                    <TouchableOpacity
                      key={brand}
                      style={[
                        styles.filterOption,
                        selectedBrand === brand && {
                          backgroundColor: Colors.PRIMARY,
                        },
                      ]}
                      onPress={() =>
                        setSelectedBrand(selectedBrand === brand ? null : brand)
                      }
                    >
                      <Text
                        style={[
                          styles.filterOptionText,
                          selectedBrand === brand && {
                            color: Colors.WHITE,
                          },
                        ]}
                      >
                        {brand}
                      </Text>
                    </TouchableOpacity>
                  ),
                )}
              </ScrollView>

              {/* Buttons */}
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setFilterModalVisible(false)}
              >
                <Text
                  style={styles.applyButtonText}
                  allowFontScaling={false}
                  adjustsFontSizeToFit
                  numberOfLines={1}
                >
                  Apply Filters
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.applyButton,
                  { backgroundColor: Colors.Lightgray, marginTop: 10 },
                ]}
                onPress={() => {
                  setSelectedCategory(null);
                  setSelectedBrand(null);
                  setPriceRange([0, 2500]);
                  setSearchText('');
                }}
              >
                <Text
                  style={[styles.applyButtonText, { color: Colors.black }]}
                  allowFontScaling={false}
                  adjustsFontSizeToFit
                  numberOfLines={1}
                >
                  Reset Filters
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.WHITE },
  top: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Lightgray,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  logo: {
    fontFamily: Fonts.ITALIANAREGULAR,
    fontSize: width * 0.08,
   
    letterSpacing: -0.32,
    color: Colors.PRIMARY,
  },
  iconContainer: { flexDirection: 'row', alignItems: 'center' },
  searchContainer: {
    marginTop: height * 0.02,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: width * 0.07,
    borderColor: Colors.Border,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    height: height * 0.06,
    marginBottom: height * 0.01,
  },
  searchInput: {
    flex: 1,
    fontSize: width * 0.035,
    color: Colors.Darkgray,
    height: height * 0.044,
    paddingVertical: height * 0.012,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.Body,
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.01,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  title: {
    fontFamily: Fonts.INTERMEDIUM,
    fontSize: width * 0.05,
    color: Colors.black,
  },
  subtitle: {
    fontFamily: Fonts.INTERMEDIUM,
    fontSize: width * 0.03,
    color: Colors.Border,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:width*0.02,
    width: width * 0.28,
    height: height * 0.05,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: width * 0.03,
    borderRadius: width * 0.02,
    justifyContent: 'center',
  },
  filterText: {
    fontFamily:Fonts.INTERMEDIUM,
    color: Colors.Gray,
    fontSize: width * 0.030,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: Colors.WHITE,
    borderRadius: width * 0.03,
    padding: width * 0.05,
    maxHeight: '80%',
  },
  closeIcon: {
    position: 'absolute',
    top: height * 0.015,
    right: width * 0.04,
    zIndex: 10,
  },
  modalTitle: {
    fontSize: width * 0.05,
    marginBottom: height * 0.01,
    fontFamily: Fonts.INTERMEDIUM,
  },
  modalLabel: { marginTop: height * 0.01, fontSize: width * 0.035 },
  applyButton: {
    backgroundColor: Colors.PRIMARY,
    padding: height * 0.015,
    borderRadius: width * 0.02,
    marginTop: height * 0.02,
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.WHITE,
    fontSize: width * 0.04,
  },
  filterOption: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.012,
    borderWidth: 1,
    borderColor: Colors.Border,
    borderRadius: width * 0.02,
    marginRight: width * 0.02,
  },
  filterOptionText: {
    fontSize: width * 0.035,
    color: Colors.black,
  },
});

export default HomeScreen;
