import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { login } from "../../util/auth";
import {
  writeDataToFirestore,
  checkIfDocExist,
  getUserDataFirebase,
} from "../../util/firebase";

import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      const docExists = await checkIfDocExist("userCharacteristics", email);
      if (docExists) {
        const userData = await getUserDataFirebase("userCharacteristics", email);
        authCtx.getUserData(userData);
      } else {
        await writeDataToFirestore("userCharacteristics", email, {
          userId: email,
        });
        const userData = await getUserDataFirebase("userCharacteristics", email);
        authCtx.getUserData(userData);
      }
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
