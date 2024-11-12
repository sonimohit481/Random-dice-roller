import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";

const Home = () => {
  const [diceCount, setDiceCount] = useState<number>(2);

  const startRolling = () => {
    router.push({
      pathname: "/(tabs)/home/Play",
      params: {
        DiceCount: diceCount,
        Score: Array(diceCount).fill(0),
        ResultTypes: Array(diceCount).fill(""),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Throw The Dice</Text>
      <View style={styles.selectionContainer}>
        <Text style={styles.label}>Choose Number of Dice:</Text>

        <Picker
          selectedValue={diceCount}
          onValueChange={(itemValue: React.SetStateAction<number>) =>
            setDiceCount(itemValue)
          }
          style={{ width: 100 }}
        >
          {[...Array(5)].map((_, index) => (
            <Picker.Item label={`${index + 1}`} value={index + 1} key={index} />
          ))}
        </Picker>
        <Button title="Start" onPress={startRolling} color="green" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2563eb",
    marginVertical: 16,
  },
  selectionContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4b5563",
  },
  diceContainer: {
    alignItems: "center",
  },
  diceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  resultMessage: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  textBlue: {
    color: "#2563eb",
  },
  textGreen: {
    color: "#16a34a",
  },
});
