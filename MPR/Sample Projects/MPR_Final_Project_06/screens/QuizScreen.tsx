import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Header from '../components/game/Header';
import { GameContext } from '../store/GameContext';
import { SCREEN_STYLES } from '../styles/HomeScreenStyles';
import { getData } from '../services/DataService';
import { Quiz } from '../models/Types';
import LoadingScreen from './LoadingScreen';
import { GLOBAL_STYLES } from '../styles/SharedStyles';
import { SCREEN } from '../styles/QuizScreenStyles';
import { GAME_TEXT_CONSTANTS } from '../constants/GameConstants';

interface Props {
    navigation: any;
    route: any;
}

const QuizScreen: React.FC<Props> = ({ navigation, route }) => {
    const context = useContext(GameContext);
    const [isLoading, setIsLoading] = React.useState(true);
    const [quizData, setQuizData] = useState<Quiz>();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const res = await getData<Quiz>('quiz');
                setQuizData(
                    res.filter(
                        (quiz) => quiz.courseName === route.params.object?.name
                    )[0]
                );
                setIsLoading(false);
            } catch (error) {
                console.error(GAME_TEXT_CONSTANTS.ERROR_FETCHING_DATA, error);
            }
        };
        fetchQuizData();
    }, []);

    // Function to handle selecting an option for the current question
    const handleOptionSelect = (selectedOption: string) => {
        const currentQues = quizData?.questions[currentQuestion];
        if (selectedOption === currentQues?.answer) {
            setCorrectAnswers(correctAnswers + 1);
        }
        // Move to the next question if not the last question
        if (currentQuestion < (quizData?.questions.length ?? 0) - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alertComplete();
        }
    };

    const alertComplete = () => {
        if (correctAnswers >= (quizData?.questions.length ?? 0) / 2) {
            context.setMoney(context.money + route.params.object?.effect.money);
            context.setHealth(
                context.health + route.params.object?.effect.health
            );
            context.setHappiness(
                context.happiness + route.params.object?.effect.happiness
            );
            context.setSmarts(
                context.smarts + route.params.object?.effect.smarts
            );

            context.setCoursesTaken([
                ...(context.coursesTaken || []),
                route.params.object?.name as never,
            ]);
            Alert.alert(
                `Quiz Success ${correctAnswers}/${quizData?.questions.length}`,
                GAME_TEXT_CONSTANTS.QUIZ_DESC_SUCCESS,
                [
                    {
                        text: GAME_TEXT_CONSTANTS.OK_TEXT,
                        onPress: () => navigation.navigate('Education'),
                    },
                ]
            );
        } else {
            Alert.alert(
                `Quiz Failed ${correctAnswers}/${quizData?.questions.length}`,
                `You need to get at least ${
                    (quizData?.questions.length ?? 0) / 2
                } out of ${
                    quizData?.questions.length
                } to pass the quiz. Please learn carefully.`,
                [
                    {
                        text: GAME_TEXT_CONSTANTS.OK_TEXT,
                        onPress: () => navigation.navigate('Education'),
                    },
                ]
            );
        }
    };

    const navigateBack = () => {
        // alert user if they try to leave the quiz screen
        Alert.alert(
            GAME_TEXT_CONSTANTS.WARNING_TITLE,
            GAME_TEXT_CONSTANTS.WARNING_DESC_EXIT_QUIZ,
            [
                {
                    text: GAME_TEXT_CONSTANTS.YES_TEXT,
                    onPress: () => navigation.goBack(),
                },
                {
                    text: GAME_TEXT_CONSTANTS.NO_TEXT,
                },
            ]
        );
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <View style={GLOBAL_STYLES.container}>
            <Header
                username={context.username}
                userTitle={context.title}
                balance={context.money}
            />
            <TouchableOpacity
                onPress={navigateBack}
                style={[SCREEN_STYLES.button, SCREEN_STYLES.exitButton]}
            >
                <Text style={SCREEN_STYLES.dailyText}>Exit Quiz</Text>
            </TouchableOpacity>

            {quizData && (
                <View style={SCREEN.questionCont}>
                    <Text style={SCREEN.heading}>{quizData.courseName}</Text>
                    <Text style={SCREEN.question}>
                        Question {currentQuestion + 1}:{' '}
                        {quizData?.questions[currentQuestion].question}
                    </Text>
                    {quizData?.questions[currentQuestion].options.map(
                        (option, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleOptionSelect(option)}
                                style={SCREEN.option}
                            >
                                <Text style={SCREEN.optionText}>
                                    {String.fromCharCode(65 + index)}: {option}
                                </Text>
                            </TouchableOpacity>
                        )
                    )}
                </View>
            )}
        </View>
    );
};

export default QuizScreen;
