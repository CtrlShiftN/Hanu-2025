import { View, StyleSheet } from "react-native";
import { sports } from "../../data/relax/dummy-sports";
import Item from "../../components/ui/items/Item";
import Title from "../../components/ui/Title";
function SportsScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Sports</Title>
      {sports.map((item, index) => {
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
            btn={"Play"}
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
export default SportsScreen;
