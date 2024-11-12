import React from "react";
import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Background.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/dice.png")}
          style={styles.diceImage}
        />
        <Image
          source={require("../assets/banner1.png")}
          style={styles.bannerImage}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Link href={"/(tabs)/home"} style={styles.buttonText}>
            Let's Go
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  diceImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
    resizeMode: "contain",
  },
  bannerImage: {
    width: 150,
    height: 75,
    borderRadius: 40,
    resizeMode: "contain",
  },
  buttonContainer: {
    backgroundColor: "#ffffff90",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 24,
    color: "#2563eb", // Use a modern blue color
    textAlign: "center",
  },
});
