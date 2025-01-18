import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/styles";
import { AuthContext } from "../../store/auth-context";
import { useContext, useEffect } from "react";
import LearningScreen from "../LearningScreen";
import HealthScreen from "../HealthScreen";
import WorkScreen from "../WorkScreen";
import FriendsScreen from "../FriendsScreen";
import RelaxScreen from "../RelaxScreen";
import InvestmentScreen from "../InvestmentScreen";
import HomeScreen from "../HomeScreen";
import { accidents } from "../../data/accidents/dummy-accidents";
const BottomTab = createBottomTabNavigator();

export function MainScreen() {
  const authCtx = useContext(AuthContext);
  const age = authCtx.userData?.age;

  useEffect(() => {
    if (authCtx.userData?.age > 12 && authCtx.userData?.health > 0) {
      authCtx.returnAccident(accidents);
    }
    if (age === 18) {
      authCtx.updateMoney({ value: 10000 });
    }
    if (age > 100 || authCtx.userData?.health <= 0) {
      authCtx.resetLife({ isSuicide: false });
      return;
    }
  }, [age]);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: Colors.background,
        paddingBottom: 80,
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.lightGray,
        tabBarActiveTintColor: Colors.white,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: Colors.black,
          marginBottom: 10,
          left: 20,
          right: 20,
          borderRadius: 40,
          paddingBottom: 0,
          height: 70,
          paddingHorizontal: 10,
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name="Health"
        component={HealthScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="heart" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Work"
        component={WorkScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="briefcase" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Learning"
        component={LearningScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="book" color={color} size={focused ? 38 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="person-circle"
              color={color}
              size={focused ? 45 : 30}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="people" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Relax"
        component={RelaxScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="happy" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Investment"
        component={InvestmentScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="wallet" color={color} size={focused ? 40 : 30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainScreen;
