import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import TopBackground from '../components/auth/TopBackground';
import Input from '../components/auth/UsernameInput';
import PasswordInput from '../components/auth/PasswordInput';
import CustomButton from '../components/auth/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { GameContext } from '../store/GameContext';
import { Login } from '../services/PlayerService';
import { BottomNavText } from '../components/auth/BottomNavText';
import { AUTH_STYLES } from '../styles/AuthStyles';
import { GLOBAL_STYLES } from '../styles/SharedStyles';
import { GAME_TEXT_CONSTANTS } from '../constants/GameConstants';

interface Props {
    navigation: any; // Adjust type according to your navigation prop type
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    const context = React.useContext(GameContext);
    useEffect(() => context.setIsPause(true), []);

    const handleLogin = async () => {
        setEmailError(email === '');
        setPasswordError(password === '');

        if (email !== '' && password !== '') {
            // Call service to sign in
            try {
                const res = await Login(email, password);

                // Check if response is an instance of Error
                if (res instanceof Error) {
                    // Handle error response
                    alert(res.message); // Display error message
                } else {
                    // Set player data to context
                    context.setUsername(res.username);
                    context.setTitle(res.player.title);
                    context.setHealth(res.player.health);
                    context.setMoney(res.player.money);
                    context.setHappiness(res.player.happiness);
                    context.setSmarts(res.player.smarts);
                    context.setDays(res.player.days);
                    context.setActivities(res.player.activities);
                    context.setJobs(res.player.jobs);
                    context.setCoursesTaken(res.player.coursesTaken);
                    context.setGender(res.player.gender);
                    context.setBadDeeds(res.player.badDeeds);
                    context.setGoodDeeds(res.player.goodDeeds);

                    if (!res.player.gender) {
                        navigation.navigate('ChooseGender');
                    } else {
                        navigation.navigate('Game');
                    }
                }
            } catch (error) {
                alert(GAME_TEXT_CONSTANTS.ERROR_LOGIN_RESPONSE);
            }
        }
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    };

    return (
        <>
            <StatusBar hidden={true} />
            <View style={GLOBAL_STYLES.container}>
                <TopBackground />
                <View style={AUTH_STYLES.inputContainer}>
                    <Text style={AUTH_STYLES.text}>
                        {GAME_TEXT_CONSTANTS.SIGNIN_BUTTON_TEXT}
                    </Text>

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

                    <CustomButton
                        onPress={handleLogin}
                        title={GAME_TEXT_CONSTANTS.SIGNIN_BUTTON_TEXT}
                    />
                    <BottomNavText
                        text={GAME_TEXT_CONSTANTS.TO_SIGNUP_TEXT}
                        onPress={handleSignUp}
                        title={GAME_TEXT_CONSTANTS.TO_SIGN_UP_PROMPT}
                    />
                </View>
            </View>
        </>
    );
};

export default LoginScreen;
