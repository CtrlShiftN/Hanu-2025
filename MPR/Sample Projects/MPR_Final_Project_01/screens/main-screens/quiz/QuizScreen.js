import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, Pressable, ActivityIndicator, ImageBackground, Image, Alert } from 'react-native';
import ItalicText from '../../../components/ui/ItalicText';
import { QuizColors } from '../../../constants/styles';
import ExitButton from '../../../components/main/ExitButton';
import { CharacterContext } from '../../../store/character-context';

const QuizScreen = ({ navigation, route}) => {
    const educationLevel = route.params.educationLevel;
    const subjectName = route.params.subjectName;
    const subjectData = route.params.subjectData;
    const [quizData, setQuizData] = useState([]);
    const [randomizedQuizData, setRandomizedQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    
    function finishQuiz() {
        setIsFinished(true)
    }

    useEffect(() => {
        setQuizData(subjectData);
        randomizeQuizData(subjectData);
    }, []);

    const randomizeQuizData = (subjectData) => {
        let shuffled = [...subjectData].sort(() => 0.5 - Math.random());
        setRandomizedQuizData(shuffled.slice(0, 10)); // Get the first 10 questions
    };

    if (!quizData.length) {
        return (
            <View style={styles.container}>
                <Text>Error loading quiz data, try exiting app and reopen!</Text>
            </View>
        );
    }

    const handleAnswer = (selectedOption) => {
        if (selectedOption === randomizedQuizData[currentQuestionIndex].answer) {
            setScore(score + 1);
        } else {
            switch(randomizedQuizData[currentQuestionIndex].answer) {
                case "A": {
                    Alert.alert("Wrong!", "Correct Answer: " + 
                        randomizedQuizData[currentQuestionIndex].A )
                    break;
                }
                case "B": {
                    Alert.alert("Wrong!", "Correct Answer: " + 
                        randomizedQuizData[currentQuestionIndex].B )
                    break;
                }
                case "C": {
                    Alert.alert("Wrong!", "Correct Answer: " + 
                        randomizedQuizData[currentQuestionIndex].C )
                    break;
                }
                case "D": {
                    Alert.alert("Wrong!", "Correct Answer: " + 
                        randomizedQuizData[currentQuestionIndex].D )
                    break;
                }
            }
        }
        if  (currentQuestionIndex === 9){
            setCurrentQuestionIndex(10);
        }
        if (currentQuestionIndex < randomizedQuizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } 
    };

    return (
        <ImageBackground source={require("../../../assets/backgroundGameQuiz.png")} style={styles.container}>
            <ExitButton onPress={() => navigation.goBack()}/>
            <View style={styles.header}>
                <ItalicText text={subjectName} size={40} />
            </View>
            <View style={styles.content}>
                {currentQuestionIndex < randomizedQuizData.length ? (
                    <QuizTaking
                        question={randomizedQuizData[currentQuestionIndex]}
                        onAnswer={handleAnswer}
                        index={currentQuestionIndex + 1}
                    />
                ) : (
                    <QuizFinish 
                        educationLevel={educationLevel}
                        subjectName={subjectName}
                        score={score} 
                        gotoMenu={() => navigation.goBack()}
                        retry={() => {
                            randomizeQuizData(subjectData);
                            setScore(0);
                            setCurrentQuestionIndex(0);
                    }} />
                )}
            </View>
        </ImageBackground>
    );
};

const QuizTaking = ({ question, onAnswer, index }) => {
    return (
        <View style={styles.container}>
            <ItalicText text={index + " of 10"} size={24} />
            <View style={styles.spacer}>

            </View>
            <Text style={styles.question}>{"Choose the correct answer: \n" + question.question}</Text>
            <View style={styles.quizContainer}>
                <Pressable style={styles.option} onPress={() => onAnswer('A')}>
                    <Text style={styles.optionText}>
                        A. {question.A}
                    </Text>
                </Pressable>
                <Pressable style={styles.option} onPress={() => onAnswer('B')}>
                    <Text style={styles.optionText}>
                        B. {question.B}
                    </Text>
                </Pressable>
                <Pressable style={styles.option} onPress={() => onAnswer('C')}>
                    <Text style={styles.optionText}>
                        C. {question.C}
                    </Text>
                </Pressable>
                {
                    (question.D && question.D !== "") && 
                    (
                        <Pressable style={styles.option} onPress={() => onAnswer('D')}>
                            <Text style={styles.optionText}>
                                D. {question.D}
                            </Text>
                        </Pressable>
                    )
                }
            </View>
        </View>
    );
};

const QuizFinish = ({ score, retry, gotoMenu, educationLevel, subjectName }) => {
    const characterCtx = useContext(CharacterContext)

    const education = characterCtx.education;

    const isPassed = score >= 5 ? true : false
    useEffect(() => {
        switch(educationLevel) {
            case "primary" : {
                switch(subjectName) {
                    case "MATHEMATICS" : {
                        education.primary.mathematics = isPassed
                        break;
                    }
                    case "ENGLISH" : {
                        education.primary.english = isPassed
                        break;
                    }
                }
                break;
            }
            case "secondary" : {
                switch(subjectName) {
                    case "MATHEMATICS" : {
                        education.secondary.mathematics = isPassed
                        break;
                    }
                    case "ENGLISH" : {
                        education.secondary.english = isPassed
                        break;
                    }
                    case "PHYSICS" : {
                        education.secondary.physics = isPassed
                        break;
                    }
                }
                break;
            }
            case "highSchool" : {
                switch(subjectName) {
                    case "MATHEMATICS" : {
                        education.highSchool.mathematics = isPassed
                        break;
                    }
                    case "ENGLISH" : {
                        education.highSchool.english = isPassed
                        break;
                    }
                    case "PHYSICS" : {
                        education.highSchool.physics = isPassed
                        break;
                    }
                    case "INFORMATICS" : {
                        education.highSchool.informatics = isPassed
                        break;
                    }
                }
                break;
            }
            case "university" : {
                switch(subjectName) {
                    case "HTML & CSS" : {
                        education.university.htmlCss = isPassed
                        break;
                    }
                    case "JAVASCRIPT" : {
                        education.university.javaScript = isPassed
                        break;
                    }
                    case "JAVA" : {
                        education.university.java = isPassed
                        break;
                    }
                    case "DATABASE" : {
                        education.university.database = isPassed
                        break;
                    }
                }
                break;
            }
        } // end swich
        characterCtx.setEducation(education)
    }, [])

    return (
        <View style={styles.container}>
            <ItalicText text="RESULT" size={36} />
            <View style={styles.resultCircle}>  
                <ItalicText text={((score / 10) * 100).toFixed(0) + "%"} size={30}/>
            </View>
            {
                isPassed ?  
                    <Image
                        style={styles.resultImage}
                        source={require("../../../assets/passed.png")}
                    /> 
                    :
                    <Image
                        style={styles.resultImage}
                        source={require("../../../assets/failed.png")}
                    /> 
            }
            
            <View style={styles.buttons}>
                {
                    !isPassed && 
                    <Pressable style={styles.retryButton} onPress={retry}>
                        <Text style={styles.buttonText}>
                            Retry   
                        </Text>
                    </Pressable>    
                }
                <Pressable style={styles.menuButton} onPress={gotoMenu}>
                    <Text style={styles.buttonText}>
                        Menu
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        // borderWidth: 1, borderColor: "red",
    },
    header: {
        position: "absolute", top: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: "90%",
        height: "100%",
    },
    spacer: {
        minHeight: "10%",   
    },
    question: {
        height: "100px",
        width: "100%",
        borderRadius: 16,
        padding: 20,
        backgroundColor: QuizColors.primary,
        fontFamily: "Inter_800ExtraBold",
    },
    quizContainer: {
        // borderColor: "red", borderWidth: 1,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        maxHeight: '26%',
        width: "100%",
        marginTop: 20, 
    },
    option: {
        // height: "100px",
        // minWidth: '60%',
        width: "95%",
        // borderWidth: 2,
        borderRadius: 16,
        padding: 12,
        // marginTop: 10, 
        backgroundColor: QuizColors.primary,
    },
    optionText: {
        fontFamily: "Inter_800ExtraBold",
    },
    resultCircle:{
        minWidth: 200,
        minHeight: 200,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 16,
        borderColor: QuizColors.primary,
        borderRadius: 200,
    },
    resultImage: {
        width: 150, height: 150,
        // borderWidth: 1, borderColor: "red"
    },
    buttons: {
        // flex: 1,
        flexDirection: 'row',
        maxHeight: "20%",
        minWidth: "90%",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    retryButton: {
        padding: 16,
        minWidth: "30%",
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: QuizColors.buttonRetry,
        borderRadius: 30
    },
    menuButton: {
        padding: 16,
        minWidth: "30%",
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: QuizColors.buttonHome,
        borderRadius: 30
    },
    buttonText: {
        fontFamily: "Inter_800ExtraBold",
        fontSize: 16,
        color: "white",
    }
});
