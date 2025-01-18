import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";
import { items } from "../../../data/items/items";
import ButtonItem from "../buttons/ButtonItem";
import { formatNumber } from "../../../util/formatNumber";

function StorageItem({ name }) {
  const { updateMoney } = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const selectedItem = items.find((item) => item.name === name);
  const sellPrice = selectedItem.money / 2;
  const sellItemHandler = () => {
    updateMoney({
      value: sellPrice,
      item: name,
      action: "sell",
    });
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.money}>${formatNumber(sellPrice)}</Text>
      </View>
      <View style={styles.innerContainer}>
        <ButtonItem children={"Sell"} onPress={sellItemHandler} />
      </View>
    </View>
  );
}

export default StorageItem;

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
    justifyContent: "flex-end",
    alignItems: "center",
  },

  title: {
    fontFamily: "NTSomicMedium",
    fontSize: 20,
    flex: 1,
    color: Colors.black,
  },

  money: {
    fontFamily: "UnboundedSemibold",
    fontSize: 18,
  },
});
