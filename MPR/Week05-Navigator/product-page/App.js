import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/StackNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
