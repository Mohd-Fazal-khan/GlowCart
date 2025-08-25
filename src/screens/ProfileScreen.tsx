import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView, // ✅ Added
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../constants/Font';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text}>Profile</Text>
        <TouchableOpacity style={styles.circle} onPress={() => {}}>
          <Ionicons
            name="ellipsis-horizontal"
            size={width * 0.05}
            color={Colors.black}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Header */}
      <View style={styles.profileheader}>
        <Image
          source={require('../assets/images/avatar3.webp')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Olivia</Text>
          <Text style={styles.profileEmail}>olivia@gmail.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <FontAwesome name="pencil-square-o" size={width * 0.07} color={Colors.black} />
        </TouchableOpacity>
      </View>

      {/* Menu Wrapper */}
      <View style={styles.menuWrapper}>
        {/* Address */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="location-outline" size={width * 0.07} color={Colors.black}/>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Address</Text>
            <Text style={styles.menuSubtitle}>Manage your saved address</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
            color={Colors.IconColor}
          />
        </TouchableOpacity>

        {/* Order History */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="timer-outline" size={width * 0.07} color={Colors.black}/>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Order History</Text>
            <Text style={styles.menuSubtitle}>Manage your past orders</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
            color={Colors.IconColor}
          />
        </TouchableOpacity>

        {/* Language */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="language" size={width * 0.07} color={Colors.black}/>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Language</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
           color={Colors.IconColor}
          />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="notifications-outline"
            size={width * 0.07}
          color={Colors.black}
          />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Notifications</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
            color={Colors.IconColor}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menuWrapper}>
        {/* Contact Us */}
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome
            name="address-book-o"
            size={width * 0.06}
          color={Colors.black}
          />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}> Contact Us</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
           color={Colors.IconColor}
          />
        </TouchableOpacity>

        {/* Get Help */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="help-circle-outline"
            size={width * 0.07}
           color={Colors.black}
          />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Get Help</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
           color={Colors.IconColor}
          />
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="shield-outline" size={width * 0.07} color={Colors.black} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Privacy Policy</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
            color={Colors.IconColor}
          />
        </TouchableOpacity>

        {/* Terms & Conditions */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={width * 0.07} color={Colors.black} />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Terms and Condition</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
           color={Colors.IconColor}
          />
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="log-out-outline" size={width * 0.07} color={Colors.black} />
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={styles.menuTextContainer}>
            <Text style={[styles.menuTitle,{color:"red"}]}>Logout</Text>
          </TouchableOpacity>
          <Ionicons
            name="chevron-forward"
            size={width * 0.05}
           color={Colors.IconColor}
          />
        </TouchableOpacity>
      </View>

      
    </ScrollView>
  );
};

export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Body,
  },
  header: {
    marginTop: height * 0.025,
    marginHorizontal: width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.INTERSEMIBOLD,
    fontSize: width * 0.07,
    letterSpacing: 0,
  },
  circle: {
    width: width * 0.09,
    height: width * 0.09,
    backgroundColor: Colors.WHITE,
    borderRadius: (width * 0.09) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  profileheader: {
    width: width * 0.91,
    height: height * 0.08,
    backgroundColor: 'white',
    marginTop: height * 0.025,
    marginHorizontal: width * 0.05,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    marginBottom: height * 0.025,
  },
  profileImage: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: (width * 0.11) / 2,
    marginRight: width * 0.03,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.04,
    color: Colors.black,
  },
  profileEmail: {
    fontFamily: Fonts.INTERREGULAR,
    fontSize: width * 0.035,
    color: Colors.black,
    marginTop: height * 0.002,
  },
  editButton: {
    padding: width * 0.015,
  },
  menuWrapper: {
  width: width * 0.91,
  backgroundColor: 'white',
  marginHorizontal: width * 0.05,
  borderRadius: 10,
  paddingVertical: height * 0.01, // Increased wrapper padding
  marginBottom: height * 0.025,
},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.03,
  },
  menuTextContainer: {
    flex: 1,
    marginLeft: width * 0.03,
  },
  menuTitle: {
    fontFamily:Fonts.INTERREGULAR,
    fontSize: width * 0.04,
    color: Colors.black,
  },
  menuSubtitle: {
    fontFamily:Fonts.INTERREGULAR,
    fontSize: width * 0.035,
    color: Colors.Subtext,
    marginTop: height * 0.002,
  },
});
