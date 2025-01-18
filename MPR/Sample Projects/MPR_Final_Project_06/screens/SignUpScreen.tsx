import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Alert } from 'react-native';
import TopBackground from '../components/auth/TopBackground';
import Input from '../components/auth/UsernameInput';
import PasswordInput from '../components/auth/PasswordInput';
import CustomButton from '../components/auth/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { SignUp } from '../services/PlayerService';
import { User } from '../models/Types';
import { BottomNavText } from '../components/auth/BottomNavText';
import { AUTH_STYLES } from '../styles/AuthStyles';
import { GLOBAL_STYLES } from '../styles/SharedStyles';
import {
    GAME_TEXT_CONSTANTS,
    PLAYER_CONSTANTS,
} from '../constants/GameConstants';

interface Props {
    navigation: any;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
    const [isRePasswordHidden, setIsRePasswordHidden] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');

    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [rePasswordError, setRePasswordError] = useState<boolean>(false);

    const handleSignUp = async () => {
        setEmailError(email === '');
        setPasswordError(password === '');
        setRePasswordError(rePassword === '' || rePassword !== password);

        if (
            email !== '' &&
            password !== '' &&
            rePassword !== '' &&
            rePassword === password
        ) {
            const user: User = {
                username: email,
                password: password,
                player: {
                    gender: PLAYER_CONSTANTS.INITIAL_GENDER,
                    days: PLAYER_CONSTANTS.INITIAL_DAY,
                    health: PLAYER_CONSTANTS.INITIAL_HEALTH,
                    happiness: PLAYER_CONSTANTS.INITIAL_HAPPINESS,
                    money: PLAYER_CONSTANTS.INITIAL_MONEY,
                    smarts: PLAYER_CONSTANTS.INITIAL_SMARTS,
                    coursesTaken: [],
                    jobs: [],
                    activities: [],
                    goodDeeds: [],
                    badDeeds: [],
                    title: PLAYER_CONSTANTS.INITIAL_TITLE,
                },
            };

            try {
                const res = await SignUp(user);
                if (res instanceof Error) {
                    Alert.alert('Error', res.message);
                    return;
                } else {
                    navigation.navigate('Login');
                }
            } catch (error) {
                alert(GAME_TEXT_CONSTANTS.ERROR_SIGNUP_RESPONSE);
            }
        }
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <>
            <StatusBar hidden={true} />
            <View style={GLOBAL_STYLES.container}>
                <TopBackground />
                <View style={AUTH_STYLES.inputContainer}>
                    <Text style={AUTH_STYLES.text}>Sign up</Text>

                    <Input
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                        isError={emailError}
                    />
                    <PasswordInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        isHidden={isPasswordHidden}
                        onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                        isError={passwordError}
                    />

                    <PasswordInput
                        value={rePassword}
                        onChangeText={setRePassword}
                        placeholder='Confirm Password'
                        isHidden={isRePasswordHidden}
                        onPress={() =>
                            setIsRePasswordHidden(!isRePasswordHidden)
                        }
                        isError={rePasswordError}
                    />

                    <CustomButton onPress={handleSignUp} title={GAME_TEXT_CONSTANTS.SIGNUP_BUTTON_TEXT} />
                    <BottomNavText
                        title={GAME_TEXT_CONSTANTS.TO_SIGNIN_PROMPT}
                        text={GAME_TEXT_CONSTANTS.TO_LOGIN_TEXT}
                        onPress={handleLogin}
                    />
                </View>
            </View>
        </>
    );
};

export default LoginScreen;
