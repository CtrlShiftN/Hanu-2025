import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { SCREEN } from '../styles/LoadingScreenStyles';
import { GAME_TEXT_CONSTANTS } from '../constants/GameConstants';

const LoadingScreen: React.FC = () => {
    return (
        <View style={SCREEN.container}>
            <ActivityIndicator size='large' color='#0000ff' />
            <Text style={SCREEN.text}>{GAME_TEXT_CONSTANTS.LOADING_TEXT}</Text>
        </View>
    );
};

export default LoadingScreen;
