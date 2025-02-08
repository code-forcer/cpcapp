import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [role, setRole] = useState("employer");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!termsAccepted) {
      Alert.alert("Error", "Please accept the terms and conditions to continue.");
      return;
    }

    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch("https://companiescenterllc.vercel.app/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Registered successfully!");
        navigation.navigate("login"); // Navigate to the login screen
      } else {
        Alert.alert("Error", data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
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
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Fill in the details below to sign up
        </Text>

        {/* Name Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={setName}
          />
        </View>

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

        {/* Role Selection */}
        <Text style={styles.roleLabel}>Role</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            <Picker.Item label="Employer" value="employer" />
            <Picker.Item label="Company" value="company" />
          </Picker>
        </View>

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <Checkbox
            value={termsAccepted}
            onValueChange={setTermsAccepted}
            tintColors={{ true: "#1eac", false: "#ccc" }}
          />
          <Text style={styles.termsText}>
            I accept the{" "}
            <Text style={styles.link}  onPress={() => handleNavigate("terms")}>
              Terms and Conditions
            </Text>
          </Text>
        </View>

        {/* Already have an account? */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("login")}
            >
              Sign-in
            </Text>
          </Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.registerButton, isLoading && styles.disabledButton]}
          onPress={handleRegister}
          disabled={isLoading}
        >
          <Text style={styles.registerButtonText}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Text>
        </TouchableOpacity>

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
              onPress={() => Alert.alert("Open Privacy Policy")}
            >
              Privacy Policy
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
    position: "relative",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  roleLabel: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  dropdownContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  picker: {
    color: "#fff",
    height: Platform.OS === "android" ? 50 : undefined,
    paddingHorizontal: 10,
  },
  termsContainer: {
    marginBottom: 20,
  },
  termsText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
  link: {
    color: "#1ea",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: "#1eac",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
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
    fontSize: 18,
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

export default RegisterScreen;