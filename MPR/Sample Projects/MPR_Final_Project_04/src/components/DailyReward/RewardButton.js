import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../CustomText/CustomText";

/**
 *
 * @param {*} day - the Day of reward
 * @param {*} reward - the reward
 * @param {*} isReceived - whether the reward is received or not
 * @returns
 */
export default function RewardButton({ day, rewards, isReceived, onPress }) {
  return (
    <TouchableOpacity
      disabled={isReceived} // to disable the button once it's been clicked
      style={[
        styles.innerContainer,
        {
          backgroundColor: isReceived ? "#9CFF6D" : "#9CFF6D",
          width: Array.isArray(rewards) ? "50%" : "25%",
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        { false && isReceived ? (
          <Image
            style={styles.isChecked}
            source={require("../../assets/images/icon/ticked.png")}
          />
        ) : null}
        <View>
          <CustomText color="#059862" fontWeight="bold" fontSize={15}>
            {day}
          </CustomText>
        </View>
        {Array.isArray(rewards) ? (
          <View style={styles.rewardsContainer}>
            {rewards.map((reward, index) => (
              <View key={index} style={styles.normalReward}>
                {/* change the path of the img to be something like reward.img */}
                {isReceived ? <Image
                  style={styles.isChecked}
                  source={require("../../assets/images/icon/ticked.png")}
                /> : <Image source={require(`../../assets/images/icon/coin.png`)} />}
                
                <CustomText color="#059862" fontSize={10} fontWeight="bold">
                  +{reward}$
                </CustomText>
              </View>
            ))}
          </View>
        ) : (
          renderSingleReward(rewards, isReceived)
        )}
      </View>
    </TouchableOpacity>
  );
}
const renderSingleReward = (reward, isReceived) => (
  <View style={styles.normalReward}>
    {/* change the path of the img to be something like reward.img */}
    {isReceived ? <Image
                  style={styles.isChecked}
                  source={require("../../assets/images/icon/ticked.png")}
                /> : <Image source={require(`../../assets/images/icon/coin.png`)} />}
    <CustomText color="#059862" fontSize={10} fontWeight="bold">
      +{reward}$
    </CustomText>
  </View>
);

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: "center",
    borderColor: "#059862",
    borderWidth: 3,
    borderRadius: 15,
    marginVertical: "2%",
    marginHorizontal: "2%",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  rewardsContainer: {
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  normalReward: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
});
