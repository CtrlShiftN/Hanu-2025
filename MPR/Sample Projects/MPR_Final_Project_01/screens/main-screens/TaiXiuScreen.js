import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import di1 from "../../assets/games/taixiu/dices/1.png";
import di2 from "../../assets/games/taixiu/dices/2.png";
import di3 from "../../assets/games/taixiu/dices/3.png";
import di4 from "../../assets/games/taixiu/dices/4.png";
import di5 from "../../assets/games/taixiu/dices/5.png";
import di6 from "../../assets/games/taixiu/dices/6.png";
import BackButton from "../../assets/games/taixiu/icon/backbutton.png";
import timerIcon from "../../assets/games/taixiu/icon/timer.png";
import cloudImage from "../../assets/games/taixiu/components/cloudUnder.png";
import betBox from "../../assets/games/taixiu/components/betBox.png";
import moneyBox from "../../assets/games/taixiu/components/moneyBox.png";
import coinIcon from "../../assets/games/taixiu/icon/Coin.png";
import { CharacterContext } from "../../store/character-context";
import ExitButton from "../../components/main/ExitButton";
import GameResultAlert from "../../components/main/GameResultAlert";

const diceIcons = [di1, di2, di3, di4, di5, di6];

const TaiXiuScreen = ({ navigation }) => {
  const characterCtx = useContext(CharacterContext);
  const [betTai, setBetTai] = useState(0);
  const [betXiu, setBetXiu] = useState(0);
  const [countdown, setCountdown] = useState(15);
  const [result, setResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [dices, setDices] = useState({ d1: 0, d2: 0, d3: 0 });
  const [isResultAlertShow, setIsResultAlertShow] = useState(false)
  const [resultMessage, setResultMessage] = useState("")
  const [resultAmount, setResultAmount] = useState(0)

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const d3 = Math.floor(Math.random() * 6) + 1;
      const sum = d1 + d2 + d3;
      const gameResult = sum > 9 ? "Tai" : "Xiu";

      setDices({ d1, d2, d3 });
      setResult(gameResult);
      setGameOver(true);
      setTimeout(() => {
        if (gameOver) {
          const winAmount = gameResult === "Tai" ? betTai * 1 : betXiu * 1;
          const lossAmount = gameResult === "Tai" ? betXiu : betTai;
          if (winAmount >= lossAmount) {
            setResultMessage("Win")
            setResultAmount((winAmount - lossAmount) * 2)
            characterCtx.addIncome(winAmount - lossAmount, "Win Tai Xiu")
          } else {
            setResultMessage("Lose")
            setResultAmount((winAmount - lossAmount))
            characterCtx.minusIncome(lossAmount - winAmount, "Lose Tai Xiu")
          }
          setIsResultAlertShow(true)
        }
        setTimeout(() => {
          setIsResultAlertShow(false)
          setResultAmount(0)
          setCountdown(15);
          setBetTai(0);
          setBetXiu(0);
          setResult(null);
          setDices({ d1: 0, d2: 0, d3: 0 });
          setGameOver(false);
        }, 3000);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [countdown, gameOver]);

  const handleBetChange = (bet, type) => {
    const amount = parseFloat(bet) || 0;
    if (amount <= characterCtx.income && countdown > 5) {
      if (type === "Tai") {
        setBetTai(amount);
      } else if (type === "Xiu") {
        setBetXiu(amount);
      }
    }
  };

  const onLeave = () => {
    if (betTai > 0 || betXiu > 0) {
      alert("You have to finish the game before leaving...");
      return;
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <ExitButton onPress={onLeave} />
      <View>
        <Timer countdown={countdown} gameOver={gameOver} result={result} />
        <View style={styles.dicesContainer}>
          {result && (
            <View style={styles.dices}>
              <View style={styles.d1}>
                <DiceImage src={diceIcons[dices.d1 - 1]} />
              </View>
              <View style={styles.d2nd3}>
                <DiceImage src={diceIcons[dices.d2 - 1]} />
                <DiceImage src={diceIcons[dices.d3 - 1]} />
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tai</Text>
          <View style={styles.betBox}>
            <Image source={betBox} style={styles.betBoxBackground} />
            <TextInput
              style={styles.input}
              value={betTai.toString()}
              placeholder="Bet on Tai"
              keyboardType="numeric"
              onChangeText={(text) => handleBetChange(text, "Tai")}
              editable={!gameOver && countdown > 0}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Xiu</Text>
          <View style={styles.betBox}>
            <Image source={betBox} style={styles.betBoxBackground} />
            <TextInput
              style={styles.input}
              value={betXiu.toString()}
              placeholder="Bet on Xiu"
              keyboardType="numeric"
              onChangeText={(text) => handleBetChange(text, "Xiu")}
              editable={!gameOver && countdown > 0}
            />
          </View>
        </View>
      </View>
      <Image source={cloudImage} style={styles.cloudImage} resizeMode="cover" />
      <View style={styles.moneyContainer}>
        <Image source={moneyBox} style={styles.moneyContainerBackgroundImage} />
        <View style={styles.moneyContainerInfo}>
          <Image source={coinIcon} style={styles.moneyContainerIcon} />
          <Text style={styles.moneyContainerText}>
            {"    "}
            {characterCtx.income.toFixed(2)}
          </Text>
        </View>
      </View>
      
      {
        isResultAlertShow && 
        <GameResultAlert gameName={"Tai Xiu"} resultTitle={resultMessage} rewardMoney={resultAmount}/>
      }
        
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: "5%",
    width: "100%",
  },
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center", 
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#fcf4bc",
    position: "relative",
  },
  dicesContainer: {
    flexDirection: "row",
    height: 300,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 300,
    backgroundColor: "black",
    justifyContent: "space-around",
    alignItems: "center",
  },
  d1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  d2nd3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  diceImage: {
    width: 100,
    height: 100,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  label: {
    textAlign: "center",
    fontSize: 24,
    zIndex: 2,
    color: "blue",
    fontWeight: "bold",
  },
  betBox: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "black",
  },
  input: {
    position: "absolute",
    padding: 10,
    margin: 10,
    width: "100%",
    zIndex: 1,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 18,
    color: "white",
    // borderColor: "red",
    // borderWidth: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "50%",
    zIndex: 0,
    // borderWidth: 1,
    // borderColor: 'black',
    marginBottom: -20,
    position: "relative",
  },
  inputBackgroundImage: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "60%",
    zIndex: 1,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: -20,
  },
  moneyContainerBackgroundImage: {
    position: "absolute",
    zIndex: 1,
  },
  moneyContainerInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1,
  },
  moneyContainerIcon: {
    width: 30,
    height: 30,
    zIndex: 1,
  },
  moneyContainerText: {
    fontSize: 20,
    zIndex: 1,
    color: "white",
  },
  cloudImage: {
    width: "100%",
    height: "40%",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    zIndex: -1,
  },
});

export default TaiXiuScreen;

const DiceImage = ({ src }) => {
  return <Image style={styles.diceImage} source={src} />;
};

const Timer = ({ countdown, gameOver, result }) => {
  const timerStyle = StyleSheet.create({
    timerWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    timerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: result === "Xiu" ? "red" : "green",
    },
    timerNumber: {
      color: countdown < 6 ? "red" : "green",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const TimerWithIcon = ({ countdown }) => {
    return (
      <View style={timerStyle.timerContainer}>
        <Text style={timerStyle.timerNumber}>{countdown}s</Text>
        <Image source={timerIcon} />
      </View>
    );
  };

  return (
    <View style={timerStyle.timerWrapper}>
      {gameOver ? (
        <Text style={timerStyle.text} children={result} />
      ) : (
        <TimerWithIcon countdown={countdown} />
      )}
    </View>
  );
};
