import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Timer = ({ timer, onToggle, onDelete, onEdit }) => {
const [elapsedTime, setElapsedTime] = useState(timer.elapsed);

useEffect(() => {
	let interval;
	if (timer.isRunning) {
		interval = setInterval(() => {
			setElapsedTime((prev) => prev + 1);
		}, 1000);
	} else {
		clearInterval(interval);
	}
	return () => clearInterval(interval);
}, [timer.isRunning]);

return (
	<View style={styles.timerContainer}>
		<Text style={styles.timerTitle}>{timer.title} - {timer.project}</Text>
		<Text style={styles.elapsedText}>Elapsed: {formatTime(elapsedTime)}</Text>
		<View style={styles.buttonContainer}>
			<Button title={timer.isRunning ? "Stop" : "Start"} onPress={() => onToggle(timer.id)} />
			<TouchableOpacity style={styles.editButton} onPress={() => onEdit(timer)}>
				<Text style={styles.buttonText}>Edit</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(timer.id)}>
				<Text style={styles.buttonText}>Delete</Text>
			</TouchableOpacity>
		</View>
	</View>
);
};

export default Timer;

// Time Formatting Function
const formatTime = (seconds) => {
const hrs = Math.floor(seconds / 3600);
const mins = Math.floor((seconds % 3600) / 60);
const secs = seconds % 60;
return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

// Styles
const styles = StyleSheet.create({
timerContainer: {
	backgroundColor: 'white',
	padding: 15,
	marginBottom: 10,
	borderRadius: 8,
	shadowColor: '#000',
	shadowOpacity: 0.1,
	shadowRadius: 5,
	elevation: 3,
},
timerTitle: {
	fontSize: 18,
	fontWeight: 'bold',
},
elapsedText: {
	fontSize: 16,
	marginTop: 5,
},
buttonContainer: {
	flexDirection: 'row',
	marginTop: 10,
	justifyContent: 'space-between',
},
editButton: {
	backgroundColor: 'orange',
	padding: 8,
	borderRadius: 5,
	alignItems: 'center',
},
deleteButton: {
	backgroundColor: 'red',
	padding: 8,
	borderRadius: 5,
	alignItems: 'center',
},
buttonText: {
	color: 'white',
	fontSize: 16,
	fontWeight: 'bold',
},
});
