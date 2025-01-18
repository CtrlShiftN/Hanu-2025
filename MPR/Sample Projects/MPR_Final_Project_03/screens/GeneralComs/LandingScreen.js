import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import { useFonts } from "expo-font";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../../store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../components/ui/buttons/Button";
import ButtonItem from "../../components/ui/buttons/ButtonItem";

function LandingScreen({ navigation }) {
  const authCtx = useContext(AuthContext);

  useLayoutEffect(() => {
    async function fetchUserData() {
      try {
        const value = await AsyncStorage.getItem("userData");
        if (value !== null) {
          authCtx.getUserData(JSON.parse(value));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  const name = authCtx.userData?.name;
  const isName = !!name;
  const canBeSkip = authCtx.userData?.age < 18;
  const [fontsLoaded] = useFonts({
    Oddval: require("../../assets/fonts/oddval.semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const newGameHandler = () => {
    navigation.navigate("Setup");
  };

  const continueGameHandler = () => {
    navigation.navigate("MainScreen");
  };
  const skipAgeHandler = () => {
    authCtx.skipAge();
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title1}>I am a</Text>
          <Text style={styles.title2}>Developer</Text>
        </View>
        <View style={styles.buttonContainer}>
          {canBeSkip && (
            <ButtonItem onPress={skipAgeHandler}>Skip to 18</ButtonItem>
          )}
          {isName && <ButtonItem onPress={continueGameHandler}>Continue</ButtonItem>}
          <Button onPress={newGameHandler}>New game</Button>
        </View>
      </View>
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  innerContainer: {
    height: "70%",
    width: "100%",
    marginTop: 30,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    alignItems: "center",
    gap: -20,
  },
  title1: {
    color: Colors.lightGray,
    fontSize: 35,
    fontFamily: "Oddval",
  },
  title2: {
    color: Colors.white,
    fontSize: 50,
    fontFamily: "Oddval",
  },
  buttonContainer: {
    width: "80%",
    gap: 20
  },
});
