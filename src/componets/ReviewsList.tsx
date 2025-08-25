import React from "react";
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fonts } from "../constants/Font";
import { Colors } from "../constants/Colors";

const { width, height } = Dimensions.get("window");

// Local avatars array
const avatarImages = [
  require("../assets/images/avatar1.webp"),
  require("../assets/images/avatar2.webp"),
  require("../assets/images/avatar3.webp"),
  // Add more as needed
];

// Single Review Card
const ReviewCard = ({ review, avatar }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(review.rating);
    const hasHalfStar = review.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons key={`full-${i}`} name="star" size={width * 0.04} color={Colors.black}/>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Ionicons key="half" name="star-half" size={width * 0.04} color={Colors.black} />
      );
    }
    while (stars.length < 5) {
      stars.push(
        <Ionicons
          key={`empty-${stars.length}`}
          name="star-outline"
          size={width * 0.04}
          color="#000"
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <View style={{ flex: 1, marginLeft: width * 0.025 }}>
          <Text style={styles.name}>{review.reviewerName}</Text>
          <Text style={styles.email}>{review.reviewerEmail}</Text>
        </View>
        <View style={styles.stars}>{renderStars()}</View>
      </View>
      <Text style={styles.comment}>{review.comment}</Text>
    </View>
  );
};

// Main Reviews List
const ReviewsList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        const avatar = avatarImages[index % avatarImages.length]; // Cycle through avatars
        return <ReviewCard review={item} avatar={avatar} />;
      }}
      contentContainerStyle={{ padding: width * 0.03 }}
    />
  );
};

export default ReviewsList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    padding: width * 0.04,
    borderRadius: width * 0.025,
    marginBottom: height * 0.015,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    width: width * 0.85, // Dynamic width for responsiveness
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.01,
  },
  avatar: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
  },
  name: {
    fontFamily: Fonts.INTERMEDIUM,
    fontSize: width * 0.035,
    color: Colors.Darkgray,
  },
  email: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.025,
   color: Colors.Darkgray,
  },
  stars: {
    flexDirection: "row",
  },
  comment: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.033,
   color: Colors.Darkgray,
    marginTop: height * 0.005,
  },
});
