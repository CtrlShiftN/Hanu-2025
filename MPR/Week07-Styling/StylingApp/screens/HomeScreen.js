import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Flexbox Examples</Text>
			<Button text="Flex" />
			<Button text="Box" />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: "wrap",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		gap: 10
	},
	heading: {
		fontWeight: 700,
		fontSize: 20
	}
});
export default HomeScreen;