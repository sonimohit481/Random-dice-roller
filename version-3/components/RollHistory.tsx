import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
type RollHistoryProps = {
  history: string[];
  onClear: () => void;
};
export const RollHistory = ({ history, onClear }: RollHistoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roll History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item}</Text>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <Button title="Clear History" onPress={onClear} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#17f",
  },
  historyItem: {
    fontSize: 16,
    color: "#374151",
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
  },
});
