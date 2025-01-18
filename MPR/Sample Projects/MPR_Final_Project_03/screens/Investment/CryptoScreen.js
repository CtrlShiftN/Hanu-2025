import { StyleSheet, View, Text } from "react-native";
import { crypto } from "./../../data/investment/crypto";
import { randomIncrease } from "../../util/randomIncrease";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { Colors } from "../../constants/styles";
import { useFonts } from "expo-font";

import InvestmentItem from "../../components/ui/items/InvestmentItem";
import Title from "../../components/ui/Title";

function CryptoScreen() {
  const [increases, setIncreases] = useState({});
  const authCtx = useContext(AuthContext);
  const wallet = authCtx.userData?.wallet;

  const age = authCtx.userData?.age;
  const [isOldEnough, setIsOldEnough] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      const random = randomIncrease(crypto);
      setIncreases(random);
    }, 15000); 
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const requirementsSatisfied = age >= 21;
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
      <Title>Crypto</Title>
      {isOldEnough ? (
        crypto.map((item, index) => {
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
        <Text style={styles.require}>You must be older than 21 years old!</Text>
      )}
    </View>
  );
}

export default CryptoScreen;

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
