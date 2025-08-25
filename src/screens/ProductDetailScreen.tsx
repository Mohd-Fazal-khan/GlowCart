import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Fonts } from '../constants/Font';
import ReviewsList from '../componets/ReviewsList';
import CustomButton from '../componets/CustomButton';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window'); // Get device width and height

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const rating = product?.rating ?? 3.5;
  const price = product?.price ?? 0;
  const discountPercentage = product?.discountPercentage ?? 0;
  const discountPrice = Math.round(
    price / (1 - discountPercentage / 100),
  ).toFixed(2);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`full-${i}`} name="star" size={18} color="black" />,
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={18} color="black" />,
      );
    }
    while (stars.length < 5) {
      stars.push(
        <Ionicons
          key={`empty-${stars.length}`}
          name="star-outline"
          size={18}
          color="black"
        />,
      );
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        {/* Image Section */}
        <View style={[styles.imageWrapper, { height: height * 0.4 }]}>
          <Image
            source={{ uri: product?.thumbnail }}
            style={[styles.img, { height: height * 0.4 }]}
            resizeMode="contain"
          />
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0)']}
            style={styles.gradient}
          />
          <View style={styles.topIcons}>
            <TouchableOpacity
              style={styles.iconBox}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back"
                size={width * 0.05}
                color={Colors.black}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBox}>
              <Ionicons
                name="bag-outline"
                size={width * 0.05}
                color={Colors.black}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Navigation Row */}
        <View style={styles.nav}>
          <TouchableOpacity
            style={[
              styles.btn,
              {
                width: width * 0.25,
                height: height * 0.04,
                alignItems: 'center',
                justifyContent: 'center', // ✅ Ensures text is vertically centered
              },
            ]}
          >
            <Text
              style={[
                styles.txt,
                { fontSize: width * 0.035, textAlign: 'center' },
              ]}
            >
              View Similar
            </Text>
          </TouchableOpacity>

          <Ionicons
            name="share-social"
            size={width * 0.08}
            color={Colors.black}
          />
        </View>

        {/* Title & Description */}
        <Text style={[styles.title, { fontSize: width * 0.05 }]}>
          {product?.title ?? 'Product Name'}
        </Text>
        <Text style={[styles.subtxt, { fontSize: width * 0.035 }]}>
          {product?.description ?? 'Product description goes here.'}
        </Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          {renderStars()}
          <Text style={[styles.ratingText, { fontSize: width * 0.035 }]}>
            {rating.toFixed(1)} / 5
          </Text>
        </View>

        <View style={styles.line} />

        {/* Details */}
        <View style={styles.detail}>
          <Text style={[styles.regularText, { fontSize: width * 0.035 }]}>
            Sold by :{' '}
            <Text style={[styles.mediumText, { fontSize: width * 0.035 }]}>
              {product?.brand ?? 'Brand'}
            </Text>
          </Text>
        </View>

        {/* Pricing & Button */}
        <View style={styles.pricing}>
          <View>
            <Text style={[styles.price, { fontSize: width * 0.05 }]}>
              ${price}
            </Text>
            {discountPercentage > 0 && (
              <Text style={[styles.discountPrice, { fontSize: width * 0.04 }]}>
                ${discountPrice}
              </Text>
            )}
          </View>

          <CustomButton width={width * 0.45} title={'Add to Bag'} />
        </View>

        {/* Highlights */}
        <View style={styles.highlightcontainer}>
          <Text style={[styles.highlights, { fontSize: width * 0.045 }]}>
            Highlights
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureColumn}>
            <View style={styles.feature}>
              <Text style={[styles.featureLabel, { fontSize: width * 0.032 }]}>
                Width
              </Text>
              <Text style={[styles.featureValue, { fontSize: width * 0.032 }]}>
                {product.dimensions.width}
              </Text>
            </View>
            <View style={styles.feature}>
              <Text style={[styles.featureLabel, { fontSize: width * 0.032 }]}>
                Warranty
              </Text>
              <Text style={[styles.featureValue, { fontSize: width * 0.032 }]}>
                {product.warrantyInformation}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.featureColumn}>
            <View style={styles.feature}>
              <Text style={[styles.featureLabel, { fontSize: width * 0.032 }]}>
                Height
              </Text>
              <Text style={[styles.featureValue, { fontSize: width * 0.032 }]}>
                {product.dimensions.height}
              </Text>
            </View>
            <View style={styles.feature}>
              <Text style={[styles.featureLabel, { fontSize: width * 0.032 }]}>
                Shipping
              </Text>
              <Text style={[styles.featureValue, { fontSize: width * 0.032 }]}>
                {product.shippingInformation}
              </Text>
            </View>
          </View>
        </View>

        {/* Reviews */}
        <View style={styles.review}>
          <Text style={[styles.reviewtxt, { fontSize: width * 0.045 }]}>
            Ratings & Reviews
          </Text>
          <ReviewsList reviews={product?.reviews || []} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.Body },
  main: { marginHorizontal: width * 0.045 },
  imageWrapper: {
    position: 'relative',
    marginTop: height * 0.02,
    borderRadius: width * 0.05,
    overflow: 'hidden',
    width: width - width * 0.045 * 2,
  },
  img: { width: '100%', backgroundColor: Colors.Imagebackground },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  topIcons: {
    position: 'absolute',
    top: height * 0.02,
    left: width * 0.04,
    right: width * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBox: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: width * 0.025,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
  },
  btn: {
    borderRadius: width * 0.05,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center', 
    paddingHorizontal: 0, 
    paddingVertical: 0, 
  },

  txt: {
    fontFamily: Fonts.INTERMEDIUM,
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontSize: width * 0.035,
  },
  title: {
    fontFamily: Fonts.INTERSEMIBOLD,
    marginTop: height * 0.012,
    color: Colors.black,
    fontSize: width * 0.045,
  },
  subtxt: {
    fontFamily: Fonts.INTERREGULAR,
    marginTop: height * 0.006,
    fontSize: width * 0.033,
    color: Colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  ratingText: {
    marginLeft: width * 0.02,
    fontFamily: Fonts.INTERMEDIUM,
    color: Colors.Darkgray,
    fontSize: width * 0.033,
  },
  line: { height: 1, backgroundColor: '#ccc', marginTop: height * 0.025 },
  detail: { marginTop: height * 0.006 },
  regularText: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.033,
    color: Colors.black,
  },
  mediumText: {
    fontFamily: Fonts.INTERMEDIUM,
    fontSize: width * 0.033,
    color: Colors.black,
  },
  pricing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  price: {
    fontFamily: Fonts.INTERSEMIBOLD,
    fontSize: width * 0.065,
    color: Colors.black,
  },
  discountPrice: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.05,
    color: Colors.Lightgray,
    textDecorationLine: 'line-through',
  },
  highlightcontainer: {
    marginTop: height * 0.035,
  },
  highlights: {
    fontFamily: Fonts.INTERSEMIBOLD,
    fontSize: width * 0.055,
    color: Colors.black,
  },
  featuresContainer: {
    flexDirection: 'row',
    marginTop: height * 0.02,
    alignItems: 'flex-start',
  },
  featureLabel: {
    color: Colors.black,
    fontSize: width * 0.035,
    fontFamily: Fonts.INTERMEDIUM,
  },
  featureValue: {
    color: Colors.black,
    fontSize: width * 0.033,
    fontFamily: Fonts.INTERREGULAR,
  },
  featureColumn: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  feature: {
    marginBottom: height * 0.02,
  },
  divider: {
    width: 1,
    backgroundColor: Colors.SecondaryBorder,
    marginHorizontal: width * 0.03,
    height: '100%',
  },
  review: {
    marginTop: height * 0.025,
    marginBottom: height * 0.025,
  },
  reviewtxt: {
    fontFamily: Fonts.INTERSEMIBOLD,
    marginLeft: width * 0.025,
    fontSize: width * 0.045,
  },
});
