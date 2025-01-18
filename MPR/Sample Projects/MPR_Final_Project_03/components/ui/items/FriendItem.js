import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../../store/auth-context";
import { useContext } from "react";

import IndexText from "../IndexText";
import ButtonItem from "../buttons/ButtonItem";
import IconButton from "../buttons/IconButton";

function FriendItem({ name, age, hobbies, gender, happiness }) {
  const authCtx = useContext(AuthContext);
  const isFriend = authCtx.userData?.friends.includes(name);
  const isDifferentGender = authCtx.userData?.userGender !== gender;
  const isInRelationship = authCtx.userData?.lover.length === 1;
  const isLover = authCtx.userData?.lover.includes(name);

  const friendHandler = () => {
    if (name) {
      authCtx.updateFriends(name);
      authCtx.updateIndex({
        happiness: 1,
      });
    }
  };
  const unFriendHandler = () => {
    if (name) {
      authCtx.removeFriends(name);
      authCtx.updateIndex({
        happiness: -2,
      });
    }
  };
  const dateFriendHandler = () => {
    if (name) {
      authCtx.dateFriends(name);
      authCtx.updateIndex({
        happiness: 5,
      });
    }
  };
  const breakUpHandler = () => {
    if (name) {
      authCtx.breakUpFriends(name);
      authCtx.updateIndex({
        happiness: -5,
      });
    }
  };
  const [fontsLoaded] = useFonts({
    NTSomicMedium: require("../../../assets/fonts/NTSomic-Medium.ttf"),
    UnboundedSemibold: require("../../../assets/fonts/Unbounded-SemiBold.ttf"),
    UnboundedMedium: require("../../../assets/fonts/Unbounded-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{name}</Text>
        {!isFriend && (
          <ButtonItem children={"Add friend"} onPress={friendHandler} />
        )}
        {!isInRelationship && isDifferentGender && isFriend && (
          <ButtonItem children={"Date"} onPress={dateFriendHandler} />
        )}
        {!isLover && isFriend && (
          <IconButton
            icon={"deleteuser"}
            size={24}
            color={Colors.darkBlue}
            onPress={unFriendHandler}
          />
        )}
        {isLover && isDifferentGender && isFriend && (
          <ButtonItem children={"Break up"} onPress={breakUpHandler} />
        )}
      </View>

      <View style={styles.innerContainer2}>
        <View style={styles.informationContainer}>
          <View style={styles.innerInforContainer}>
            <Text style={styles.title}>Age:</Text>
            <Text style={styles.inforText}>{age}</Text>
          </View>
          <View style={styles.innerInforContainer}>
            <Text style={styles.title}>Gender:</Text>
            <Text style={styles.inforText}>{gender}</Text>
          </View>

          <View style={styles.innerInforContainer}>
            <Text style={styles.title}>Hobbies: </Text>
            <View>
              {hobbies.map((hobby, index) => (
                <Text key={index} style={styles.inforText}>
                  - {hobby}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.indexContainer}>
          <IndexText isIncrease={happiness.isIncrease}>
            {happiness.index}
          </IndexText>
          <Ionicons name="happy" color={Colors.yellowHappiness} size={25} />
        </View>
      </View>
    </View>
  );
}

export default FriendItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.item,
    marginHorizontal: 20,
    width: "90%",
    padding: 20,
    borderRadius: 20,
    maxHeight: 200,
    marginTop: 10,
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontFamily: "NTSomicMedium",
    fontSize: 20,
    flex: 1,
    color: Colors.black,
  },

  innerContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 5,
  },

  informationContainer: {
    flex: 1,
  },

  innerInforContainer: {
    flexDirection: "row",
  },

  title: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.gray,
    width: 70,
  },

  inforText: {
    fontFamily: "NTSomicMedium",
    fontSize: 15,
    color: Colors.black,
    marginLeft: 10,
  },

  indexContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },

  pressed: {
    opacity: 0.7,
  },
});
