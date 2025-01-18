import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/styles';
import { useFonts } from "expo-font";

function LoadingOverlay({ message }) {
  const [fontsLoaded] = useFonts({
    UnboundedSemibold: require("../../assets/fonts/Unbounded-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: Colors.background
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
    color: Colors.white,
    fontFamily: "UnboundedSemibold"
  },
});
