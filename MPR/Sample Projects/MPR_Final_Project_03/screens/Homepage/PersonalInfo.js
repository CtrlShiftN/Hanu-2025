import { View, StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { useFonts } from "expo-font";
import { AuthContext } from "../../store/auth-context";
import { Colors } from "../../constants/styles";
import { formatNumber } from "../../util/formatNumber";
function PersonalInfo() {
  const authCtx = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../assets/fonts/NTSomic-Medium.ttf"),
    NTSomicSemibold: require("../../assets/fonts/NTSomic-Semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const userData = authCtx?.userData;
  const netWorth = userData?.money + userData?.savings;
  const lover = userData?.lover[0];
  const relationshipStatus = !lover
    ? "Single"
    : `In a relationship with ${lover}`;
  return (
    <View style={styles.rootContainer}>
      <View style={styles.personalInfoContainer}>
        <Text style={styles.title}>
          Name: <Text style={styles.text}>{userData?.name}</Text>
        </Text>
        <Text style={styles.title}>
          Age: <Text style={styles.text}>{userData?.age}</Text>
        </Text>
        <Text style={styles.title}>
          Gender: <Text style={styles.text}>{userData?.userGender}</Text>
        </Text>
        {userData?.currentWorking.main.length > 0 && (
          <Text style={styles.title}>
            Job:{" "}
            <Text style={styles.text}>{userData?.currentWorking?.main}</Text>
          </Text>
        )}
        {userData?.currentWorking?.side.length > 0 && (
          <Text style={styles.title}>
            Side Job:{" "}
            <Text style={styles.text}>
              {userData.currentWorking.side.join(", ")}
            </Text>
          </Text>
        )}
        <Text style={styles.title}>
          Relationship Status:{" "}
          <Text style={styles.text}>{relationshipStatus}</Text>
        </Text>
        <Text style={styles.title}>
          Net Worth: <Text style={styles.text}>${formatNumber(netWorth)}</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  personalInfoContainer: {
    flex: 1,
    marginLeft: 20,
  },

  innerContainer: {
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color: Colors.lightGray,
    fontFamily: "NTSomicMedium",
  },
  text: {
    fontSize: 18,
    color: "white",
    fontFamily: "NTSomicSemibold",
  },
});

export default PersonalInfo;
