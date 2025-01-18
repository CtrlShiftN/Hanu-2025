import { View, StyleSheet } from "react-native";
import { courses } from "../../data/learning/dummy-courses";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import LearningItem from "../../components/ui/items/LearningItem";

function LearningCoursesList() {
  const authCtx = useContext(AuthContext);
  const learnedCourses = authCtx.userData?.learned?.learnedCourses;

  return (
    <View style={styles.rootContainer}>
      <Title>Courses</Title>
      {courses.map((course, index) => {
        return (
          <LearningItem
            key={index}
            name={course.name}
            requirements={course.requirements}
            time={course.time}
            health={course.health}
            iq={course.iq}
            happiness={course.happiness}
            money={course.money}
            isLearned={learnedCourses.includes(course.name)}
            type={"course"}
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
export default LearningCoursesList;
