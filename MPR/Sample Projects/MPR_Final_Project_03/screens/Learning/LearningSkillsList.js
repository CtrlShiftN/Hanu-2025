import { View, StyleSheet } from "react-native";
import { skills } from "../../data/learning/dummy-skills";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import LearningItem from "../../components/ui/items/LearningItem";

function LearningSkillsList() {
  const authCtx = useContext(AuthContext);
  const learnedSkills = authCtx.userData?.learned?.learnedSkills;
  return (
    <View style={styles.rootContainer}>
      <Title>Skills</Title>
      {skills.map((skill, index) => {
        return (
          <LearningItem
            key={index}
            name={skill.name}
            requirements={skill.requirements}
            time={skill.time}
            health={skill.health}
            iq={skill.iq}
            happiness={skill.happiness}
            money={skill.money}
            isLearned={learnedSkills.includes(skill.name)}
            type={"skill"}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 10,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default LearningSkillsList;
