import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TermsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Terms and Conditions for Advertising</Text>
        <Text style={styles.paragraph}>
          By placing advertisements on our platform, you agree to the following terms and conditions. These guidelines are designed to ensure that all ads are appropriate, respectful, and in line with our community standards.
        </Text>

        <Text style={styles.heading}>1. Prohibition of Offensive or Derogatory Content</Text>
        <Text style={styles.paragraph}>
          Ads containing language, images, or insinuations that could be considered offensive, derogatory, or that promote hate, racism, xenophobia, discrimination of any kind, or violence will not be allowed.
        </Text>

        <Text style={styles.heading}>2. Prohibition of Sexual Content</Text>
        <Text style={styles.paragraph}>
          Any sexual content, including images, texts, insinuations, or any type of representation that could be interpreted as sexually explicit or suggestive, is strictly prohibited.
        </Text>

        <Text style={styles.heading}>3. Prohibition of Controversial or Malicious Content</Text>
        <Text style={styles.paragraph}>
          Ads addressing controversial topics such as extreme politics, religion, or any issue that may cause division, conflict, or be misinterpreted by our audience will not be accepted.
        </Text>

        <Text style={styles.heading}>4. Respect and Decency</Text>
        <Text style={styles.paragraph}>
          All ads must maintain a respectful tone and must not include anything that could be considered offensive, vulgar, disrespectful, or inappropriate in any way.
        </Text>

        <Text style={styles.heading}>5. Prohibition of Personal or Sensitive Information</Text>
        <Text style={styles.paragraph}>
          Advertisements containing personal information of any individual without their explicit consent are not allowed.
        </Text>

        <Text style={styles.heading}>6. Legal and Regulatory Compliance</Text>
        <Text style={styles.paragraph}>
          All ads must comply with all applicable local, national, and international laws and regulations. The advertiser is fully responsible for ensuring that their content does not violate any laws or regulations.
        </Text>

        <Text style={styles.heading}>7. Right to Reject and Remove</Text>
        <Text style={styles.paragraph}>
          We reserve the absolute right to reject, modify, or remove any ad that we deem inappropriate, that does not comply with these terms and conditions, or that could be misinterpreted in any way.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 4,
    color: '#444',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
});

export default TermsScreen;
