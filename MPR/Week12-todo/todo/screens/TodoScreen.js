import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import { addTodo, fetchTodos, saveOfflineTask } from "../utils/api";

export default function TodoScreen({ isConnected }) {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const loadTodos = async () => {
        const data = await fetchTodos();
        setTodos(data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const handleAdd = async () => {
        if (task.trim() === "") return;
        if (isConnected) {
            await addTodo(task);
            await loadTodos();
        } else {
            await saveOfflineTask(task);
        }
        setTask("");
    };

    return (
        <View style={styles.container}>
            <TaskInput task={task} setTask={setTask} onAdd={handleAdd} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TaskItem task={item.task} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
});
