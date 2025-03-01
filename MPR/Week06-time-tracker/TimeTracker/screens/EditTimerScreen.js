import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditTimerScreen = ({ navigation, route }) => {
	const { timer, updateTimer } = route.params;
	const [title, setTitle] = useState(timer.title);
	const [project, setProject] = useState(timer.project);

	if (!timer) {
		return (
			<View style={styles.container}>
				<Text style={styles.errorText}>Error: Timer not found</Text>
			</View>
		);
	}

	const handleSaveChanges = () => {
		if (title.trim() === '') return; // Prevent empty title

		const updatedTimer = { ...timer, title, project };
		if (updateTimer) {
				updateTimer(updatedTimer);
			}
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Edit Timer</Text>

			<Text style={styles.label}>Task Title</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={setTitle}
				placeholder="Enter task title"
			/>

			<Text style={styles.label}>Project Name</Text>
			<TextInput
				style={styles.input}
				value={project}
				onChangeText={setProject}
				placeholder="Enter project name"
			/>

			<TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
				<Text style={styles.saveButtonText}>Save Changes</Text>
			</TouchableOpacity>
		</View>
	);
};

export default EditTimerScreen;

// Styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f8f9fa',
		justifyContent: 'center',
	},
	header: {
		fontSize: 26,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
		color: '#333',
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#555',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 12,
		fontSize: 16,
		borderRadius: 8,
		backgroundColor: '#fff',
		marginBottom: 15,
	},
	saveButton: {
		backgroundColor: '#007bff',
		padding: 15,
		borderRadius: 8,
		alignItems: 'center',
		marginTop: 20,
	},
	saveButtonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
