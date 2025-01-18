import React, { ReactNode, useEffect, useState } from 'react';
import { View, ScrollView, Alert, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/game/Header';
import SectionHeader from '../components/game/SectionHeader';
import ListScrollView from '../components/game/ListScrollView';
import { Job } from '../models/Types';
import { GameContext } from '../store/GameContext';
import { GLOBAL_STYLES } from '../styles/SharedStyles';
import ModalContentWrapper from '../components/game/ModelContentWrapper';
import ModalButton from '../components/game/ModalButton';
import { GAME_TEXT_CONSTANTS } from '../constants/GameConstants';

const CareerScreen: React.FC = () => {
    const context = React.useContext(GameContext);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {}, [context.days]);
    useEffect(
        () => setShowModal(showModal == null ? false : true),
        [showModal]
    );

    const availableJobs = context.careers.filter(
        (job) => job.ageNeeded <= Math.floor(context.days / 360)
    );

    const handleJobPress = (index: number) => {
        setSelectedJob(availableJobs[index]);
    };

    const applyJob = () => {
        if (selectedJob) {
            if (validateSelectedJob(selectedJob)) {
                context.setJobs([...context.jobs, selectedJob.name]);
                
                Alert.alert(
                    GAME_TEXT_CONSTANTS.JOB_TITLE_SUCCESS,
                    'You have successfully taken the job: ' +
                        selectedJob.name +
                        ' and earned $' +
                        selectedJob.effect.money +
                        ' per month.'
                );
                setSelectedJob(null);
            }
        }
    };

    function validateSelectedJob(selectedJob: Job): boolean {
        // Check in the context.jobs, this should only contains 1 partime job and 1 fulltime job,
        if (context.jobs.length > 0) {
            const type = selectedJob.type;

            const jobs = context.careers.filter((career) =>
                context.jobs.includes(career.name)
            );

            const isDuplicated = jobs.map((job) => job.type).includes(type);

            if (isDuplicated) {
                Alert.alert(
                    `You already have a ${type} job`,
                    `You must quit your current ${type} job before you can apply for a new one`
                );

                return false;
            }
        }
        if (
            selectedJob.requirement.education != 'None' &&
            !context.coursesTaken?.includes(
                selectedJob.requirement.education as never
            )
        ) {
            Alert.alert(
                GAME_TEXT_CONSTANTS.JOB_TITLE_FAILED,
                `You must take ${selectedJob.requirement.education} before you can apply for this job`
            );
            return false;
        }

        if (selectedJob.requirement.health > context.health) {
            Alert.alert(
                GAME_TEXT_CONSTANTS.JOB_TITLE_FAILED,
                `You health must be at least ${selectedJob.requirement.health} to apply`
            );

            return false;
        }

        if (selectedJob.requirement.smarts > context.smarts) {
            Alert.alert(
                GAME_TEXT_CONSTANTS.JOB_TITLE_FAILED,
                `You smart must be at least ${selectedJob.requirement.smarts} to apply`
            );
            return false;
        }

        return true;
    }

    const quitJob = () => {
        if (selectedJob) {
            context.setJobs(
                context.jobs.filter((name) => name !== selectedJob.name)
            );
            Alert.alert(
                GAME_TEXT_CONSTANTS.JOB_TITLE_QUIT,
                'You have successfully quit the job: ' + selectedJob.name
            );
            setSelectedJob(null);
        }
    };

    let button = <ModalButton onPress={applyJob} buttonText='Apply' />;
    if (selectedJob != null)
        if (context.jobs.includes(selectedJob.name))
            button = <ModalButton onPress={quitJob} buttonText='Quit' />;

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
                        heading={GAME_TEXT_CONSTANTS.HEADING_JOB_SECTION}
                    />
                    <ListScrollView
                        itemList={availableJobs}
                        onPressItem={handleJobPress}
                    />
                </ScrollView>
            </View>
            <Modal
                showModal={showModal}
                job={selectedJob}
                closeModal={() => setSelectedJob(null)}
                button={button}
            />
        </>
    );
};

export default CareerScreen;

interface ModalProps {
    showModal: boolean;
    job: Job | null;
    closeModal: () => void;
    button: ReactNode;
}
function Modal({ showModal, job, closeModal, button }: ModalProps) {
    if (job == null) return <></>;

    return (
        <ModalContentWrapper
            isOpened={showModal}
            title={job.name}
            closeModal={closeModal}
        >
            <Text>Healt Effect: {job.effect.health}</Text>
            <Text>Happiness Effect: {job.effect.happiness}</Text>
            <Text>Smarts Effect: {job.effect.smarts}</Text>
            <Text>Monthly Rate: {job.effect.money}</Text>
            <Text>Requirements:</Text>
            <Text> Age: {job.ageNeeded}</Text>
            <Text> Health: {job.requirement.health}</Text>
            <Text> Smarts: {job.requirement.smarts}</Text>
            <Text> Education: {job.requirement.education}</Text>
            {button}
        </ModalContentWrapper>
    );
}
