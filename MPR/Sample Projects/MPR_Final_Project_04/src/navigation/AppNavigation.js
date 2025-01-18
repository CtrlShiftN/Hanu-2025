import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens from "../screens/index"

function AppNavigation() {
    const Stack = createNativeStackNavigator()
    return ( 
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {screens.map((screen, index) => {
                    return <Stack.Screen key={index} name={screen.name} component={screen.component}></Stack.Screen>
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;