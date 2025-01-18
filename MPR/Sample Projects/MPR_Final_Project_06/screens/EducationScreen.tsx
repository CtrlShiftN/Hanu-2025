import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/game/Header';
import SectionHeader from '../components/game/SectionHeader';
import ListScrollView from '../components/game/ListScrollView';
import { Education } from '../models/Types';
import { getData } from '../services/DataService';
import { GameContext } from '../store/GameContext';
import CommonModal from '../components/game/CommonModal';
import LoadingScreen from './LoadingScreen';
import { GLOBAL_STYLES } from '../styles/SharedStyles';
import { NavigationProp } from '@react-navigation/native';
import { GAME_TEXT_CONSTANTS } from '../constants/GameConstants';

interface Props {
    navigation: NavigationProp<any>; // Define navigation prop type
}

const EducationScreen: React.FC<Props> = ({ navigation }) => {
    const context = React.useContext(GameContext);
    const EDUCATIONS = useRef(new Array<Education>());
    const [selectedEducation, setSelectedEducation] =
        useState<Education | null>();
    const [isLoading, setIsLoading] = useState(true);

    const age = Math.floor(context.days / 360);
    const availableEduction = EDUCATIONS.current.filter(
        (edu) =>
            edu.ageNeeded <= age &&
            !context.coursesTaken?.includes(edu.name as never)
    );

    useEffect(() => {
        const fetchEducationData = async () => {
            setIsLoading(true);
            try {
                // Get the data from Firebase
                EDUCATIONS.current = await getData<Education>('education');
            } catch (error) {
                Alert.alert(GAME_TEXT_CONSTANTS.ERROR_FETCHING_DATA, GAME_TEXT_CONSTANTS.ERROR_FETCHING_DATA_MESSAGE);
            } finally {
                setIsLoading(false);
            }
        };
        // Call the fetchEducationData function
        fetchEducationData();
    }, []);

    useEffect(() => {}, [context.days]);

    const handleEduPress = (index: number) => {
        setSelectedEducation(availableEduction[index]);
    };

    const handleTake = () => {
        if (selectedEducation) {
            if (age < selectedEducation.ageNeeded) {
                Alert.alert(
                    GAME_TEXT_CONSTANTS.COURSE_TITLE_FAILED,
                    'You must be at least ' +
                        selectedEducation.ageNeeded +
                        ' years old to take this course'
                );
                return;
            }

            if (context.money < Math.abs(selectedEducation.effect.money)) {
                Alert.alert(
                    GAME_TEXT_CONSTANTS.COURSE_TITLE_FAILED,
                    'You need at least $' +
                        Math.abs(selectedEducation.effect.money) +
                        ' to take this course'
                );
                return;
            }

            if (
                selectedEducation.prerequisite &&
                !context.coursesTaken?.includes(
                    selectedEducation.prerequisite as never
                )
            ) {
                Alert.alert(
                    GAME_TEXT_CONSTANTS.COURSE_TITLE_FAILED,
                    'You must take ' +
                        selectedEducation.prerequisite +
                        ' before you can take this course'
                );
                return;
            }
            navigation.navigate('QuizScreen', {
                object: selectedEducation,
            });
            setSelectedEducation(null);
        }
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
                <ScrollView style={GLOBAL_STYLES.maxWidth}>
                    <SectionHeader
                        heading={GAME_TEXT_CONSTANTS.HEADING_EDUCATION_SECTION}
                    />
                    <ListScrollView
                        itemList={availableEduction}
                        onPressItem={handleEduPress}
                    />
                </ScrollView>
                <CommonModal
                    modalObject={selectedEducation}
                    closeModal={() => setSelectedEducation(null)}
                    handlePress={handleTake}
                    buttonText={GAME_TEXT_CONSTANTS.TAKE_COURSE_BUTTON_TEXT}
                />
            </View>
        </>
    );
};

export default EducationScreen;
