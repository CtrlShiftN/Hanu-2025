import { StyleSheet, View, Text } from "react-native";
import { stocks } from "./../../data/investment/stocks";
import { randomIncrease } from "../../util/randomIncrease";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { Colors } from "../../constants/styles";
import { useFonts } from "expo-font";

import InvestmentItem from "../../components/ui/items/InvestmentItem";
import Title from "../../components/ui/Title";

function StocksInforScreen() {
  const [increases, setIncreases] = useState({});
  const authCtx = useContext(AuthContext);
  const wallet = authCtx.userData?.wallet;

  const age = authCtx.userData?.age;
  const [isOldEnough, setIsOldEnough] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const random = randomIncrease(stocks);
      setIncreases(random);
    }, 15000); // 1 mins
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const requirementsSatisfied = age >= 18;
    setIsOldEnough(requirementsSatisfied);
  }, [authCtx.userData]);

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Stocks</Title>
      {isOldEnough ? (
        stocks.map((item, index) => {
          const isInWallet = wallet.some(
            (walletItem) => walletItem.code === item.code
          );
          return (
            <InvestmentItem
              key={index}
              name={item.name}
              code={item.code}
              money={item.money}
              interest={item.interest}
              isIncrease={increases[item.code] || false}
              isBought={isInWallet}
            />
          );
        })
      ) : (
        <Text style={styles.require}>You must be older than 18 years old!</Text>
      )}
    </View>
  );
}

export default StocksInforScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
  require: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.white,
    textAlign: "center",
    marginTop: 20,
  },
});
