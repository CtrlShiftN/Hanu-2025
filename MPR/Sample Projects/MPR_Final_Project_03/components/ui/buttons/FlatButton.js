import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { Colors } from '../../../constants/styles';

function FlatButton({ children, onPress }) {
  const [fontsLoaded] = useFonts({
    NTSomicSemibold: require("../../../assets/fonts/NTSomic-Semibold.ttf"),
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

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    borderRadius: 30,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: "NTSomicSemibold",
    fontSize: 16
  },
});
