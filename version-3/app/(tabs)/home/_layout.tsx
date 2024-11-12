import { router, Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Home" />
      {/* <Stack.Screen name="Play" /> */}
    </Stack>
  );
}
