import { StyleSheet, View } from "react-native";
import Header from "../../components/ui/Header";

function ScreenLayout({ children }) {
  return (
    <View style={styles.container}>
      <Header />
      {children}
    </View>
  );
}

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
