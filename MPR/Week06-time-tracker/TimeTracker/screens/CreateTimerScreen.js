import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreateTimerScreen = ({ navigation, route }) => {
const [title, setTitle] = useState('');
const [project, setProject] = useState('');

const handleSave = () => {
	if (title.trim() === '') return; // Prevent empty title

	const newTimer = {
		id: Date.now().toString(),
		title,
		project,
		elapsed: 0,
		isRunning: false,
	};

	if (route.params?.addTimer) {
	route.params.addTimer(newTimer);
	}

	navigation.goBack();
};

return (
	<View style={styles.container}>
	<Text style={styles.title}>Create New Timer</Text>
	<TextInput 
		style={styles.input} 
		placeholder="Task Title" 
		value={title} 
		onChangeText={setTitle} 
	/>
	<TextInput 
		style={styles.input} 
		placeholder="Project Name" 
		value={project} 
		onChangeText={setProject} 
	/>
	<TouchableOpacity style={styles.saveButton} onPress={handleSave}>
		<Text style={styles.saveButtonText}>Save Timer</Text>
	</TouchableOpacity>
	</View>
);
};

export default CreateTimerScreen;

// Styles
const styles = StyleSheet.create({
container: {
	flex: 1,
	padding: 20,
	backgroundColor: '#ffffff',
	justifyContent: 'center',
},
title: {
	fontSize: 24,
	fontWeight: 'bold',
	textAlign: 'center',
	marginBottom: 20,
},
input: {
	borderWidth: 1,
	borderColor: '#ccc',
	padding: 10,
	fontSize: 16,
	borderRadius: 5,
	marginBottom: 15,
},
saveButton: {
	backgroundColor: '#28a745',
	padding: 15,
	borderRadius: 8,
	alignItems: 'center',
},
saveButtonText: {
	color: 'white',
	fontSize: 18,
	fontWeight: 'bold',
},
});
