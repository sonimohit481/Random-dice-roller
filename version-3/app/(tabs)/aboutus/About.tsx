import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>🎲 Random Dice Roller 🎲</Text>
        <Text style={styles.headerText}>Version 3.0 </Text>
      </View>

      {/* App Description */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📱 About the App</Text>
        <Text style={styles.sectionText}>
          The **Random Dice Roller** is an exciting app that allows users to
          roll dice at random for gameplay, decision-making, and more! Starting
          as a simple HTML app, it has evolved into a polished, cross-platform
          experience built with React Native. Enjoy improved functionality and a
          smooth user interface in the latest version 3.0!
        </Text>
      </View>

      {/* Previous Versions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🕹️ Previous Versions</Text>
        <Text style={styles.sectionText}>
          Experience the earlier versions of the Random Dice Roller:
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://random-dice-roller-01.netlify.app/")
          }
        >
          <Text style={styles.link}>🔗 Version 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://zippy-fairy-390ae3.netlify.app/")
          }
        >
          <Text style={styles.link}>🔗 Version 2</Text>
        </TouchableOpacity>
      </View>

      {/* Features */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✨ Features in Version 3.0</Text>
        <Text style={styles.sectionText}>
          - 🎲 Easy-to-use, random dice rolling functionality{"\n"}- 🎨
          Customizable dice options and visuals{"\n"}- 📱 Built with React
          Native and Expo Router for seamless cross-platform compatibility{"\n"}
          - ⚡ Enhanced performance and accessibility
        </Text>
      </View>

      {/* About Me Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 About the Developer</Text>
        <Text style={styles.sectionText}>
          Hi! I'm Mohit Soni, a passionate developer dedicated to building
          engaging and useful applications. I’m always exploring new
          technologies to improve performance and design. Connect with me and
          explore more of my work!
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://mohit-soni.netlify.app/")}
        >
          <Text style={styles.link}>🌐 Visit my Portfolio</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} Mohit Soni. All rights reserved. 🚀
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 16,
  },
  header: {
    backgroundColor: "#4f46e5",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  headerText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: "#4b5563",
    marginTop: 8,
    lineHeight: 22,
  },
  link: {
    color: "#4f46e5",
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    marginTop: 16,
    alignItems: "center",
    marginBottom: 50,
  },
  footerText: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
});

export default About;
