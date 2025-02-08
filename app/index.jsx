import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar,
  Linking,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "expo-router/build/global-state/routing";

export default function HomeScreen() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  const openSocialLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <LinearGradient colors={["#102343", "#102343"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {/* Logo */}
          <Image
            source={require("../assets/logo/imagetwo.jpeg")}
            style={styles.logo}
          />

          {/* App Name */}
          <Text style={styles.appName}>CompaniesCenterLLC</Text>

          {/* Welcome Message */}
          <Text style={styles.welcomeText}>
            Welcome to <Text style={styles.highlightedText}>CompaniesCenterLLC</Text> — your trusted hub for job postings and reviews.
          </Text>

          {/* Key Features */}
          <View style={styles.featuresContainer}>
            <Text style={styles.featureText}>- Connect businesses with top talent.</Text>
            <Text style={styles.featureText}>- Empower careers, foster innovation.</Text>
            <Text style={styles.featureText}>- Seamless solutions for the modern workforce.</Text>
          </View>

          <Text style={styles.joinText}>Join us today and shape the future!</Text>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => handleNavigate("about")}
            >
              <Text style={styles.continueButtonTex2}>Learn More</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.continueButton, styles.secondaryButton]}
              onPress={() => handleNavigate("login")}
            >
              <Text style={styles.continueButtonText}>Get started</Text>
            </TouchableOpacity>
          </View>

          {/* Social Media Icons */}
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => openSocialLink("https://facebook.com")}>
              <FontAwesome name="facebook" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openSocialLink("https://instagram.com")}>
              <FontAwesome name="instagram" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openSocialLink("https://twitter.com")}>
              <FontAwesome name="twitter" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 <Text style={styles.footerHighlight}>CompaniesCenterLLC.com</Text> - All Rights Reserved |{" "}
            <Text
              style={styles.policyLink}
              onPress={() => navigation.navigate("terms")}
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
    justifyContent: "center",
    alignItems: "center",
    padding:10,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  welcomeText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 26,
  },
  highlightedText: {
    color: "#1ea",
    fontWeight: "bold",
  },
  featuresContainer: {
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
  },
  featureText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginVertical: 5,
    lineHeight: 22,
  },
  joinText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: "#1eac",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1eac",
  },
  continueButtonText: {
    color: "#1eac",
    fontSize: 18,
    fontWeight: "bold",
  },
  continueButtonTex2:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 30,
  },
  footer: {
    marginTop: 40,
    paddingVertical: 15,
    alignItems: "center",
    width: "100%",
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