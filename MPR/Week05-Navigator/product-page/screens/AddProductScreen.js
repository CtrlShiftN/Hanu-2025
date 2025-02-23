import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const AddProductScreen = ({ route, navigation }) => {
    const { setProducts, products } = route.params;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const addProduct = () => {
        const newProduct = { id: Date.now().toString(), name, price, description };
        setProducts([...products, newProduct]);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter product name..." value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Enter product price..." value={price} onChangeText={setPrice} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Enter description here" value={description} onChangeText={setDescription} />
            <Button title="Add Product" onPress={addProduct} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
});

export default AddProductScreen;