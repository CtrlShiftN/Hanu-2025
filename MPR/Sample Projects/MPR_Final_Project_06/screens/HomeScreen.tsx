import React, { useContext, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Color } from '../constants/Color';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/game/Header';
import AgeStatus from '../components/game/AgeStatus';
import PlayerStats from '../components/game/PlayerStats';
import { GameContext } from '../store/GameContext';
import ExitModal from '../components/game/ExitModal';
import LoadingScreen from './LoadingScreen';
import { SCREEN_STYLES } from '../styles/HomeScreenStyles';
import { GLOBAL_STYLES } from '../styles/SharedStyles';

interface Props {
    navigation: any;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const context = useContext(GameContext);

    const age = Math.floor(context.days / 360); // get quotient
    const progress = Number((((context.days % 360) / 360) * 100));

    const [isExitModalOpened, setIsExitModalOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    let image;

    if (age < 6) {
        image = require(`../assets/images/male0-5.png`);
        if (context.gender === 'female') {
            image = require(`../assets/images/female0-5.png`);
        }
    } else if (age < 11) {
        image = require('../assets/images/male6-10.png');
        if (context.gender === 'female') {
            image = require('../assets/images/female6-10.png');
        }
    } else if (age < 15) {
        image = require('../assets/images/male11-14.png');
        if (context.gender === 'female') {
            image = require('../assets/images/female11-14.png');
        }
    } else if (age < 18) {
        image = require('../assets/images/male15-17.png');
        if (context.gender === 'female') {
            image = require('../assets/images/female15-17.png');
        }
    } else if (age < 22) {
        image = require('../assets/images/male18-21.png');
        if (context.gender === 'female') {
            image = require('../assets/images/female18-21.png');
        }
    } else if (age < 60) {
        image = require('../assets/images/male22-59.png');
        if (context.gender === 'female') {
            image = require('../assets/images/female22-59.png');
        }
    } else {
        image = require('../assets/images/male60+.png');
        if (context.gender === 'female') {
            image = require('../assets/images/female60+.png');
        }
    }

    useEffect(() => {
        let title = context.title;
        if (context.jobs.length > 0) {
            title = ''
            for (const job of context.jobs) {
                title = job;
            }
        }
        context.setTitle(title);
    }, [context.jobs]);

    useEffect(() => {}, [
        context.money,
        context.health,
        context.days,
        context.happiness,
        context.smarts,
    ]);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
            context.setIsPause(false);
        }, 2000);
    }, []);

    const navigateDailyLogin = () => {
        navigation.navigate('DailyLogin');
    };

    const skipToAge6 = () => {
        context.setDays(6 * 360);
    };

    const closeExitModal = () => {
        setIsExitModalOpened(false);
        context.setIsPause(false);
    };

    const toggleExitModal = () => {
        context.setIsPause(true);
        setIsExitModalOpened(true);
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <StatusBar hidden={true} />
            <View style={GLOBAL_STYLES.container}>
                <Header
                    username={context.username}
                    userTitle={context.title}
                    balance={context.money}
                />
                <AgeStatus age={age} value={progress} color={Color.red} />
                <Image
                    source={image}
                    style={SCREEN_STYLES.image}
                    resizeMode='contain'
                />
                <TouchableOpacity
                    style={[
                        SCREEN_STYLES.dailyLoginbutton,
                        SCREEN_STYLES.button,
                    ]}
                    onPress={navigateDailyLogin}
                >
                    <Text style={SCREEN_STYLES.dailyText}>Daily Gift</Text>
                </TouchableOpacity>
                {age < 6 && (
                    <TouchableOpacity
                        style={[SCREEN_STYLES.skipAge6Button]}
                        onPress={skipToAge6}
                    >
                        <Text style={SCREEN_STYLES.skipAge6Text}>
                            Skip to Age 6
                        </Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={[SCREEN_STYLES.exitButton, SCREEN_STYLES.button]}
                    onPress={toggleExitModal}
                >
                    <Text style={SCREEN_STYLES.dailyText}>Exit Game</Text>
                </TouchableOpacity>
                <PlayerStats
                    health={context.health}
                    smarts={context.smarts}
                    happiness={context.happiness}
                />
                <ExitModal
                    isOpened={isExitModalOpened}
                    closeModal={closeExitModal}
                />
            </View>
        </>
    );
};


export default HomeScreen;
