import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateTimerScreen from './screens/CreateTimerScreen';
import EditTimerScreen from './screens/EditTimerScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
	const [timers, setTimers] = useState([]);

	useEffect(() => {
		const loadTimers = async () => {
			const storedTimers = await AsyncStorage.getItem('timers');
			if (storedTimers) setTimers(JSON.parse(storedTimers));
		};
		loadTimers();
	}, []);

	useEffect(() => {
		AsyncStorage.setItem('timers', JSON.stringify(timers));
	}, [timers]);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="HomeScreen">
				{(props) => <HomeScreen {...props} timers={timers} setTimers={setTimers} />}
				</Stack.Screen>
				<Stack.Screen name="CreateTimerScreen">
				{(props) => <CreateTimerScreen {...props} setTimers={setTimers} />}
				</Stack.Screen>
				<Stack.Screen name="EditTimerScreen">
				{(props) => <EditTimerScreen {...props} setTimers={setTimers} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
