import { Pressable, StyleSheet, Text } from "react-native";

const Button = (props) => {
    return (
        <Pressable onPress={props.onClick} style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0d6efd",
        paddingHorizontal: 30,
        paddingVertical: 10,
        textAlign: "center"
    },
    text: {
        color: "white",
        fontWeight: 700,
        fontSize: 20,
        textAlign: "center"
    }
})
export default Button;