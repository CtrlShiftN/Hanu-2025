import { View, StyleSheet } from "react-native";
import { leisure } from "../../data/relax/leisure";
import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";

function LeisureScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Leisure</Title>
      {leisure.map((item, index) => {
        return (
          <Item
            key={index}
            name={item.name}
            requirements={item.requirements}
            time={item.time}
            health={item.health}
            iq={item.iq}
            happiness={item.happiness}
            money={item.money}
            btn={"Join in"}
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
export default LeisureScreen;
