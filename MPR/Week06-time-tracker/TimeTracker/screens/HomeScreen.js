import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Timer from '../components/Timer';

const HomeScreen = ({ navigation, timers, setTimers }) => {

const toggleTimer = (id) => {
	setTimers(timers.map(t => 
	t.id === id ? { ...t, isRunning: !t.isRunning } : t
	));
};

const deleteTimer = (id) => {
	setTimers(timers.filter(t => t.id !== id));
};

const handleEdit = (timer) => {
	navigation.navigate('EditTimerScreen', { 
	timer, 
	updateTimer: (updatedTimer) => {
		setTimers(timers.map(t => (t.id === updatedTimer.id ? updatedTimer : t)));
	}
	});
};

const handleAddTimer = (newTimer) => {
	setTimers([...timers, newTimer]);
};

return (
	<View style={styles.container}>
	<Text style={styles.title}>Time Tracking App</Text>
	<FlatList
		data={timers}
		keyExtractor={(item) => item.id}
		renderItem={({ item }) => (
		<Timer timer={item} onToggle={toggleTimer} onDelete={deleteTimer} onEdit={handleEdit} />
		)}
	/>
		<TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateTimerScreen', { addTimer: handleAddTimer })}>
			<Text style={styles.addButtonText}>+ Add Timer</Text>
		</TouchableOpacity>
	</View>
);
};

export default HomeScreen;

// Styles
const styles = StyleSheet.create({
container: {
	flex: 1,
	padding: 20,
	backgroundColor: '#f5f5f5',
},
title: {
	fontSize: 24,
	fontWeight: 'bold',
	textAlign: 'center',
	marginBottom: 20,
},
addButton: {
	backgroundColor: '#007bff',
	padding: 15,
	marginTop: 20,
	borderRadius: 8,
	alignItems: 'center',
},
addButtonText: {
	color: 'white',
	fontSize: 18,
	fontWeight: 'bold',
},
});
