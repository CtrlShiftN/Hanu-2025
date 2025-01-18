import { StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "../../../constants/styles";
import { useFonts } from "expo-font";
import { formatNumber } from "./../../../util/formatNumber";
import { useContext } from "react";
import { AuthContext } from "./../../../store/auth-context";

function InvestmentItem({ name, code, money, interest, isIncrease, isBought }) {
  const authCtx = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const buyHandler = () => {
    const item = {
      name: name,
      code: code,
      money: money,
      interest: interest,
    };
    authCtx.updateMoney({ value: -money, item: item, action: "buyStocks" });
  };

  const interestMoney = money * interest;
  const sellPrice = money + (isIncrease ? +interestMoney : -interestMoney);

  const sellHandler = () => {
    const item = {
      name: name,
      code: code,
      money: money,
      interest: interest,
    };
    authCtx.updateMoney({ value: sellPrice, item: item, action: "sellStocks" });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.inforContainer}>
        <Text style={styles.code}>{code}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.moneyContainer}>
        {isBought ? (
          <Text style={[styles.money, { color: "red" }]}>
            ${formatNumber(sellPrice)}
          </Text>
        ) : (
          <Text style={styles.money}>${formatNumber(money)}</Text>
        )}
        {interest && (
          <Text
            style={[styles.interest, isIncrease ? styles.green : styles.red]}
          >
            {isIncrease ? `+${interest}%` : `-${interest}%`}
          </Text>
        )}
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={isBought ? sellHandler : buyHandler}
      >
        <Text
          style={[
            styles.buttonText,
            isBought ? { color: "red" } : { color: Colors.darkBlue },
          ]}
        >
          {isBought ? "Sell" : "Buy"}
        </Text>
      </Pressable>
    </View>
  );
}

export default InvestmentItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
  },

  inforContainer: {
    flex: 4,
  },

  moneyContainer: {
    flex: 3,
  },

  code: {
    fontFamily: "NTSomicMedium",
    fontSize: 20,
    color: Colors.black,
  },

  name: {
    fontFamily: "NTSomicMedium",
    fontSize: 12,
    color: Colors.gray,
  },

  money: {
    marginTop: 5,
    fontFamily: "UnboundedSemibold",
    fontSize: 15,
  },

  interest: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    marginHorizontal: 5,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },

  button: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
    color: Colors.darkBlue,
  },
  pressed: {
    opacity: 0.7,
  },
});
