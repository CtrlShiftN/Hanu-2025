import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function TaskInput({ task, setTask, onAdd }) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter a task"
                value={task}
                onChangeText={setTask}
                style={styles.input}
            />
            <Button title="Add Task" onPress={onAdd} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    input: {
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 4,
    },
});
