import { createContext, useState } from "react";

export const CharacterContext = createContext({
  id: "",
  userEmail: "",
  characterImage: "",
  characterName: "",
  income: 0,
  lifeTimeCounter: 0,
  healthPoint: 100,
  age: 0,
  education: {},
  happinessPoint: 0,
  dateInfo: {},
  dailyRewardTracking: {},
  financialManagement: [{date: new Date(), transactionType: "", description: "", transactionCoin: 0}],
  currentJobs: [],
  symptoms: [],
  symptomsProbability: {},
  setId: () => {},
  setSymptomsProbability: () => {},
  setSymptoms: () => {},
  setCharacterImage: () => {},
  setCurrentJobs: (newJob) => {},
  setFinancialManagement: () => {},
  setDailyRewardTracking: (dailyRewardTracking) => {},
  setLifeTimeCounter: (lifeTimeCounter) => {},
  setUserEmail: (userEmail) => {},
  createCharacterName: (characterName) => {},
  addIncome: (amount) => {},
  setIncome: (amount) => {},
  minusIncome: (amount) => {},
  setAge: (age) => {},
  setHealthPoint: (healthPoint) => {},
  setEducation: (education) => {},
  setHappinessPoint: (happinessPoint) => {},
  setDateInfo: (dateInfo) => {},
  setDateInfo: (dateInfo) => {},
});

function CharacterContextProvider({ children }) {
  const [id, setId] = useState("")
  const [userEmail, setUserEmail] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [income, setIncome] = useState(0);
  const [age, setAge] = useState(0);
  const [lifeTimeCounter, setLifeTimeCounter] = useState(0)
  const [healthPoint, setHealthPoint] = useState(100)
  const [happinessPoint, setHappinessPoint] = useState(0)
  const [currentJobs, setCurrentJobs] = useState([])
  const [characterImage, setCharacterImage] = useState(require("../assets/character-image/characterAge00.png"))
  const [symptoms, setSymptoms] = useState([])
  const [symptomsProbability, setSymptomsProbability] = useState({
    headache: 20,
    fever: 20,
    nausea: 20,
    toothache: 20,
    flu: 20,
    covid: 20,
  })
  const [dateInfo, setDateInfo] = useState({
    isLoveAccepted: false,
    lovePoint: 0,
  })
  const [dailyRewardTracking, setDailyRewardTracking] = useState({
    isDay01Got: false,
    isDay01AllowGot: true,
    isDay02Got: false,
    isDay02AllowGot: false,
    isDay03Got: false,
    isDay03AllowGot: false,
    isDay04Got: false,
    isDay04AllowGot: false,
  })
  const [financialManagement, setFinancialManagement] = useState([])

  const [education, setEducation] = useState({
    "primary" : {
      "mathematics" : false,
      "english": false,
    },
    "secondary" : {
      "mathematics": false,
      "english": false,
      "physics": false,
    },
    "highSchool": {
      "mathematics": false,
      "english": false,
      "physics": false,
      "informatics": false,
    },
    "university": {
      "htmlCss": false,
      "javaScript": false,
      "java": false,
      "database": false,
    }
  })

  function createCharacterName(characterName) {
    setCharacterName(characterName);
  }

  function addIncome(amount, description) {
    setFinancialManagement(( prevValue ) => {
      return(
        [...prevValue, {date: new Date(), transactionType: "income", description: description, transactionCoin: amount}]
      )
    })
    setIncome((prevIncome) => (prevIncome += amount));
  }

  function minusIncome(amount, description) {
    setFinancialManagement((prevValue) => {
      return(
        [...prevValue, {date: new Date(), transactionType: "expense", description: description, transactionCoin: amount}]
      )
    })
    setIncome((prevIncome) => (prevIncome -= amount));
  }

  const value = {
    id: id,
    userEmail: userEmail,
    characterImage: characterImage,
    characterName: characterName,
    income: income,
    age: age,
    healthPoint: healthPoint,
    education: education,
    dateInfo: dateInfo,
    happinessPoint: happinessPoint,
    lifeTimeCounter: lifeTimeCounter,
    dailyRewardTracking: dailyRewardTracking,
    financialManagement: financialManagement,
    currentJobs: currentJobs,
    symptoms: symptoms,
    symptomsProbability: symptomsProbability,
    setId: setId,
    setSymptoms: setSymptoms,
    setCharacterImage: setCharacterImage,
    setCurrentJobs: setCurrentJobs,
    setFinancialManagement: setFinancialManagement,
    setEducation: setEducation,
    setUserEmail: setUserEmail,
    createCharacterName: createCharacterName,
    addIncome: addIncome,
    setIncome: setIncome,
    minusIncome: minusIncome,
    setAge: setAge,
    setHealthPoint: setHealthPoint,
    setDateInfo: setDateInfo,
    setHappinessPoint: setHappinessPoint,
    setLifeTimeCounter: setLifeTimeCounter,
    setDailyRewardTracking: setDailyRewardTracking,
    setSymptomsProbability: setSymptomsProbability,
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterContextProvider;
