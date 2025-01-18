import { StyleSheet, View, Text, Alert } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../store/auth-context";
import { getRandomAccidents } from "../../../util/getRandomAccidents";
import { formatNumber } from "./../../../util/formatNumber";
import { setItemTime } from "../../../util/setItemTime";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import IndexText from "../IndexText";
import ButtonItem from "../buttons/ButtonItem";
import { formatTime } from "../../../util/formatTime";

function Item({ name, requirements, time, health, iq, happiness, money, btn }) {
  const authCtx = useContext(AuthContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const userHealth = authCtx.userData?.health;
  const isSufficient = authCtx.userData?.money >= money;
  const items = authCtx.userData?.items;
  const learnedLanguages = authCtx.userData?.learned.learnedLanguages;
  const [isDiscount, setIsDiscount] = useState(false);

  const checkRequirements = () => {
    return requirements.every((requirement) => {
      if (requirement.startsWith("At least")) {
        const age = parseInt(requirement.match(/\d+/)[0]);
        return authCtx.userData?.age >= age;
      }

      if (requirement.startsWith("Have")) {
        const wordAfterHave = requirement.split(" ").slice(1).join(" ");
        return items.includes(wordAfterHave);
      }

      if (requirement.startsWith("Learned")) {
        const wordAfterLearned = requirement.split(" ").slice(1).join(" ");
        return learnedLanguages.includes(wordAfterLearned);
      }

      if (requirement.startsWith("Discount")) {
        setIsDiscount(items.includes("Car"));
        money = money * 0.5;
        return true;
      }

      if (requirement === "") {
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    const requirementsSatisfied = checkRequirements();
    setCanPlay(requirementsSatisfied);
  }, [authCtx.userData]);

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const onPressHandler = () => {
    if (name === "Buy lotery tickets") {
      authCtx.updateMoney({ value: -25 });
      if (getRandomAccidents(1, 500) === 68) {
        Alert.alert("Congratulations!", "You won the lottery", [
          {
            text: "OK",
            onPress: () => {
              authCtx.updateIndex({
                money: 50000,
                happiness: 30,
              });
            },
          },
        ]);
      }
    }

    const updates = {};
    if (money) {
      const value = money === "Free" ? 0 : -money;
      updates.money = value;
    }
    if (health) {
      const { isIncrease, index } = health;
      const value = isIncrease ? parseInt(index) : -parseInt(index);
      if (isIncrease || userHealth > 20) {
        updates.health = value;
      } else {
        Alert.alert(
          "Warning",
          "Your health is low, you need to get treatments!",
          [
            {
              text: "OK",
              onPress: () => {
                return;
              },
            },
          ]
        );
        return;
      }
    }

    if (iq) {
      const { isIncrease, index } = iq;
      const value = isIncrease ? parseInt(index) : -parseInt(index);
      updates.iq = value;
    }

    if (happiness) {
      const { isIncrease, index } = happiness;
      const value = isIncrease ? parseInt(index) : -parseInt(index);
      updates.happiness = value;
    }
    if (name !== "Buy lotery tickets") {
      setItemTime(name, time, money, updates, authCtx, setIsProcessing);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        {!isProcessing && (money === "Free" || isSufficient) && canPlay && (
          <ButtonItem children={btn} onPress={onPressHandler} />
        )}
        {isProcessing && <Text style={styles.require}>Processing</Text>}
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.requireContainer}>
          {requirements &&
            requirements.map((requirement, index) => (
              <Text key={index} style={styles.require}>
                {requirement}
              </Text>
            ))}
        </View>
        <View style={styles.timeContainer}>
          {time && <Ionicons name="time-outline" size={20} />}
          <Text style={styles.time}>{formatTime(time)}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.indexContainer}>
          {health && (
            <>
              <IndexText isIncrease={health.isIncrease}>
                {health.index}
              </IndexText>
              <Ionicons name="heart" color={Colors.redHealth} size={20} />
            </>
          )}
          {iq && (
            <>
              <IndexText isIncrease={iq.isIncrease}>{iq.index}</IndexText>
              <FontAwesome6 name="brain" color={Colors.blueIQ} size={20} />
            </>
          )}
          {happiness && (
            <>
              <IndexText isIncrease={happiness.isIncrease}>
                {happiness.index}
              </IndexText>
              <Ionicons name="happy" color={Colors.yellowHappiness} size={20} />
            </>
          )}
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.moneyTitle}>Price: </Text>
          <Text style={styles.money}>
            {money === "Free"
              ? "Free"
              : isDiscount
              ? `$${formatNumber(money * 0.5)}`
              : `$${formatNumber(money)}`}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    maxHeight: 250,
    marginTop: 10,
    gap: 10,
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "NTSomicMedium",
    fontSize: 20,
    flex: 1,
    color: Colors.black,
  },

  applyButton: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  apply: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
    color: Colors.darkBlue,
  },

  requireContainer: {
    flex: 1,
  },
  require: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.gray,
  },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  time: {
    marginLeft: 5,
    fontFamily: "UnboundedMedium",
  },

  indexContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    flex: 1,
  },

  priceContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  moneyTitle: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.gray,
  },

  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 17,
  },

  pressed: {
    opacity: 0.7,
  },
});
