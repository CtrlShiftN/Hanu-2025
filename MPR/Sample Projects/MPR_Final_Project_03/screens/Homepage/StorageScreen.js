import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import StorageItem from "../../components/ui/items/StorageItem";

function StorageScreen() {
  const authCtx = useContext(AuthContext);
  const items = authCtx.userData?.items;

  return (
    <View style={styles.rootContainer}>
      {items.length > 0 && (
        <>
          <Title>Storage</Title>
          {items.map((item, index) => {
            return <StorageItem key={index} name={item} />;
          })}
        </>
      )}
    </View>
  );
}

export default StorageScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
});
