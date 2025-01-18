import { useContext, useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Colors } from "./constants/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./screens/Auth/LoginScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IconButton from "./components/ui/buttons/IconButton";
import * as SplashScreen from "expo-splash-screen";
import SetupPlayerScreen from "./screens/GeneralComs/SetupPlayerScreen";
import MainScreen from "./screens/GeneralComs/MainScreen";
import HowToPlayScreen from "./screens/Auth/HowToPlayScreen";
import LandingScreen from "./screens/GeneralComs/LandingScreen";

const Stack = createNativeStackNavigator();

function AuthStack() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("HowtoPlay");
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.white,
        contentStyle: { backgroundColor: Colors.background },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitleStyle: { color: Colors.background },
          headerRight: () => (
            <IconButton
              icon={"questioncircleo"}
              size={24}
              color={Colors.white}
              onPress={handlePress}
            />
          ),
          headerLeft: () => null,
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="HowtoPlay"
        component={HowToPlayScreen}
        options={{
          title: "How to play?",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerTitleStyle: { color: Colors.background },
          headerBackVisible: false,
          headerRight: () => (
            <IconButton
              icon={"questioncircleo"}
              size={24}
              color={Colors.white}
              onPress={handlePress}
            />
          ),
          headerLeft: () => null,
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Authenticated() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("HowtoPlay");
  }

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          title: "",
          headerStyle: { backgroundColor: Colors.background },
          headerShadowVisible: false,
          headerTintColor: Colors.white,
          headerBackVisible: false,
          gestureEnabled: false,
          headerLeft: () => (
            <IconButton
              icon={"logout"}
              onPress={authCtx.logout}
              size={24}
              color={Colors.white}
            />
          ),
          headerRight: () => (
            <IconButton
              icon={"questioncircleo"}
              size={24}
              color={Colors.white}
              onPress={handlePress}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Setup"
        component={SetupPlayerScreen}
        options={{
          title: "",
          headerStyle: { backgroundColor: Colors.background },
          headerShadowVisible: false,
          headerTintColor: Colors.white,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerLeft: () => null,
          headerBackVisible: false,
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HowtoPlay"
        component={HowToPlayScreen}
        options={{
          title: "How to play?",
          headerBackTitleVisible: false,
          headerShown: true,
          headerStyle: { backgroundColor: Colors.background },
          headerShadowVisible: false,
          headerTintColor: Colors.white,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <Authenticated />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
      SplashScreen.hideAsync();
    }

    fetchToken();
  }, []);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
