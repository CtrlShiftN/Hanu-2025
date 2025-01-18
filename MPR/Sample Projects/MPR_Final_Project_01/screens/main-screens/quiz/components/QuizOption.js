import React from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";
import ItalicText from "../../../../components/ui/ItalicText";
import lockedImage from "../../../../assets/quiz/locked.png";
import doneIcon from "../../../../assets/quiz/done.png";
import { useNavigation } from "@react-navigation/native";
import { eng, math, physics, tech } from '../../../../constants/quizData';


const QuizOption = ({ imageSource, title, educationLevel, subjectName, subjectData, isLocked, isDone }) => {
  const navigation = useNavigation()

  function doQuiz() {
    navigation.navigate("QuizScreen", { educationLevel: educationLevel, subjectName: subjectName , subjectData: subjectData })
  }

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Pressable
          onPress={doQuiz}
          disabled={isLocked || isDone}
          style={styles.pressable}
        >
          <Image source={imageSource} style={styles.image} />
          {isLocked && (
            <View style={styles.lockOverlay}>
              <Image source={lockedImage} style={styles.lockIcon} />
            </View>
          )}
          {!isLocked && isDone && (
            <View style={styles.doneOverlay}>
              <Image source={doneIcon} style={styles.done} />
            </View>
          )}
        </Pressable>
      </View>
      <ItalicText text={title} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "auto",
  },
  icon: {
    height: 160,
    width: 160,
    margin: 10,
    backgroundColor: "#EBDD65",
    borderRadius: 28,
    position: "relative", // Ensure this container can use absolute positioning for its children
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // Make sure pressable fills the container for proper positioning
    height: "100%", // This also ensures the image and overlays cover the whole pressable area
  },
  image: {
    width: "60%",
    height: "60%",
    marginBottom: 8,
  },
  lockOverlay: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    marginBottom: 8,
    borderRadius: 28,
  },
  lockIcon: {
    width: 50,
    height: 50,
  },
  doneOverlay: {
    width: "100%", height: "100%",
    position: "absolute",
    justifyContent: "center", alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 28,
    // borderWidth: 1, borderColor: "red",
    top: 0, // Position at the top
    right: 0, // Position at the right
    padding: 5, // Padding to keep the icon slightly inside the border
  },
  done: {
    position: "absolute",
    width: 50, // Smaller size as it's just a status indicator
    height: 50,
  },
});

export default QuizOption;
