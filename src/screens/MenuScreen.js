import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Dummy menu data
const menuData = [
  {
    id: "1",
    name: "Hot Gobe Classic",
    description: "Traditional hot gobe with special spices",
    price: 15.99,
    image: require("../../assets/splash.png"),
  },
  {
    id: "2",
    name: "Vegetarian Gobe",
    description: "Plant-based gobe with fresh vegetables",
    price: 12.99,
    image: require("../../assets/splash.png"),
  },
  {
    id: "3",
    name: "Spicy Gobe Supreme",
    description: "Extra hot gobe with pepper sauce",
    price: 17.99,
    image: require("../../assets/splash.png"),
  },
  {
    id: "4",
    name: "Gobe Family Pack",
    description: "Large serving for 3-4 people",
    price: 29.99,
    image: require("../../assets/splash.png"),
  },
  {
    id: "5",
    name: "Gobe Kids Meal",
    description: "Milder version perfect for children",
    price: 9.99,
    image: require("../../assets/splash.png"),
  },
];

const MenuScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={item.image} style={styles.menuImage} />
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{item.name}</Text>
        <Text style={styles.menuDescription}>{item.description}</Text>
        <View style={styles.menuFooter}>
          <Text style={styles.menuPrice}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addToCart(item)}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {totalItems > 0 && (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Cart", { cartItems })}
        >
          <View style={styles.cartButton}>
            <Ionicons name="cart" size={24} color="white" />
            <Text style={styles.cartText}>View Cart ({totalItems})</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  listContainer: {
    padding: 15,
    paddingBottom: 80, // Provide space for the fixed cart button
  },
  menuItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  menuImage: {
    width: "100%",
    height: 180,
  },
  menuContent: {
    padding: 15,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  menuDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  menuFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  menuPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff6b35",
  },
  addButton: {
    backgroundColor: "#ff6b35",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cartButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#ff6b35",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default MenuScreen;
