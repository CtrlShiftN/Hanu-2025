import { View, StyleSheet } from "react-native";
import { main_job } from "../../data/work/main-jobs";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import WorkItem from "../../components/ui/items/WorkItem";

function MainJobScreen() {
  const authCtx = useContext(AuthContext);
  const currentWorking = authCtx.userData?.currentWorking;
  return (
    <View style={styles.rootContainer}>
      <Title>Main Job</Title>
      {main_job.map((item, index) => {
        return (
          <WorkItem
            key={index}
            name={item.name}
            requirements={item.requirements}
            time={item.time}
            health={item.health}
            iq={item.iq}
            happiness={item.happiness}
            salary={item.salary}
            btn={"Apply"}
            type={"main"}
            isWorking={currentWorking.main.includes(item.name)}
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
export default MainJobScreen;
