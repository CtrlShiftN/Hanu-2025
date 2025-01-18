import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";

function Button({ children, onPress }) {
  const [fontsLoaded] = useFonts({
    Oddval: require("../../../assets/fonts/oddval.semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: Colors.lightGreen,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.black,
    fontSize: 20,
    fontFamily: "Oddval",
  },
});
