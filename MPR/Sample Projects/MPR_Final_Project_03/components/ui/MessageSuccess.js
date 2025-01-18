import { View, Text, StyleSheet } from "react-native";

function MessageSuccess({ message }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default MessageSuccess;