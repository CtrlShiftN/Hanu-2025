import {
  View,
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "../CustomText/CustomText";
import RewardButton from "./RewardButton";
import { getPlayerRedux } from "../../redux/data";
import { useDispatch } from "react-redux";

/**
 * @param {*} visible - Change this to true when this Component needs to show up
 * @param {*} currentDay - The number of days user has logged in
 * @returns DailyRewardWindow
 */
export default function DailyRewardWindow({ visible, currentDay, close, dailyLoginStreak = [false, false, false, false,false,false,false] }) {
  const dispatch = useDispatch()
  // an array of bool value to indicate whether the reward on a day has been received yet
  const [isReceivedArray, setIsReceivedArray] = useState(dailyLoginStreak);

  // state to show/hide the daily reward window
  const [isVisible, setIsVisible] = useState(visible);

  // fake data to test
  // note: reward should be something like:
  // reward: [
  //   {
  //     type: , // what should be increased
  //     value: , // how much should it be increased
  //     img: , // the icon, eg: money.png, ...
  //   }
  // ]
  const days = [
    { id: 1, day: "Day 1", completed: false, reward: 10, payload: {amount: "+10"} },
    { id: 2, day: "Day 2", completed: false, reward: 10, payload: {amount: "+10"} },
    { id: 3, day: "Day 3", completed: false, reward: 10, payload: {amount: "+10"} },
    { id: 4, day: "Day 4", completed: false, reward: 10, payload: {amount: "+10"} },
    { id: 5, day: "Day 5", completed: false, reward: 10, payload: {amount: "+10"} },
    { id: 6, day: "Day 6", completed: false, reward: 10, payload: {amount: "+10"} },
    { id: 7, day: "Day 7", completed: false, reward: [10, 10, 10], payload: {amount: "+30"} },
  ];

  const claimReward = (index) => {
    // update the isReceivedArray to update the state of the reward
    const lastTimeReceived = getPlayerRedux().lastDayDailyReward
    const currentTime = new Date().getTime()
    
    if(  currentTime - lastTimeReceived > 1000 * 60 * 60 * 24  ) {
      if (days[index].id !== currentDay) {
        Alert.alert("Oops!", "This reward can't be received yet...");
      }
      if (days[index].id === currentDay) {
        dispatch({type: "MODIFY_STATISTIC", payload: days[index].payload})
        dispatch({type: "UPDATE_DAILY_REWARD_DAY"})
        setIsReceivedArray((prevArray) => {
          const newArray = [...prevArray];
          newArray[index] = !newArray[index];
          return newArray;
        });
      }
    } else {
      alert("Comeback tommorrow to receive!!!")
    }
  };

  // close the modal
  const closeDailyReward = () => {
    if(isReceivedArray[currentDay - 1]) {
      dispatch({type: "UPDATE_DAILY_REWARD_COUNT", payload: 1})
      dispatch({type: "UPDATE_DAILY_REWARD_STREAK", payload: isReceivedArray})   
    }
    setIsVisible(!isVisible);
    close();
  };

  return (
    <Modal transparent visible={isVisible} style={styles.container}>
      <View style={styles.modalBackground}>
        <View style={styles.modalHeader}>
          <View style={styles.dashedHeaderBorder}>
            <CustomText fontSize={25} fontWeight="bold" color="white">
              Daily Reward
            </CustomText>
          </View>
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.rewardBtnsContainer}>
            {days.slice(0, 3).map((day, index) => (
              <RewardButton
                key={index}
                day={day.day}
                rewards={day.reward}
                isReceived={isReceivedArray[index]}
                onPress={() => claimReward(index)}
              />
            ))}
          </View>

          <View style={styles.rewardBtnsContainer}>
            {days.slice(3, 6).map((day, index) => (
              <RewardButton
                key={index}
                day={day.day}
                rewards={day.reward}
                isReceived={isReceivedArray[index + 3]}
                onPress={() => claimReward(index + 3)}
              />
            ))}
          </View>
          <View style={styles.rewardBtnsContainer}>
            <RewardButton
              key={6}
              day={days[6].day}
              rewards={days[6].reward}
              isReceived={isReceivedArray[6]}
              onPress={() => claimReward(6)}
            />
          </View>
        </View>
        <View style={styles.claimButtonContainer}>
          <TouchableOpacity
            style={styles.claimButton}
            onPress={closeDailyReward}
          >
            <CustomText color="#059862" fontSize={20} fontWeight="bold">
              Close
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  modalContainer: {
    // flex: 1,
    position: "absolute",
    width: "80%",
    // height: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#059862",
    borderWidth: 10,
    borderRadius: 35,
    backgroundColor: "white",
    paddingTop: "4%",
  },
  rewardBtnsContainer: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  modalHeader: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "24%",
    zIndex: 1,
    backgroundColor: "#00E38F",
    width: "60%",
    height: "9%",
    borderRadius: 12,
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 5,
  },
  dashedHeaderBorder: {
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 13,
    width: "90%",
    height: "85%",
  },
  claimButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "26%",
    backgroundColor: "#8EFF58",
    borderRadius: 7,
    width: "30%",
    height: "5%",
    borderColor: "black",
    borderWidth: 1,
  },
  claimButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // height: "100%",
  },
});
