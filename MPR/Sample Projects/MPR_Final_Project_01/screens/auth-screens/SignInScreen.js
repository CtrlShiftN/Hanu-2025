import { useContext, useEffect, useState } from 'react';
import { Alert, Image, View, Text, Pressable, StyleSheet } from 'react-native';
import AuthContent from "../../components/auth/AuthContent"
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { AuthContext } from '../../store/auth-context';
import { login } from '../../utils/auth'
import DarkOverlay from "../../components/ui/DarkOverlay"
import {LinearGradient} from 'expo-linear-gradient';
import { CharacterContext } from '../../store/character-context';
import { fetchCharacterInfo } from '../../utils/http';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const characterCtx = useContext(CharacterContext)
  const authCtx = useContext(AuthContext);
  const [isFetching, setIsFetching] = useState(false);

  async function receiveCharacterInfo() {
    try {
      await fetchCharacterInfo(characterCtx)
    } catch(error) {
      alert("Fetch Error")
    }
  }

  useEffect(() => {
    receiveCharacterInfo()
  }, [characterCtx.userEmail])

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password)
      characterCtx.setUserEmail(email)
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <View style={styles.container}>
      {
        isFetching && 
        <Text>Fetching</Text>
      }
      <View style={styles.topContent}>
        <Image 
          style={styles.topContentImageBackground}
          source={require("../../assets/logo.png")}
        />
        <LinearGradient 
          colors={["black", "#4A3A1D"]}
          style={styles.topContentLinearGradientBackground}
        />
        <Image 
          style={styles.authLogo}
          source={require("../../assets/authLogo.png")}
        />
      </View>
      <AuthContent title="Sign In" isSignIn onAuthenticate={loginHandler} />
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  topContent: {
    flex: 1,
    justifyContent: "center", alignItems: "center",
  },
  topContentImageBackground: {
    position: "absolute",
  },
  topContentLinearGradientBackground: {
    position: "absolute",
    opacity: 0.9,
    width: "100%",
    height: "100%",
  },
  authLogo: {
    width: 180, height: 180,
  }
})