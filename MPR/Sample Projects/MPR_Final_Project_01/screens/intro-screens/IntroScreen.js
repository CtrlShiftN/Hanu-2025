import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Colors } from "../../constants/styles";
import { CharacterContext } from "../../store/character-context";
import TextButton from "../../components/ui/TextButton";

const IntroScreen = ({ navigation }) => {
  const characterCtx = useContext(CharacterContext);

  const intro1 = {
    imageURL: require("../../assets/characterGrowth.png"),
    description: `Welcome to "I am developer" - a game simulating the fascinating journey from childhood to old age of a child. Developed by a talented and creative team, this game is a unique adventure where you will experience every aspect of life.
        `,
  };
  const intro2 = {
    imageURL: require("../../assets/characterGrowth.png"),
    description: `Start your journey from when you were just a 1-year-old child, when the world was still something entirely new and waiting for you to explore. From the first steps in development and learning, you will face important decisions about education, work, and life.`,
  };
  const intro3 = {
    imageURL: require("../../assets/characterGrowth.png"),
    description: `In "I am developer", you will have to complete diverse tasks, from learning and skill-building to working and building a career. Work diligently to achieve your goals and become a successful developer.`,
  };
  const intro4 = {
    imageURL: require("../../assets/characterGrowth.png"),
    description: `Join this adventure and explore every aspect of life, from daily joys to big challenges and deep emotions. Start today and create a memorable journey from childhood to old age!`,
  };

  const [content, setContent] = useState(intro1);

  function switchIntro() {
    if (content.description == intro1.description) {
      setContent(intro2);
    } else if (content.description == intro2.description) {
      setContent(intro3);
    } else if (content.description == intro3.description) {
      setContent(intro4);
    } else if (content.description == intro4.description) {
      navigation.navigate("MainScreen")
    }
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/introBackground.png")}
    >
      <View style={styles.content}>
        <Text style={styles.description}>{content.description}</Text>
      </View>

      <TextButton
        title={"Next"}
        onPress={switchIntro}
        buttonColor={"#9FEB4D"}
        borderColor={"#71A934"}
        positionStyle={{ position: "absolute", bottom: 10, right: 10 }}
      />
    </ImageBackground>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "absolute",
    bottom: 0,
    height: "40%",
    alignItems: "center",
    width: "100%",
  },
  description: {
    color: "white",
    width: "80%",
    textAlign: "justify",
  },
});
