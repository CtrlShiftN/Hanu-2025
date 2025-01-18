import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";

function ButtonItem({ children, onPress }) {
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default ButtonItem;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blueIQ,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontFamily: "NTSomicMedium",
    fontSize: 16,
    color: Colors.darkBlue,
  },
});
