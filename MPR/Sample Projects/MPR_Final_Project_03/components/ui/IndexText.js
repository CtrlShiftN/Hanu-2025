import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

function IndexText({ isIncrease, children }) {
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text style={[styles.text, isIncrease ? styles.green : styles.red]}>
      {isIncrease ? `+${children}` : `-${children}`}
    </Text>
  );
}

export default IndexText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "NTSomicMedium",
    fontSize: 18,
    marginHorizontal: 5
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
});
