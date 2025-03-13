import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

const FlexDirectionScreen = () => {
    return (
        <View style={styles.container}>
            <Button text="Flex" />
			<Button text="Box" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly"
    }
})
export default FlexDirectionScreen;