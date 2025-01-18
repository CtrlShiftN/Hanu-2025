import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { useContext } from "react";
import { AuthContext } from "../../../store/auth-context";

import { Colors } from "../../../constants/styles";
import IconButton from "../buttons/IconButton";

function FriendListItem({ name }) {
  const authCtx = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const unFriendHandler = () => {
    if (name) {
      authCtx.removeFriends(name);
      authCtx.updateIndex({
        happiness: -2,
      });
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{name}</Text>
        <IconButton
            icon={"deleteuser"}
            size={24}
            color={Colors.darkBlue}
            onPress={unFriendHandler}
          />
      </View>
    </View>
  );
}

export default FriendListItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "space-between",
    maxHeight: 200,
    marginTop: 10,
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  title: {
    fontFamily: "NTSomicMedium",
    fontSize: 20,
    flex: 1,
    color: Colors.black,
  },
});
