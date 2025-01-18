import React from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { loadFonts } from "../../constants/fonts";

const ItalicText = ({ text, size }) => {
  const [fontsLoaded] = loadFonts();
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return <Text style={[styles.italicText, { fontSize: size }]}>{text}</Text>;
};

const styles = StyleSheet.create({
  italicText: {
    fontStyle: "italic",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter_800ExtraBold",
    fontWeight: 800,
  },
});

export default ItalicText;
