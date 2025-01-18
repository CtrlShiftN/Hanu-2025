import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import FriendListItem from "../../components/ui/items/FriendListItem";

function FriendListScreen() {
  const authCtx = useContext(AuthContext);
  const friends = authCtx.userData?.friends;

  return (
    <View style={styles.rootContainer}>
      {friends.length > 0 && (
        <>
          <Title>Friends</Title>
          {friends.map((friend, index) => {
            return <FriendListItem key={index} name={friend} />;
          })}
        </>
      )}
    </View>
  );
}

export default FriendListScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
});
