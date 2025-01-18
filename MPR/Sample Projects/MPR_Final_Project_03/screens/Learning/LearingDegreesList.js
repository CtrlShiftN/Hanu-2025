import { View, StyleSheet } from "react-native";
import { degrees } from "../../data/learning/dummy-degrees";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import LearningItem from "../../components/ui/items/LearningItem";

function LearingDegreesList() {
  const authCtx = useContext(AuthContext);
  const learnedDegrees = authCtx.userData?.learned.learnedDegrees;

  return (
    <View style={styles.rootContainer}>
      <Title>Degrees</Title>
      {degrees.map((degree, index) => (
        <LearningItem
          key={index}
          name={degree.name}
          requirements={degree.requirements}
          time={degree.time}
          health={degree.health}
          iq={degree.iq}
          happiness={degree.happiness}
          money={degree.money}
          times={degree.times}
          isLearned={learnedDegrees.includes(degree.name)}
        />
      ))}
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
export default LearingDegreesList;
