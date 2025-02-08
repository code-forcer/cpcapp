import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const HomePage = () => {
  const navigation = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [user, setUser] = useState(null);

  const images = [
    require("../assets/logo/imageone.jpeg"),
    require("../assets/logo/imagetwo.jpeg"),
    require("../assets/displayimages/3.png"),
    require("../assets/displayimages/4.png"),
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.navigate("Login");
        return;
      }

      try {
        const response = await axios.get("/api/getuserdetails", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data) {
          setUser(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        navigation.navigate("Login");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>CompaniesCenterLLC</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Welcome to CompaniesCenterLLC</Text>
          <Text style={styles.heroSubtitle}>
            Find the perfect job or hire the right talent today!
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonMargin]}
            onPress={() => navigation.navigate("CreatePost")}
          >
            <Ionicons name="add-circle" size={32} color="#102343" />
            <Text style={styles.actionText}>Create Job Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("JobProfiles")}
          >
            <FontAwesome name="briefcase" size={32} color="#102343" />
            <Text style={styles.actionText}>My Job Profiles</Text>
          </TouchableOpacity>
        </View>

        {/* Image to switch at intervals */}
        <View style={styles.heroContainer}>
          <Image source={images[currentImageIndex]} style={styles.heroImage} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search jobs or companies..."
            style={styles.searchInput}
          />
          <TouchableOpacity>
            <Text style={styles.searchButton}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Jobs */}
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, styles.cardMargin]}>
            <Text style={styles.cardTitle}>Software Engineer</Text>
            <Text style={styles.cardSubtitle}>TechCorp Ltd.</Text>
            <Text style={styles.cardLink}>View Details</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Marketing Manager</Text>
            <Text style={styles.cardSubtitle}>BizGroup Inc.</Text>
            <Text style={styles.cardLink}>View Details</Text>
          </View>
        </ScrollView>

        {/* My Activity Section */}
        <Text style={styles.sectionTitle}>My Activity</Text>
        <View style={styles.activityCard}>
          <Text style={styles.activityText}>You have 3 active job posts.</Text>
          <Text style={styles.activityDetails}>
            Last post: Senior Designer at Creative Studios
          </Text>
          <TouchableOpacity>
            <Text style={styles.activityLink}>Manage Posts</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <MaterialIcons name="dashboard" size={24} color="#333" />
          <Text style={styles.navItem}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Jobs")}>
          <FontAwesome name="briefcase" size={24} color="#333" />
          <Text style={styles.navItem}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person" size={24} color="#333" />
          <Text style={styles.navItem}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
          <Ionicons name="chatbubble" size={24} color="#333" />
          <Text style={styles.navItem}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings" size={24} color="#333" />
          <Text style={styles.navItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 16,
  },

  heroContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#102343",
    marginTop: 12,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: 4,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonMargin: {
    marginRight: 8,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    color: "#102343",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#fff",
    width: 240,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardMargin: {
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  cardLink: {
    color: "#2563EB",
    marginTop: 8,
  },
  activityCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 50,
  },
  activityText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  activityDetails: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  activityLink: {
    color: "#2563EB",
    marginTop: 12,
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navItem: {
    fontSize: 12,
    marginTop: 4,
    color: "#333",
    textAlign: "center",
  },
});

export default HomePage;