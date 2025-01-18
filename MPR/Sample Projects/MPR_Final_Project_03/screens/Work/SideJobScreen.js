import { View, StyleSheet } from "react-native";
import { side_job } from "../../data/work/side-jobs";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import WorkItem from "../../components/ui/items/WorkItem";

function SideJobScreen() {
  const authCtx = useContext(AuthContext);
  const currentWorking = authCtx.userData?.currentWorking;

  return (
    <View style={styles.rootContainer}>
      <Title>Side Job</Title>
      {side_job.map((item, index) => {
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
            type={"side"}
            isWorking={currentWorking.side.includes(item.name)}
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
export default SideJobScreen;
