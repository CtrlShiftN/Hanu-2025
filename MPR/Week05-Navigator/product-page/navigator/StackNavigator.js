import React from 'react';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import AddProductScreen from '../screens/AddProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ProductListScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="AddProduct" component={AddProductScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
