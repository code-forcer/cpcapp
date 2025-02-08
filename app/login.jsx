import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigation = useNavigation();
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
  
    setIsLoading(true); // Start loading
  
    try {
      const response = await fetch("https://companiescenterllc.vercel.app/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        Alert.alert("Success", "Login successful. Redirecting...");
  
        // Store token in AsyncStorage like localStorage
        await AsyncStorage.setItem("token", data.token);
  
        // Redirect after 2 seconds (similar to the website)
        setTimeout(() => {
          navigation.navigate("dashboard");
        }, 2000);
      } else {
        Alert.alert("Error", data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <LinearGradient colors={["#102343", "#102343"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to get your session started</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <FontAwesome
              name={passwordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#ccc"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[styles.loginButton, isLoading && styles.disabledButton]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={styles.loginButtonText}>
            {isLoading ? "Logging In..." : "Login"}
          </Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <Text style={styles.footerTet}>
          Don’t have an account?{" "}
          <Text
            style={styles.signUp}
            onPress={() => navigation.navigate("register")}
          >
            Sign Up
          </Text>
        </Text>

        {/* Social Media Section */}
        <View style={styles.socialSection}>
          <Text> </Text>
          <Text style={styles.sectionTitle}>Connect With Us</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity onPress={() => Alert.alert("Open Facebook")}>
              <FontAwesome name="facebook" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert("Open Instagram")}>
              <FontAwesome name="instagram" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert("Open Twitter")}>
              <FontAwesome name="twitter" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025{" "}
            <Text style={styles.footerHighlight}>CompaniesCenterLLC.com</Text> -
            All Rights Reserved |
            <Text
              style={styles.policyLink}
              onPress={() => navigation.navigate("terms")}
            >
             Terms
            </Text>
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 10,
    marginTop: 50,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 100,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: "#fff",
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#1eac",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPassword: {
    color: "#0ea",
    fontSize: 18,
    textAlign: "right",
    marginTop: 15,
    textDecorationLine: "underline",
  },
  footerTet: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    marginTop: 30,
  },
  signUp: {
    color: "#1eac",
    fontWeight: "bold",
    textDecorationLine: "underline",
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
});

export default LoginScreen;