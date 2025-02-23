import { StyleSheet, Text, View } from "react-native";
const ProductDetailScreen = ({ route }) => {
    const { product } = route.params;
    return <View style={styles.container}>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
    </View>;
};
const styles = StyleSheet.create({
    container: { flex: 1 },
});
export default ProductDetailScreen;
