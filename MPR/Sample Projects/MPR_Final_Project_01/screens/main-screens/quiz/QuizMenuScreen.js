import React, { useState, useEffect, useContext, useCallback } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
import ItalicText from "../../../components/ui/ItalicText";
import QuizOption from "./components/QuizOption";
import ExitButton from "../../../components/main/ExitButton";
import { CharacterContext } from "../../../store/character-context";
import { eng, math, physics, tech, quizJs, quizJava, quizHtmlCSS, quizDatabase } from '../../../constants/quizData';
import { useFocusEffect } from "@react-navigation/native";
import MathIcon from "../../..//assets/quiz/math.png";
import EngIcon from "../../../assets/quiz/eng.png";
import PhysicsIcon from "../../../assets/quiz/physics.png";
import InfoIcon from "../../../assets/quiz/informatics.png";
import JavaIcon from "../../../assets/quiz/java.png";
import JavaScriptIcon from "../../../assets/quiz/javascript.png";
import HtmlCssIcon from "../../../assets/quiz/htmlcss.png";
import DatabaseIcon from "../../../assets/quiz/database.png";
import Prompt from "../../../components/main/Prompt";
import DarkOverlay from "../../../components/ui/DarkOverlay";

const QuizMenuScreen = ({ navigation }) => {
  const characterCtx = useContext(CharacterContext)
  const [educationLevel, setEducationLevel] = useState("")
  const [isMathLocked, setIsMathLocked] = useState(true)
  const [isEnglishLocked, setIsEnglishLocked] = useState(true)
  const [isPhysicsLocked, setIsPhysicsLocked] = useState(true)
  const [isInformaticsLocked, setIsInformaticsLocked] = useState(true)
  const [isMathDone, setIsMathDone] = useState(false)
  const [isEnglishDone, setIsEnglishDone] = useState(false)
  const [isPhysicsDone, setIsPhysicsDone] = useState(false)
  const [isInformaticsDone, setIsInformaticsDone] = useState(false)
  const [mathQuizData, setMathQuizData] = useState([{}])
  const [englishQuizData, setEnglishQuizData] = useState([{}])
  const [physicsQuizData, setPhysicsQuizData] = useState([{}])
  const [informaticsQuizData, setInformaticsQuizData] = useState([{}])

  const [isHtmlCssDone, setIsHtmlCssDone] = useState(false)
  const [htmlCssQuizData, setHtmlCssQuizData] = useState([{}])
  const [isJavaDone, setIsJavaDone] = useState(false)
  const [javaQuizData, setJavaQuizData] = useState([{}])
  const [isJavaScriptDone, setIsJavaScriptDone] = useState(false)
  const [javaScriptData, setJavaScriptQuizData] = useState([{}])
  const [isDatabaseDone, setIsDatabaseDone] = useState(false)
  const [databaseData, setDatabaseQuizData] = useState([{}])

  // const [informaticsQuizData, setInformaticsQuizData] = useState([{}])
  // const [informaticsQuizData, setInformaticsQuizData] = useState([{}])

  const [isPrimaryStudentStagePromptVisible, setIsPrimaryStudentStagePromptVisible] = useState(false)
  const [isSecondaryStudentStagePromptVisible, setIsSecondaryStudentStagePromptVisible] = useState(false)
  const [isHighSchoolStudentStagePromptVisible, setIsHighSchoolStudentStagePromptVisible] = useState(false)
  const [isLaterButtonPromptClicked, setIsLaterButtonPromptClicked] = useState(false)

  function skipPrimaryStudentStage() {
    characterCtx.setAge(11)
    characterCtx.setLifeTimeCounter(0)
    characterCtx.setLifeTimeCounter(1320)
  }

  function skipSecondaryStudentStage() {
    characterCtx.setAge(15)
    characterCtx.setLifeTimeCounter(0)
    characterCtx.setLifeTimeCounter(1800)
  }

  function skipHighSchoolStudentStage() {
    characterCtx.setAge(18)
    characterCtx.setLifeTimeCounter(0)
    characterCtx.setLifeTimeCounter(2160)
  }

  useEffect(() => {
    if (characterCtx.age >=6 && characterCtx.age < 11) {
      setEducationLevel("primary")
    } else if (characterCtx.age >=11 && characterCtx.age < 15) {
      setEducationLevel("secondary")
    } else if (characterCtx.age >=15 && characterCtx.age < 18) {
      setEducationLevel("highSchool")
    } else if (characterCtx.age >=18) {
      setEducationLevel("university")
    }
    
  }, [characterCtx.age])

  useEffect(() => {
    switch(educationLevel) {
      case "primary": {
        setIsMathLocked(false)
        setIsEnglishLocked(false)
        setMathQuizData(math[0])
        setEnglishQuizData(eng[0])
        break;
      }
      case "secondary": {
        setIsMathLocked(false)
        setIsEnglishLocked(false)
        setIsPhysicsLocked(false)
        setMathQuizData(math[1])
        setEnglishQuizData(eng[1])
        setPhysicsQuizData(physics[0])
        break;
      }
      case "highSchool": {
        setIsMathLocked(false)
        setIsEnglishLocked(false)
        setIsPhysicsLocked(false)
        setIsInformaticsLocked(false)
        setMathQuizData(math[2])
        setEnglishQuizData(eng[2])
        setPhysicsQuizData(physics[1])
        setInformaticsQuizData(tech[0])
        break;
      }
      case "university": {
        setJavaQuizData(quizJava)
        setJavaScriptQuizData(quizJs)
        setHtmlCssQuizData(quizHtmlCSS)
        setDatabaseQuizData(quizDatabase)
        break;
      }
    }
  }, [educationLevel])

  useFocusEffect(
    useCallback(() => {
      switch(educationLevel) {
        case "primary": {
          setIsMathDone(characterCtx.education.primary.mathematics)
          setIsEnglishDone(characterCtx.education.primary.english)
          if (characterCtx.education.primary.mathematics == true && characterCtx.education.primary.english == true && !isLaterButtonPromptClicked) {
            setIsPrimaryStudentStagePromptVisible(true)
          }
          break;
        }
        case "secondary": {
          setIsMathDone(characterCtx.education.secondary.mathematics)
          setIsEnglishDone(characterCtx.education.secondary.english)
          setIsPhysicsDone(characterCtx.education.secondary.physics)
          if (characterCtx.education.secondary.mathematics == true && 
            characterCtx.education.secondary.english == true && 
            characterCtx.education.secondary.physics == true && 
            !isLaterButtonPromptClicked) {
            setIsSecondaryStudentStagePromptVisible(true)
          }
          break;
        }
        case "highSchool": {
          setIsMathDone(characterCtx.education.highSchool.mathematics)
          setIsEnglishDone(characterCtx.education.highSchool.english)
          setIsPhysicsDone(characterCtx.education.highSchool.physics)
          setIsInformaticsDone(characterCtx.education.highSchool.informatics)
          if (characterCtx.education.highSchool.mathematics == true && 
            characterCtx.education.highSchool.english == true && 
            characterCtx.education.highSchool.physics == true && 
            characterCtx.education.highSchool.physics == true && 
            !isLaterButtonPromptClicked) {
            setIsSecondaryStudentStagePromptVisible(true)
          }
          break;
        }
        case "university": {
          setIsHtmlCssDone(characterCtx.education.university.htmlCss)
          setIsJavaScriptDone(characterCtx.education.university.javaScript)
          setIsJavaDone(characterCtx.education.university.java)
          setIsDatabaseDone(characterCtx.education.university.database)
        }
      }
    })
  )

  function exit() {
    navigation.goBack();
  }

  return (
    <ImageBackground
      source={require("../../../assets/backgroundGameQuiz.png")}
      style={styles.container}>
      <ExitButton onPress={exit} />

      <View style={styles.header}>
        <ItalicText text="QUIZZ" size={40} />
      </View>
      <View style={styles.levelWrapper}>
          <ItalicText text= { "LEVEL: " + educationLevel.toUpperCase()} size={26} />
      </View>
      {
        characterCtx.age >= 18 
        ?
        <View style={styles.grid}>
          <View style={styles.row}>
            <QuizOption isLocked={false} isDone={isJavaDone} educationLevel={educationLevel} subjectName={"JAVA"} subjectData={javaQuizData} imageSource={JavaIcon} title={"Java"} />
            <QuizOption isLocked={false} isDone={isHtmlCssDone} educationLevel={educationLevel} subjectName={"HTML & CSS"} subjectData={htmlCssQuizData} imageSource={HtmlCssIcon} title={"Html & Css"} />
          </View>
          <View style={styles.row}>
            <QuizOption isLocked={false} isDone={isJavaScriptDone} educationLevel={educationLevel} subjectName={"JAVASCRIPT"} subjectData={javaScriptData} imageSource={JavaScriptIcon} title={"JavaScript"} />
            <QuizOption isLocked={false} isDone={isDatabaseDone} educationLevel={educationLevel} subjectName={"DATABASE"} subjectData={databaseData} imageSource={DatabaseIcon} title={"Database"} />
          </View>
        </View>
        :
        <View style={styles.grid}>
          <View style={styles.row}>
            <QuizOption isLocked={isMathLocked} isDone={isMathDone} educationLevel={educationLevel} subjectName={"MATHEMATICS"} subjectData={mathQuizData} imageSource={MathIcon} title={"Mathematics"} />
            <QuizOption isLocked={isEnglishLocked} isDone={isEnglishDone} educationLevel={educationLevel} subjectName={"ENGLISH"} subjectData={englishQuizData} imageSource={EngIcon} title={"English"} />
          </View>
          <View style={styles.row}>
            <QuizOption isLocked={isPhysicsLocked} isDone={isPhysicsDone} educationLevel={educationLevel} subjectName={"PHYSICS"} subjectData={physicsQuizData} imageSource={PhysicsIcon} title={"Physics"} />
            <QuizOption isLocked={isInformaticsLocked} isDone={isInformaticsDone} educationLevel={educationLevel} subjectName={"INFORMATICS"} subjectData={informaticsQuizData} imageSource={InfoIcon} title={"Informatics"} />
          </View>
        </View>
      }
      
      {
        characterCtx.age < 11 && isPrimaryStudentStagePromptVisible &&
        <>
          <Prompt
            message={
              "Enough conditions to skip primary student stage. Want to skip?"
            }
            isNoButtonVisible={false}
            isLaterButtonVisible={true}
            buttonLaterFunction={() => {
              setIsPrimaryStudentStagePromptVisible(false)
              setIsLaterButtonPromptClicked(true)
            }}
            buttonYesFunction={skipPrimaryStudentStage}
          />
          <DarkOverlay />
        </>
      }
      {
        characterCtx.age < 15 && isSecondaryStudentStagePromptVisible &&
        <>
          <Prompt
            message={
              "Enough conditions to skip secondary student stage. Want to skip?"
            }
            isNoButtonVisible={false}
            isLaterButtonVisible={true}
            buttonLaterFunction={() => {
              setIsSecondaryStudentStagePromptVisible(false)
              setIsLaterButtonPromptClicked(true)
            }}
            buttonYesFunction={skipSecondaryStudentStage}
          />
          <DarkOverlay />
        </>
      }
      {
        characterCtx.age < 18 && isHighSchoolStudentStagePromptVisible &&
        <>
          <Prompt
            message={
              "Enough conditions to skip high school student stage. Want to skip?"
            }
            isNoButtonVisible={false}
            isLaterButtonVisible={true}
            buttonLaterFunction={() => {
              setIsHighSchoolStudentStagePromptVisible(false)
              setIsLaterButtonPromptClicked(true)
            }}
            buttonYesFunction={skipHighSchoolStudentStage}
          />
          <DarkOverlay />
        </>
      }
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  levelWrapper: {
    marginTop: 30,
    
  },
  level: {
    fontSize: 26, fontWeight: "bold",
  },
  grid: {
    flex: 1, // Make the container take up the full screen
    justifyContent: "space-a", // Center items vertically
    alignItems: "center", // Center items horizontally
    flexDirection: "column", // Default direction but added for clarity
    padding: 10, // Padding around the grid
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default QuizMenuScreen;
