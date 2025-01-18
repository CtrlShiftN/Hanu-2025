import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/game/Header';
import SectionHeader from '../components/game/SectionHeader';
import ListScrollView from '../components/game/ListScrollView';
import RelationshipModal from '../components/game/RelationshipModal';
import CommonModal from '../components/game/CommonModal';
import { Activity } from '../models/Types';
import { getData } from '../services/DataService';
import { GameContext } from '../store/GameContext';
import LoadingScreen from './LoadingScreen';
import { GLOBAL_STYLES } from '../styles/SharedStyles';
import { PARENT_INFOS } from '../data/dummy-data';
import { Relationship } from '../models/Types';
import { GAME_TEXT_CONSTANTS, PLAYER_CONSTANTS } from '../constants/GameConstants';

const ActivityScreen: React.FC = () => {
    const context = React.useContext(GameContext);
    const [selectedRelationship, setSelectedRelationship] =
        useState<Relationship | null>(null);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
        null
    );
    const ACTIVITIES = useRef(new Array<Activity>());

    const age = Math.floor(context.days / PLAYER_CONSTANTS.DAY_IN_YEAR);

    const availableActivities = ACTIVITIES.current.filter(
        (activity) =>
            activity.ageNeeded <= age &&
                    !context.activities?.includes(activity.name as never)
    );

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchActivitiesData = async () => {
            try {
                // Get the data from Firebase
                ACTIVITIES.current = await getData<Activity>('activity');
                setIsLoading(false);
            } catch (error) {
                Alert.alert(GAME_TEXT_CONSTANTS.ERROR_FETCHING_DATA, GAME_TEXT_CONSTANTS.ERROR_FETCHING_DATA_MESSAGE);
            }
        };

        // Call the fetchActivitiesData function
        fetchActivitiesData();
    }, [selectedActivity]);

    const handleRelPress = (index: number) => {
        setSelectedRelationship(PARENT_INFOS[index]);
    };

    const handleActivityPress = (index: number) => {
        setSelectedActivity(availableActivities[index]);
    };

    const handleJoin = () => {
        if (selectedActivity) {
            if (age < selectedActivity.ageNeeded) {
                Alert.alert(
                    GAME_TEXT_CONSTANTS.ERROR_ACTIVITY_AGE,
                    'You must be at least ' +
                        selectedActivity.ageNeeded +
                        ' years old to apply for this activity'
                );
                return;
            }

            if (context.money < +selectedActivity.effect.money) {
                Alert.alert(
                    GAME_TEXT_CONSTANTS.ERROR_ACTIVITY_MONEY,
                    'You need at least $' +
                        selectedActivity.effect.money +
                        ' to apply for this activity'
                );
                return;
            }

            context.setMoney(context.money + selectedActivity.effect.money);
            context.setHealth(context.health + selectedActivity.effect.health);
            context.setHappiness(
                context.happiness + selectedActivity.effect.happiness
            );
            context.setSmarts(context.smarts + selectedActivity.effect.smarts);

            context.setActivities([
                ...(context.activities || []),
                selectedActivity.name as never,
            ]);

            setSelectedActivity(null);
        }
    };

    const handleRelInteraction = () => {
        context.setMoney(context.money + 5);
        setSelectedRelationship(null);
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
                        heading={GAME_TEXT_CONSTANTS.HEADING_PARENT_SECTION}
                    />
                    <ListScrollView
                        itemList={PARENT_INFOS}
                        onPressItem={handleRelPress}
                    />
                    <SectionHeader
                        heading={GAME_TEXT_CONSTANTS.HEADING_ACTIVITY_SECTION}
                    />
                    <ListScrollView
                        itemList={availableActivities}
                        onPressItem={handleActivityPress}
                    />
                </ScrollView>
                <RelationshipModal
                    rel={selectedRelationship}
                    closeModal={() => setSelectedRelationship(null)}
                    handleInteraction={handleRelInteraction}
                />
                <CommonModal
                    modalObject={selectedActivity}
                    closeModal={() => setSelectedActivity(null)}
                    handlePress={handleJoin}
                    buttonText={GAME_TEXT_CONSTANTS.ACTIVITY_JOIN_BUTTON_TEXT}
                />
            </View>
        </>
    );
};

export default ActivityScreen;
