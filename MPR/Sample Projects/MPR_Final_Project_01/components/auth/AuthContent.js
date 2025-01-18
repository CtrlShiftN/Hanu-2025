import { useState } from 'react';
import { Alert, StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SwitchAuthModeButton from './ui/SwitchAuthModeButton';
import AuthForm from './AuthForm';
import { Colors } from '../../constants/styles';

function AuthContent({ title, isSignIn, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isSignIn) {
      navigation.replace('SignUpScreen');
    } else {
      navigation.replace('SignInScreen');
    }
  }

  function submitHandler(credentials) {
    let { email, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isSignIn && !passwordsAreEqual)
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
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
    <View style={styles.container}>
      <View style={styles.authContent}>
        <Text style={styles.title}>{title}</Text>
        <AuthForm
          isSignIn={isSignIn}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          <SwitchAuthModeButton onPress={switchAuthModeHandler}>
            {isSignIn ? 'Create a new user' : 'Sign in instead'}
          </SwitchAuthModeButton>
        </View>
      </View>
    </View>

  );
}

export default AuthContent;

const styles = StyleSheet.create({
  container: {
    height: "70%",
    backgroundColor: Colors.authBackground,
    alignItems: "center",
  },
  authContent: {
    width: '100%',
    marginHorizontal: 32,
    padding: 16,
    backgroundColor: Colors.authBackground,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  title: {
    textAlign: "center",
    fontSize: 30, fontWeight: "bold",
    color: Colors.authText,
  },
  buttons: {
    marginTop: 8,
  },
  
  
});