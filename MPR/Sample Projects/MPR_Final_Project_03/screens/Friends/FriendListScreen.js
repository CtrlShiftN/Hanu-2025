import { View, StyleSheet } from "react-native";
import { friends } from "../../data/friends/dummy-friends";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import Title from "../../components/ui/Title";
import FriendItem from "../../components/ui/items/FriendItem";

function FriendListScreen() {
  const authCtx = useContext(AuthContext);
  const userAge = authCtx.userData?.age;
  const friendsList = authCtx.userData?.friends;
  return (
    <View style={styles.rootContainer}>
      <Title>People around you</Title>
      {friends.map((friend, index) => {
        const ageGap = Math.abs(userAge - friend.age);
        const isAddFriend = friendsList.includes(friend.name);
        if (ageGap <= 5 || isAddFriend) {
          return (
            <FriendItem
              key={index}
              name={friend.name}
              hobbies={friend.hobbies}
              age={friend.age}
              gender={friend.gender}
              health={friend.health}
              iq={friend.iq}
              happiness={friend.happiness}
            />
          );
        }
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
});

export default FriendListScreen;
