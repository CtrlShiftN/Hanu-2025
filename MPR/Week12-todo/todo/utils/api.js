import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://10.9.180.128:3000"; // Replace with your computer's IP address

export const fetchTodos = async () => {
    try {
        const res = await fetch(`${API_URL}/getTodos`);
        return await res.json();
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    }
};

export const addTodo = async (task) => {
    try {
        await fetch(`${API_URL}/addTodo`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ task }),
        });
    } catch (error) {
        console.error("Error adding todo:", error);
    }
};

export const saveOfflineTask = async (task) => {
    try {
        const existing = await AsyncStorage.getItem("offline_tasks");
        const tasks = existing ? JSON.parse(existing) : [];
        tasks.push(task);
        await AsyncStorage.setItem("offline_tasks", JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving offline task:", error);
    }
};

export const syncOfflineTasks = async () => {
    try {
        const existing = await AsyncStorage.getItem("offline_tasks");
        const tasks = existing ? JSON.parse(existing) : [];
        for (const task of tasks) {
            await addTodo(task);
        }
        if (tasks.length > 0) {
            await AsyncStorage.removeItem("offline_tasks");
        }
    } catch (error) {
        console.error("Error syncing offline tasks:", error);
    }
};
