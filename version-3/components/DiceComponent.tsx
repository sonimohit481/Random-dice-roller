import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type DiceComponentProps = {
  member: number;
  score: number;
  resultType: string;
  isLoading: boolean;
};

export const DiceComponent = ({
  member,
  score,
  resultType,
  isLoading,
}: DiceComponentProps) => {
  return (
    <View
      style={[
        styles.container,
        resultType === "win" && styles.win,
        resultType === "draw" && styles.draw,
      ]}
    >
      {!isLoading ? (
        <>
          <Image source={require("../assets/dice2.png")} style={styles.image} />
          <Text style={styles.score}>{score}</Text>
        </>
      ) : (
        <Image
          source={require("../assets/Dice.gif")}
          style={styles.loadingImage}
        />
      )}
      <Text style={styles.member}>Dice {member}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 120,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  loadingImage: {
    width: 70,
    height: 70,
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
  },
  member: {
    fontSize: 12,
    color: "#6b7280",
  },
  win: {
    backgroundColor: "#d1fae5",
    borderColor: "#16a34a",
  },
  draw: {
    backgroundColor: "#dbeafe",
    borderColor: "#2563eb",
  },
});
