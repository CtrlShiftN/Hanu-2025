import { useContext, useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { useNavigation } from "@react-navigation/native";
import { getUserDataFirebase, updateUserData } from "../../util/firebase";

import LoadingOverlay from "../../components/ui/LoadingOverlay";
import SetupContent from "../../components/setup/SetupContent";

function SetupPlayerScreen() {
  const [isSettingup, setIsSettingup] = useState(false);
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  const email = authCtx.userData?.userId;

  async function handleSetup({ userName, gender }) {
    setIsSettingup(true);
    try {
      await updateUserData("userCharacteristics", email, {
        userId: email,
        name: userName,
        age: 0,
        userGender: gender,
        health: 20,
        iq: 10,
        happiness: 15,
        money: 0,
        savings: 0,
        loan: 0,
        friends: [],
        lover: [],
        items: [],
        learned: {
          learnedDegrees: [],
          learnedSkills: [],
          learnedCourses: [],
          learnedLanguages: [],
        },
        currentWorking: { main: [], side: [], crime: [] },
        wallet: []
      });
      const userData = await getUserDataFirebase("userCharacteristics", email);
      authCtx.getUserData(userData);
      navigation.navigate("MainScreen");
    } catch (error) {
      Alert.alert(
        "Set up failed!",
        "Please check your input or try again later!"
      );
      console.log(error);
      setIsSettingup(false);
    }
  }
  if (isSettingup) {
    return <LoadingOverlay message="Get starting..." />;
  }

  return <SetupContent onSetup={handleSetup} />;
}

export default SetupPlayerScreen;
