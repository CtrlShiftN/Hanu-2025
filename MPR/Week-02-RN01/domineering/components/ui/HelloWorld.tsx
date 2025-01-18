import { View, Text, StyleSheet } from "react-native";

export default function HelloWorld() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
  text: {
    fontSize: 28,
    lineHeight: 32,
    color:"red",
    fontWeight: "bold",
  },
});