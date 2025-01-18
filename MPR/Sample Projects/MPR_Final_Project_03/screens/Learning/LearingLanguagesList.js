import { View, StyleSheet } from "react-native";
import { languages } from "../../data/learning/dummy-languages";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import LearningItem from "../../components/ui/items/LearningItem";

function LearingLanguagesList() {
  const authCtx = useContext(AuthContext);
  const learnedLanguages = authCtx.userData?.learned?.learnedLanguages;

  return (
    <View style={styles.rootContainer}>
      <Title>Languages</Title>
      {languages.map((language, index) => {
        return (
          <LearningItem
            key={index}
            name={language.name}
            requirements={language.requirements}
            time={language.time}
            health={language.health}
            iq={language.iq}
            happiness={language.happiness}
            money={language.money}
            type={"language"}
            isLearned={learnedLanguages.includes(language.name)}
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
export default LearingLanguagesList;
