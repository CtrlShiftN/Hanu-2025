import { View, Modal, StyleSheet, Image, BackHandler } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "./colors";
import AnswerButton from "./AnswerButton";
import { useDispatch } from "react-redux";
import CustomText from "../CustomText/CustomText";
import { getPlayerRedux } from "../../redux/data";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase/config";
import { collection, setDoc, doc } from "firebase/firestore";

/**
 * @param {*} visible - the modal is shown or not
 * @param {*} event - the type of event happen to the character
 * @param {*} eventType - the type of event that happens to player [red, yellow, green]
 * @param {*} question - the description or the question that user has to answer to decide their path
 * @param {*} options - the list of options for user to choose
 * @returns {React.ReactElement} The popup modal to show event that happen to the user's character.
 */
export default function PopupModal({
  visible,
  event,
  eventType = "yellow",
  question,
  options,
  onChooseOption,
  player = getPlayerRedux(),
  hideFunction
}) {
  const [showNotiModal, setShowNotiModal] = useState(false); // state to show/hide the notiPopup
  const dispatch = useDispatch()
  const navigation = useNavigation()
  // Define a function to determine the border color based on eventType
  const getBorderColor = () => {
    switch (eventType) {
      case "red":
        return colors.red;
      case "yellow":
        return colors.yellow;
      case "green":
        return colors.green;
      case "gray":
        return colors.gray;
      default:
        return "black";
    }
  };

  const borderColor = getBorderColor(); // Set border color based on eventType

  /**
   *
   * @param {*} answerId
   * @returns {*} A function to handle answer button onPress
   */
  const onAnswerBtnPressed = (action) => {
    onChooseOption
    // show the NotiPopupModal
    setShowNotiModal(false);
  };

  // /**
  //  *
  //  * @param {*} options
  //  * @returns the list of answer buttons
  //  */

  // if (showNotiModal) {
  //   return (
  //     <NotiPopupModal
  //       visible={showNotiModal}
  //       message={"Message"}
  //       description={"Some Description"}
  //       borderColor={borderColor}
  //     />
  //   );
  // }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      style={styles.container}
    >
      <View style={styles.modalBackground}>
        {/* Header */}
        <View style={[styles.headerContainer, { borderColor: borderColor }]}>
          <View
            style={[styles.dashedHeaderBorder, { borderColor: borderColor, justifyContent: "center", alignItems: "center" }]}
          >
            <CustomText
              style={{
                color: borderColor,
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Age {player.age}
            </CustomText>
          </View>
        </View>
        <View style={[styles.modalContainer, { borderColor: borderColor }]}>
          <View style={[styles.dashedBorder, { borderColor: borderColor }]}>
            {/* image */}
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/warning.png")}
                contentFit="cover"
                style={{
                  width: 40,
                  height: 40,
                }}
              ></Image>
            </View>

            {/* question */}
            <View style={styles.questionContainer}>
              <CustomText fontSize={16} align="center">
                {question}
              </CustomText>
            </View>

            {/* user option list */}
            <View style={styles.answerContainer}>
              {options.map((option, index) => {
                return(<AnswerButton
                    onPress={() => { 
                      if(option.action === "HIDE_POPUP") {
                        hideFunction()
                      } else if(option.action === "EXIT") {
                        navigation.navigate("LoginScreen")
                        alert("Exit!")
                        BackHandler.exitApp()
                      } else if(option.action === "SAVE_PLAYER_AND_LOGOUT") {
                        hideFunction()
                        const player = getPlayerRedux()
                        //set data
                        const data = {
                          "email": player.email,
                          "player": {...player}
                        }
                        setDoc(doc(collection(db, "users"), player.email), data)
                            .then(() => {
                                alert("Save successfully!")
                                navigation.navigate("LoginScreen")
                              })
                            .catch((err) => {
                                alert("Save failed")
                            })
                      }else{
                        dispatch({type: option.action, payload: option.payload})
                        const newPlayer = getPlayerRedux()
                        dispatch({type: "GET_EVENT", payload: {player: newPlayer}})
                        onChooseOption();
                      }
                    }}
                    title={option.title}
                    key={index}
                  />)
              })}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export const styles = StyleSheet.create({
  container: {},
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingBottom: "50%",
    alignItems: "center",
  },
  modalContainer: {
    width: "70%",
    backgroundColor: "white",
    padding: 30,
    // paddingBottom: 10,
    borderRadius: 35,
    elevation: 20,
    alignItems: "center",
    borderWidth: 11,
    position: "relative",
  },
  dashedBorder: {
    borderWidth: 2,
    borderStyle: "dashed",
    width: 206,
    // height: 331,
    alignItems: "center",
    borderRadius: 25,
    paddingBottom: 20
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 7,
    borderRadius: 20,
    width: 148,
    height: 53,
    backgroundColor: "white",
    top: "5%", // Align to the top of the modalBackground
    zIndex: 1,
  },
  dashedHeaderBorder: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderRadius: 13,
    width: 128,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    marginTop: 16,
  },
  questionContainer: {
    width: "80%",
    marginBottom: 16,
  },
  answerContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlignVertical: "center",
  },
});
