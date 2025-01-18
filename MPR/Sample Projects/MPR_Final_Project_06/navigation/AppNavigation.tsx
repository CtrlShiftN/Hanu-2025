import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChooseGenderScreen from '../screens/ChooseGenderScreen';
import HomeScreen from '../screens/HomeScreen';
import EducationScreen from '../screens/EducationScreen';
import CareerScreen from '../screens/CareerScreen';
import ActivityScreen from '../screens/ActivityScreen';
import DailyLoginScreen from '../screens/DailyLoginScreen';

import { Ionicons } from '@expo/vector-icons';
import { Color } from '../constants/Color';
import QuizScreen from '../screens/QuizScreen';
import SocialScreen from '../screens/SocialScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='Game' component={GameNavigation} />
            <Stack.Screen name='ChooseGender' component={ChooseGenderScreen} />
            <Stack.Screen name='DailyLogin' component={DailyLoginScreen} />
            <Stack.Screen name='QuizScreen' component={QuizScreen} />
        </Stack.Navigator>
    );
};

const Tabs = createBottomTabNavigator();

const GameNavigation = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' color={color} size={size} />
                    ),
                    tabBarActiveTintColor: Color.red,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='Education'
                component={EducationScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='school' color={color} size={size} />
                    ),
                    tabBarActiveTintColor: Color.red,
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name='Career'
                component={CareerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='briefcase' color={color} size={size} />
                    ),
                    tabBarActiveTintColor: Color.red,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='Social'
                component={SocialScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='share-social'
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarActiveTintColor: Color.red,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='Activity'
                component={ActivityScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='golf'
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarActiveTintColor: Color.red,
                    headerShown: false,
                }}
            />
        </Tabs.Navigator>
    );
};

export default AppNavigation;
