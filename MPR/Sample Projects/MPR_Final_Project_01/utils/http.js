import axios from "axios";

const BACKEND_URL = "https://i-am-developer-45afc-default-rtdb.firebaseio.com/";

export async function storeCharacterInfo(characterInfo) {
  // const
  const response = await axios.post(
    BACKEND_URL + "/characters.json",
    characterInfo
  );
  const id = response.data.name;
  return id;
}

export async function fetchCharacterInfo(characterCtx) {
  const response = await axios.get(BACKEND_URL + "/characters.json");
  for (const key in response.data) {
    if (response.data[key].userEmail == characterCtx.userEmail) {
      characterCtx.setId(response.data[key].id)
      characterCtx.createCharacterName(response.data[key].characterName)
      if (typeof response.data[key].symptoms === "undefined") {
        characterCtx.setSymptoms([])
      } else {
        characterCtx.setCurrentJobs(response.data[key].currentJobs)
        characterCtx.setSymptoms(response.data[key].symptoms)
      }
      characterCtx.setCharacterImage(response.data[key].characterImage)
      if (typeof response.data[key].currentJobs === "undefined") {
        characterCtx.setCurrentJobs([])
      } else {
        characterCtx.setCurrentJobs(response.data[key].currentJobs)
      }
      characterCtx.setFinancialManagement(response.data[key].financialManagement)
      characterCtx.setEducation(response.data[key].education)
      characterCtx.setIncome(response.data[key].income)
      characterCtx.setAge(response.data[key].age)
      characterCtx.setHealthPoint(response.data[key].healthPoint)
      characterCtx.setDateInfo(response.data[key].dateInfo)
      characterCtx.setHappinessPoint(response.data[key].happinessPoint)
      characterCtx.setLifeTimeCounter(response.data[key].lifeTimeCounter)
      characterCtx.setDailyRewardTracking(response.data[key].dailyRewardTracking)
      characterCtx.setSymptomsProbability(response.data[key].symptomsProbability)
      break;
    }
  }
}

export function updateCharacterInfo(characterCtx) {
  const characterInfo = {
    id: characterCtx.id,
    userEmail: characterCtx.userEmail,
    characterImage: characterCtx.characterImage,
    characterName: characterCtx.characterName,
    income: characterCtx.income,
    lifeTimeCounter: characterCtx.lifeTimeCounter,
    healthPoint: characterCtx.healthPoint,
    age: characterCtx.age,
    education: characterCtx.education,
    happinessPoint: characterCtx.happinessPoint,
    dateInfo: characterCtx.dateInfo,
    dailyRewardTracking: characterCtx.dailyRewardTracking,
    financialManagement: characterCtx.financialManagement,
    currentJobs: characterCtx.currentJobs,
    symptoms: characterCtx.symptoms,
    symptomsProbability: characterCtx.symptomsProbability,
  }
  return axios.put(BACKEND_URL + `/characters/${characterCtx.id}.json`, characterInfo);
}