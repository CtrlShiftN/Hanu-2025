import { View, StyleSheet } from "react-native";
import { items } from "../../data/items/items";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import EquipmentItem from "../../components/ui/items/EquipmentItem";
import Title from "../../components/ui/Title";

function ItemListScreen() {
  const authCtx = useContext(AuthContext);

  return (
    <View style={styles.rootContainer}>
      <Title>Items</Title>
      {items.map((item, index) => {
        const isBought = authCtx.userData?.items.includes(item.name);
        if (!isBought) {
          return (
            <EquipmentItem
              key={index}
              name={item.name}
              money={item.money}
              requirements={item.requirements}
              btn={"Buy"}
            />
          );
        } else {
          return null;
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ItemListScreen;
