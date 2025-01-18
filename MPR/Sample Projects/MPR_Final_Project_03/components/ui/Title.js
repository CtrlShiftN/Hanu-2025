import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../constants/styles";

function Title({ children }) {
  const [fontsLoaded] = useFonts({
    Oddval: require("../../assets/fonts/oddval.semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10
  },
  title: {
    fontSize: 25,
    color: Colors.white,
    fontFamily: "Oddval",
    textAlign: "center",
    marginRight: 5
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.white,
  },
});

export default Title;
