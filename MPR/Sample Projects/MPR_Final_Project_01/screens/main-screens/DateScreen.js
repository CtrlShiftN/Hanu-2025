import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExitButton from "../../components/main/ExitButton";
import Prompt from "../../components/main/Prompt";
import DarkOverlay from "../../components/ui/DarkOverlay";
import { CharacterContext } from "../../store/character-context";

const DateScreen = ({ navigation }) => {
  const characterCtx = useContext(CharacterContext)
  const [isCoinButtonClickedFirstTime, setIsCoinButtonClickedFirstTime] =
    useState(false);
  const [lovePointBarStyle, setChanceBarStyle] = useState({ height: characterCtx.dateInfo.lovePoint });
  const [isIncreaseChanceLevelPromptVisible,setIsIncreaseChanceLevelPromptVisible,] = useState(false);
  const [isConfessPromptVisible, setIsConfessPromptVisible] = useState(false);
  const [isSuccessConfessVisible, setIsSuccessConfessVisible] = useState(false);
  const [isFailConfessVisible, setIsFailConfessVisible] = useState(false);

  function increaseChanceLevel() {
    if (characterCtx.dateInfo.lovePoint < 300) {
      if (characterCtx.income < 500) {
        alert("Not enough 50 coins")
      } else {
        characterCtx.minusIncome(50, "Pay for crush's love")
        characterCtx.setDateInfo((prevValue) => {
          return (
                {...prevValue, lovePoint: prevValue.lovePoint += 6}
          )
        })
      }
    }
    setIsIncreaseChanceLevelPromptVisible(false);
  }

  useEffect(() => {
    setChanceBarStyle({
      height: characterCtx.dateInfo.lovePoint,
    });
  }, [characterCtx.dateInfo.lovePoint]);

  function handleCoinButtonClicked() {
    if (!isCoinButtonClickedFirstTime) {
      setIsCoinButtonClickedFirstTime(true);
      setIsIncreaseChanceLevelPromptVisible(true);
    } else {
      setIsIncreaseChanceLevelPromptVisible(false);
      increaseChanceLevel();
    }
  }

  function closePrompt() {
    setIsIncreaseChanceLevelPromptVisible(false);
    setIsConfessPromptVisible(false);
    setIsSuccessConfessVisible(false);
    setIsFailConfessVisible(false);
  }

  function handleHeartButtonClicked() {
    setIsConfessPromptVisible(true);
  }

  function handleConfession() {
    if (Math.random() <= characterCtx.dateInfo.lovePoint / 300 ? true : false) {
      setIsSuccessConfessVisible(true);
      characterCtx.setDateInfo((prevValue) => {
        return (
              {...prevValue, isLoveAccepted: true}
        )
      })
      characterCtx.setHappinessPoint(100)
    } else {
      characterCtx.setDateInfo((prevValue) => {
        return (
              {...prevValue, lovePoint: 0}
        )
      })
      setIsFailConfessVisible(true);
    }
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/dateBackground.png")}
      resizeMode="cover"
    >
      <ExitButton
        onPress={() => {
          navigation.goBack();
        }}
      />
      {
        !characterCtx.dateInfo.isLoveAccepted && 
        <View style={styles.lovePointBarWrapper}>
          <View style={[styles.lovePointBar, lovePointBarStyle]}></View>
        </View>
      }
      <View style={styles.info}>
        <Text style={styles.name}>
          Jessica 20
          {
            characterCtx.dateInfo.isLoveAccepted &&  
            <Text style={{fontSize: 30, fontWeight: "normal"}}> - Your girl friend</Text>
          }
        </Text>
        <Text style={styles.description}>
          This is the girl I've liked since elementary school. Every time I see
          them, my heart beats faster than usual. Their delicate eyes and cute
          smiles always confuse me. Every morning, I excitedly go to school just
          to be able to see that face in the classroom.
        </Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../assets/addressIcon.png")}
          />
          <Text style={styles.text}>Phung Khoang, Hanoi, Vietnam</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../assets/bagIcon.png")}
          />
          <Text style={styles.text}>Hanu University</Text>
        </View>
        <View style={styles.bottomButtonGroup}>
          {
            !characterCtx.dateInfo.isLoveAccepted && 
            <Pressable style={styles.button} onPress={handleCoinButtonClicked}>
              <Image
                style={styles.buttonImage}
                source={require("../../assets/money.png")}
              />
            </Pressable>
          }
          <Pressable style={styles.button} onPress={handleHeartButtonClicked}>
            <Image
              style={styles.buttonImage}
              source={require("../../assets/hollowHeart.png")}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
      {isIncreaseChanceLevelPromptVisible && (
        <>
          <DarkOverlay />
          <Prompt
            message={
              "Would you like to pay 50 coin to receive 2% chance of your crush's love?"
            }
            buttonNoFunction={closePrompt}
            buttonYesFunction={increaseChanceLevel}
          />
        </>
      )}
      {isConfessPromptVisible && (
        <>
          <DarkOverlay />
          <Prompt
            message={
              "Are you sure you want to confess your love to your crush?"
            }
            buttonNoFunction={closePrompt}
            buttonYesFunction={handleConfession}
          />
        </>
      )}
      {isSuccessConfessVisible && (
        <>
          <DarkOverlay />
          <Prompt
            message={
              "Congratulations on successfully confessing your love to your crush, now you and Jessica are a couple!!!!!"
            }
            buttonYesFunction={closePrompt}
            isNoButtonVisible={false}
          />
        </>
      )}
      {isFailConfessVisible && (
        <>
          <DarkOverlay />
          <Prompt
            message={
              "You failed to confess your love to your crush, Your crush has lost all feelings for you!!!!"
            }
            buttonYesFunction={closePrompt}
            isNoButtonVisible={false}
          />
        </>
      )}
    </ImageBackground>
  );
};

export default DateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  lovePointBarWrapper: {
    position: "absolute",
    right: 24,
    top: 60,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    width: 33,
    height: 300,
  },
  lovePointBar: {
    position: "absolute",
    bottom: 0,
    borderRadius: 20,
    backgroundColor: "#F62060",
    width: 33,
    height: 0,
  },
  name: {
    marginTop: 15,
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  info: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    width: "100%",
    paddingHorizontal: 30,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  description: {
    color: "white",
    marginTop: 20,
  },
  text: {
    color: "white",
  },
  image: {
    width: 30,
    height: 30,
  },
  imageWrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomButtonGroup: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#D9D9D9",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    width: 40,
    height: 40,
  },
});
