import {
    FlatList,
    TouchableOpacity,
    View,
    StyleSheet, Text,
    Button
} from "react-native";
import { useState } from "react";
const ProductListScreen = ({navigation}) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 9.99 },
        { id: 3, name: "Product 3", price: 9.99 },
        { id: 4, name: "Product 4", price: 9.99 },
    ]);
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(items) => items.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {product: item})}>
                        <Text>
                            {item.name} - {item.price}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <Button title="Add Product" onPress={() => navigation.navigate('AddProduct')}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default ProductListScreen;
