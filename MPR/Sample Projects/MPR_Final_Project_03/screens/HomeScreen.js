import { StyleSheet, View, Image, ScrollView } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { useFonts } from "expo-font";

import ScreenLayout from "./GeneralComs/ScreenLayout";
import ItemListScreen from "./Homepage/ItemListScreen";
import PersonalInfo from "./Homepage/PersonalInfo";
import StorageScreen from "./Homepage/StorageScreen";
import FriendListScreen from "./Homepage/FriendListScreen";

function HomeScreen() {
  const authCtx = useContext(AuthContext);
  const age = authCtx.userData?.age;

  const gender = authCtx.userData?.userGender;
  const [fontsLoaded] = useFonts({
    UnboundedSemibold: require("../assets/fonts/Unbounded-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const getMaleImage = (age) => {
    if (age < 5) return require("../assets/images/Male/01.png");
    if (age < 16) return require("../assets/images/Male/02.png");
    if (age < 22) return require("../assets/images/Male/03.png");
    if (age < 37) return require("../assets/images/Male/04.png");
    if (age < 68) return require("../assets/images/Male/05.png");
    if (age <= 100) return require("../assets/images/Male/06.png");
    return null;
  };

  const getFemaleImage = (age) => {
    if (age < 5) return require("../assets/images/Female/01.png");
    if (age < 16) return require("../assets/images/Female/02.png");
    if (age < 22) return require("../assets/images/Female/03.png");
    if (age < 37) return require("../assets/images/Female/04.png");
    if (age < 68) return require("../assets/images/Female/05.png");
    if (age <= 100) return require("../assets/images/Female/06.png");
    return null;
  };

  const getImageSource = (age, gender) =>
    gender === "Male" ? getMaleImage(age) : getFemaleImage(age);

  return (
    <ScreenLayout>
      <ScrollView>
        <View style={styles.rootContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={getImageSource(age, gender)}
              style={styles.image}
            />
          </View>
          <PersonalInfo />
          <StorageScreen />
          <FriendListScreen />
          <ItemListScreen />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  image: {
    maxWidth: "80%",
    marginBottom: 30,
  },
  imageContainer: {
    height: 310,
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
});
