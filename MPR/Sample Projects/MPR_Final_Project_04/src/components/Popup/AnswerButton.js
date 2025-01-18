import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../CustomText/CustomText";

/**
 * A custom button component for displaying an answer with a unique identifier and text.
 *
 * @component
 * @param {number} id - A unique identifier for the answer.
 * @param {string} title - The action user can take to play the game.
 * @param {function} onPress - A function to update player's state to be called when the button is pressed.
 * @returns {React.ReactElement} The AnswerButton component.
 */
export default function AnswerButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      android_ripple={"#2AAECE"}
      onPress={onPress}
    >
      <CustomText
        style={{
          fontSize: 14,
          textAlign: "center",
        }}
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2ED7E2",
    marginBottom: 12,
    width: 162,
    height: 35,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});
