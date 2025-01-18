import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { AuthContext } from "../../../store/auth-context";
import { useContext, useEffect, useState } from "react";
import { formatNumber } from "./../../../util/formatNumber";

import ButtonItem from "../buttons/ButtonItem";

function EquipmentItem({ name, money, requirements, btn }) {
  const authCtx = useContext(AuthContext);
  const isSufficient = authCtx.userData?.money >= money;
  const [canBuy, setCanBuy] = useState(false);

  const checkRequirements = () => {
    return requirements.every((requirement) => {
      if (requirement.startsWith("At least")) {
        const age = parseInt(requirement.match(/\d+/)[0]);
        return authCtx.userData?.age >= age;
      }
    });
  };

  useEffect(() => {
    const requirementsSatisfied = checkRequirements();
    setCanBuy(requirementsSatisfied);
  }, [authCtx.userData]);

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const buyHandler = () => {
    const value = -money;
    authCtx.updateMoney({ value: value, item: name, action: "buy" });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.money}>${formatNumber(money)}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.require}>{requirements}</Text>
        {isSufficient && canBuy && (
          <ButtonItem children={btn} onPress={buyHandler} />
        )}
      </View>
    </View>
  );
}

export default EquipmentItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
    maxHeight: 200,
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

  require: {
    fontFamily: "NTSomicMedium",
    fontSize: 13,
    color: Colors.gray,
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

  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.7,
  },
});
