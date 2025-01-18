import { View, Text, TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../constants/styles";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  placeholder,
}) {
  const [fontsLoaded] = useFonts({
    Oddval: require("../../assets/fonts/oddval.semibold.ttf"),
    NTSomicSemibold: require("../../assets/fonts/NTSomic-Semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        textAlignVertical="center"
        placeholder={placeholder}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: Colors.white,
    marginBottom: 6,
    fontWeight: "bold",
    fontFamily: "Oddval",
    fontSize: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 30,
    fontSize: 15,
    fontFamily: "NTSomicSemibold",
    color: Colors.lightGray,
  },
});
