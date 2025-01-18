import { ScrollView, } from "react-native";
import ScreenLayout from "./GeneralComs/ScreenLayout";
import LearingDegreesList from "./Learning/LearingDegreesList";
import LearningSkillsList from "./Learning/LearningSkillsList";
import LearningCoursesList from "./Learning/LearningCoursesList";
import LearingLanguagesList from "./Learning/LearingLanguagesList";
function LearningScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <LearingDegreesList />
        <LearningSkillsList />
        <LearningCoursesList />
        <LearingLanguagesList />
      </ScrollView>
    </ScreenLayout>
  );
}

export default LearningScreen;