import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/game/Header';
import { GameContext } from '../store/GameContext';
import ModalButton from '../components/game/ModalButton';
import { SCREEN_STYLES } from '../styles/DailyLoginStyles';
import { GAME_TEXT_CONSTANTS } from '../constants/GameConstants';

interface Props {
    navigation: any;
}

const DailyLoginScreen: React.FC<Props> = ({ navigation }) => {
    const context = useContext(GameContext);

    const moneyPerDay = 100;

    const navigateBack = () => {
        navigation.goBack();
    };

    const handleTakeDailyLogin = () => {
        if (context.isTakeDailyLogin) {
            Alert.alert(GAME_TEXT_CONSTANTS.WARNING_TITLE_DAILY_LOGIN);
        } else {
            context.setMoney(context.money + moneyPerDay);
            context.setIsDailyLogin(true);
            navigation.goBack();
        }
    };

    return (
        <View style={SCREEN_STYLES.container}>
            <Header
                username={context.username}
                userTitle={context.title}
                balance={context.money}
            />
            <TouchableOpacity onPress={navigateBack}>
                <Ionicons
                    name='arrow-back'
                    size={24}
                    color='black'
                    style={SCREEN_STYLES.backIcon}
                />
            </TouchableOpacity>
            <View style={SCREEN_STYLES.itemCont}>
                <View style={SCREEN_STYLES.dayItem}>
                    <Text style={SCREEN_STYLES.dayText}>Daily Prize</Text>
                    <Text style={SCREEN_STYLES.moneyText}>${moneyPerDay}</Text>
                </View>
            </View>

            <ModalButton
                onPress={handleTakeDailyLogin}
                buttonText={GAME_TEXT_CONSTANTS.TAKE_DAILY_LOGIN_BUTTON_TEXT}
            />
        </View>
    );
};

export default DailyLoginScreen;
