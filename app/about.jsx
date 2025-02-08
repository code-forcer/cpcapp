import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutPage() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <LinearGradient colors={["#102343", "#102343"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          {/* Logo */}
          <Image
            source={require("../assets/logo/imagetwo.jpeg")}
            style={styles.logo}
          />

          {/* App Name */}
          <Text style={styles.appName}>CompaniesCenterLLC</Text>
        </View>

        {/* About Section */}
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>About CompaniesCenterLLC</Text>
          <Text style={styles.aboutText}>
            CompaniesCenterLLC is your trusted platform to connect businesses
            with top talent and provide job seekers with endless opportunities.
            We aim to empower careers and foster innovation through seamless
            solutions for the modern workforce.
          </Text>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <Text style={styles.featureText}>
            - Post and discover job opportunities easily.
          </Text>
          <Text style={styles.featureText}>
            - Build professional connections that matter.
          </Text>
          <Text style={styles.featureText}>
            - Access reliable company reviews and insights.
          </Text>
          <Text style={styles.featureText}>
            - Intuitive and user-friendly interface.
          </Text>
        </View>

        {/* Benefits Section */}
        <View style={styles.benefitsSection}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          <Text style={styles.benefitText}>
            - Trusted by companies and job seekers worldwide.
          </Text>
          <Text style={styles.benefitText}>
            - A growing network of innovative professionals.
          </Text>
          <Text style={styles.benefitText}>
            - Dedicated support to help you succeed.
          </Text>
        </View>

        {/* Social Media Section */}
        <View style={styles.socialSection}>
          <Text style={styles.sectionTitle}>Connect With Us</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => openLink("https://facebook.com")}>
              <FontAwesome name="facebook" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://instagram.com")}>
              <FontAwesome name="instagram" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink("https://twitter.com")}>
              <FontAwesome name="twitter" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 <Text style={styles.footerHighlight}>CompaniesCenterLLC.com</Text> - All Rights Reserved | 
            <Text
              style={styles.policyLink}
              onPress={() => openLink("https://yourpolicyurl.com")}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
      </ScrollView>

      <StatusBar barStyle="light-content" backgroundColor="#102343" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#fff",
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  aboutSection: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
  },
  featuresSection: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
  },
  benefitsSection: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
  },
  benefitText: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 5,
  },
  socialSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
  },
  footerHighlight: {
    color: "#1ea",
  },
  policyLink: {
    color: "#1ea",
    textDecorationLine: "underline",
  },
});