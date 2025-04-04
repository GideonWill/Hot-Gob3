import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Hot Gobe</Text>
        <Text style={styles.heroSubtitle}>Delicious African Cuisine</Text>
        <Image
          source={require("../../assets/splash.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Text style={styles.heroDescription}>
          Traditional recipes with a modern twist. Experience the authentic
          taste of Hot Gobe.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>Explore Our Menu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Hot Gobe?</Text>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Fresh Ingredients</Text>
          <Text style={styles.featureDescription}>
            We use only the freshest ingredients to prepare our dishes.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Authentic Recipes</Text>
          <Text style={styles.featureDescription}>
            Our recipes have been passed down through generations.
          </Text>
        </View>

        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>Fast Delivery</Text>
          <Text style={styles.featureDescription}>
            We deliver your favorite dishes right to your doorstep.
          </Text>
        </View>
      </View>

      <View style={styles.cta}>
        <Text style={styles.ctaText}>Ready to order?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2023 Hot Gobe. All rights reserved.
        </Text>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  hero: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ff6b35",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  heroDescription: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#ff6b35",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  featureItem: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  cta: {
    padding: 20,
    backgroundColor: "#ff6b35",
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
  },
  ctaText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#888",
  },
});

export default HomeScreen;
