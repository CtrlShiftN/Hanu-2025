import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import TodoScreen from "./screens/TodoScreen";
import { syncOfflineTasks } from "./utils/api";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
            if (state.isConnected) {
                syncOfflineTasks();
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={
                    Platform.OS === "ios" ? "dark-content" : "light-content"
                }
                backgroundColor={
                    Platform.OS === "android" ? "#6200ee" : undefined
                }
            />
            <TodoScreen isConnected={isConnected} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
