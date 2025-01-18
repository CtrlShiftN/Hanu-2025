import { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Colors } from "../../constants/styles";

import FlatButton from "../ui/buttons/FlatButton";
import AuthForm from "./AuthForm";


function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [fontsLoaded] = useFonts({
    Oddval: require("../../assets/fonts/oddval.semibold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>
          {isLogin ? "Log in" : "Create Account"}
        </Text>
      </View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create an account" : "Log in now"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    flex: 1,
    marginHorizontal: 25,
  },
  buttons: {
    marginTop: 10
  },
  loginContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom:30
  },
  login: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Oddval",
    textAlign: "center"
  },
});
