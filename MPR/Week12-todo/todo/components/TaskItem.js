import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function TaskItem({ task }) {
    return (
        <View style={styles.item}>
            <Text>{task}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
    },
});
