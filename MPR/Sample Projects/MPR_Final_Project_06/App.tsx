import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';
import GameContextProvider from './store/GameContext';
import GameLoop from './components/game/GameLoop';

export default function App() {
    return (
        <GameContextProvider>
            <GameLoop />
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </GameContextProvider>
    );
}
