import { StyleSheet, View, Text } from "react-native";
import { treatment } from "../../data/health/treatment";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import { useFonts } from "expo-font";

import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";
import { Colors } from "../../constants/styles";

function HealthListScreen() {
  const authCtx = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
    NTSomicSemibold: require("../../assets/fonts/NTSomic-Semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const age = authCtx.userData?.age;
  const health = authCtx.userData?.health;
  return (
    <View style={styles.rootContainer}>
      <Title>Health</Title>
      <View style={styles.healthInfoContainer}>
        <Text style={styles.title}>
          Age: <Text style={styles.text}>{age}</Text>
        </Text>
        <Text style={styles.title}>
          Health:{" "}
          <Text
            style={[
              styles.text,
              {
                color:
                  health > 50
                    ? Colors.lightGreen
                    : health <= 50 && health > 20
                    ? Colors.yellowHappiness
                    : Colors.redHealth,
              },
            ]}
          >
            {health > 50
              ? "Good"
              : health <= 50 && health > 20
              ? "Not good"
              : "Bad"}
          </Text>
        </Text>
      </View>
      {treatment.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            time={item.time}
            requirements={item.requirements}
            health={item.health}
            iq={item.iq}
            happiness={item.happiness}
            money={item.money}
            btn={"Apply"}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
  healthInfoContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    color: Colors.lightGray,
    fontFamily: "NTSomicMedium",
  },
  text: {
    fontSize: 22,
    color: "white",
    fontFamily: "NTSomicMedium",
  },
});
export default HealthListScreen;
