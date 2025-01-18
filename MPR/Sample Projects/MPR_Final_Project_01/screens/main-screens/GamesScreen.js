import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import ExitButton from "../../components/main/ExitButton";
import ItalicText from "../../components/ui/ItalicText";
import { CharacterContext } from "../../store/character-context";

const GamesScreen = ({ navigation }) => {
  const characterCtx = useContext(CharacterContext)

  function playRockPaperScissorGame() {
    navigation.navigate("RockPaperScissorScreen");
  }

  function playTaiXiuGame() {
    navigation.navigate("TaiXiuScreen");
  }

  function exit() {
    navigation.goBack();
  }

  return (
    <ImageBackground
      source={require("../../assets/backgroundGameQuiz.png")}
      style={styles.container}
    >
      <ExitButton onPress={exit} />

      <View style={styles.header}>
        <ItalicText text="Games" size={40} />
      </View>
      <View style={styles.gameGroup}>
        <Pressable style={styles.game} onPress={playRockPaperScissorGame}>
          <ImageBackground
            style={styles.backgroundGameItemImage}
            source={require("../../assets/backgroundGameItem.png")}
          >
            <Image
              style={styles.gameImage}
              source={require("../../assets/ScissorRockPaper.png")}
            />
          </ImageBackground>
          <View style={styles.gameNameWrapper}>
            <Text style={styles.gameName}>Rock Paper Scissors</Text>
          </View>
        </Pressable>
        <Pressable style={styles.game} onPress={playTaiXiuGame} 
          disabled={characterCtx.age >= 18 ? false : true}
        >
          <ImageBackground
            style={styles.backgroundGameItemImage}
            source={require("../../assets/backgroundGameItem.png")}
          >
            <Image
              style={styles.gameImage}
              source={require("../../assets/TaiXiu.png")}
            />
          </ImageBackground>
          <View style={styles.gameNameWrapper}>
            <Text style={styles.gameName}>Tai Xiu</Text>
          </View>
          {
            characterCtx.age < 18 && 
            <View style={styles.lockedDarkOverlay}></View>
          }
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default GamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    width: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },

  // ---------------- Game --------------
  gameGroup: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly", alignItems: "center",
  },
  game: {
    height: 200,
    alignItems: "center",
  },
  backgroundGameItemImage: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  gameImage: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  gameNameWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameName: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    fontStyle: "italic",
  },
  lockedDarkOverlay: {
    position: "absolute", 
    top: 0, 
    width: "100%", height: 160, 
    borderRadius: 30, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});
