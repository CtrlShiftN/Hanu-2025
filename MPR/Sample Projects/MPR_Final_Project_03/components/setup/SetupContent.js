import { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";

import SetupUser from "./SetupUser";
import { Colors } from "../../constants/styles";

function SetupContent({ onSetup }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    userName: false,
    gender: false,
  });

  const [fontsLoaded] = useFonts({
    Oddval: require("../../assets/fonts/oddval.semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  function submitHandler(credentials) {
    let { userName, gender } = credentials;

    userName = userName.trim();
    gender = gender.trim();

    const userNameIsValid = userName.length > 3;
    const genderIsValid =
      gender.length > 0 && (gender === "Male" || gender === "Female");
    if (!userNameIsValid || !genderIsValid) {
      Alert.alert("Invalid input", "Please check your entered input.");
      setCredentialsInvalid({
        userName: !userNameIsValid,
        gender: !genderIsValid,
      });
      return;
    }
    onSetup({ userName, gender });
  }

  return (
    <View style={styles.authContent}>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>Setup</Text>
      </View>
      <SetupUser
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
    </View>
  );
}

export default SetupContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    marginHorizontal: 25,
  },
  buttons: {
    marginTop: 10,
  },
  loginContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 30,
  },
  login: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Oddval",
    textAlign: "center",
  },
});
