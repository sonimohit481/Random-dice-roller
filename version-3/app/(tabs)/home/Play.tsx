import { DiceComponent } from "@/components/DiceComponent";
import { RollHistory } from "@/components/RollHistory";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

const Play = () => {
  const { Score, ResultTypes, DiceCount } = useLocalSearchParams();
  const scoreArray = (Score as unknown as number[]) || [];
  const resultTypeArray = (ResultTypes as string[]) || [];
  const [scores, setScores] = useState<number[]>([...scoreArray]);
  const [resultTypes, setResultTypes] = useState<string[]>([
    ...resultTypeArray,
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [resultMessage, setResultMessage] = useState<string>("");
  const [resultColor, setResultColor] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Modal state
  const [isHistoryModalVisible, setIsHistoryModalVisible] =
    useState<boolean>(false);

  const rollDice = () => {
    setIsLoading(true);
    setResultMessage("Rolling...");

    setTimeout(() => {
      const newScores = Array.from(
        { length: +DiceCount },
        () => Math.floor(Math.random() * 6) + 1
      );
      const highestScore = Math.max(...newScores);
      const winners = newScores
        .map((score, i) => (score === highestScore ? i + 1 : null))
        .filter(Boolean);

      if (winners.length > 1) {
        setResultMessage(`It's a draw between ${winners.join(" and ")}`);
        setResultColor(styles.textBlue.color);
        setResultTypes(
          newScores.map((score) => (score === highestScore ? "draw" : ""))
        );
      } else {
        setResultMessage(`Member ${winners[0]} Wins!`);
        setResultColor(styles.textGreen.color);
        setResultTypes(
          newScores.map((_, i) => (i + 1 === winners[0] ? "win" : ""))
        );
      }

      setScores(newScores);
      setHistory((prevHistory) => [resultMessage, ...prevHistory].slice(0, 10));
      setIsLoading(false);
    }, 1000);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const toggleHistoryModal = () => {
    setIsHistoryModalVisible(!isHistoryModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Dice roll section */}
      <View style={styles.diceContainer}>
        <View style={styles.diceGrid}>
          {Array.from({ length: +DiceCount }).map((_, index) => (
            <DiceComponent
              key={index}
              member={index + 1}
              score={scores[index]}
              resultType={resultTypes[index]}
              isLoading={isLoading}
            />
          ))}
        </View>
        <Text style={[styles.resultMessage, { color: resultColor }]}>
          {resultMessage}
        </Text>
        <Button title="Roll The Dice" onPress={rollDice} color="green" />
      </View>

      {/* Open History Button at Bottom */}
      <View style={styles.historyButtonContainer}>
        <Button
          title="Open History"
          onPress={toggleHistoryModal}
          color="orange"
        />
      </View>

      {/* Modal to show history */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isHistoryModalVisible}
        onRequestClose={toggleHistoryModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Close Icon */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleHistoryModal}
            >
              <Ionicons name="close" size={32} color="black" />
            </TouchableOpacity>

            <RollHistory history={history} onClear={clearHistory} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  diceContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  diceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  resultMessage: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  textBlue: {
    color: "#2563eb",
  },
  textGreen: {
    color: "#16a34a",
  },
  historyButtonContainer: {
    position: "absolute",
    bottom: 40, // Position the button at the bottom
    width: "100%",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: "center",
    maxHeight: "80%",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
  },
});
