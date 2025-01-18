import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function HowToPlayScreen() {
  const [fontsLoaded] = useFonts({
    Oddval: require("../../assets/fonts/oddval.semibold.ttf"),
    NTSomicBold: require("../../assets/fonts/NTSomic-Bold.ttf"),
    NTSomic: require("../../assets/fonts/NTSomic-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>I AM A DEVELOPER</Text>
      <ScrollView>
        <Text style={styles.text}>
          <Text style={styles.indexText}>“I am a developer”</Text> is an
          interactive entertainment app designed to simulate the journey of
          becoming a successful developer. Players progress through life stages,
          with each in-game year equal to 12 real-life minutes.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          As the main character, players go through educational levels like
          primary, secondary, high school, and university, making decisions
          about finances, health, and relationships. At 18, they receive $10,000
          from parents, facing crucial choices about education, employment.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          In the game, random situations or unexpected accidents will appear
          that will be detrimental to players. Therefore, always make sure that
          the attributes are always balanced at a level that is not too low.
          Especially health, if your health drops to 0, the game is over.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          Your character will have the following attributes:
        </Text>
        <Text style={styles.text}>
          <Ionicons name="heart" color={Colors.redHealth} size={15} />{" "}
          <Text style={styles.indexText}>Heart</Text> - Measures your physical
          health. This is affected by your diet, age and activities. Your health
          will decline as you age, no ones lives forever
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <Ionicons name="happy" color={Colors.yellowHappiness} size={15} />{" "}
          <Text style={styles.indexText}>Happiness</Text> - Measures your
          happiness, reduced by events and over working. You will commit suicide
          if your happiness is zero for too long. Let's take part in outside
          activities and interact with friends to increase happiness.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <FontAwesome6 name="brain" color={Colors.blueIQ} size={15} />{" "}
          <Text style={styles.indexText}>IQ</Text> - Measure your intelligence
          level. If you have a high level of intelligence you can study or do
          the jobs you want. Intelligence levels can decrease as you get older
          or work in unsuitable jobs.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <Ionicons name="cash" color={Colors.lightGreen} size={15} />{" "}
          <Text style={styles.indexText}>Money</Text> - Shows how much money you
          own. Only money you own can be directly used for actions.
        </Text>
        <Text></Text>
        <Text style={styles.text}>
          <MaterialIcons name="savings" color={"pink"} size={17} />{" "}
          <Text style={styles.indexText}>Saving Money</Text> - Shows how much
          money is in your bank. While the money in your bank cannot be directly
          used, it will generate interest.
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  header: {
    fontFamily: "Oddval",
    color: "white",
    fontSize: 35,
  },
  text: {
    fontFamily: "NTSomic",
    color: Colors.lightGray,
    fontSize: 15,
  },

  indexText: {
    fontFamily: "NTSomicBold",
    fontSize: 17,
    color: "white",
  },
});

export default HowToPlayScreen;
