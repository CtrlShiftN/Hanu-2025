import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../CustomText/CustomText";
import { colors } from "./colors";
/**
 *
 * @param {*} visible - the modal is shown or not
 * @param {*} message - the choice of user
 * @param {*} description - the description
 * @param {*} borderColor - the borderColor of the modal
 * @returns
 */
export default function NotiPopupModal({
  visible,
  message,
  description,
  borderColor,
  onPress,
  event
}) {
  const [showNotiModal, setShowNotiModal] = useState(visible);
  const showPayload = () => {
    let output = []
    
    Object.keys(event.effect.payload).map((characteristic, index) =>{
      output.push(<CustomText fontSize={16} key={index}>{characteristic}: {event.effect.payload[`${characteristic}`]}</CustomText>)
    })
    return output
  }

  const getBorderColor = () => {
    switch (event.status) {
      case "bad":
        return colors.red;
      case "mid":
        return colors.yellow;
      case "good":
        return colors.green;
      case "deadly":
        return colors.gray;
      default:
        return "black";
    }
  };

  const getIcon = () => {
    switch (event.status) {
      case "bad":
        return (<Image
        source={require(`../../assets/images/popup/bad.png`)} // replace with the actual icon
        contentFit="cover"
        style={styles.icon}
      ></Image>);
      case "mid":
        return (<Image
          source={require(`../../assets/images/popup/mid.png`)} // replace with the actual icon
          contentFit="cover"
          style={styles.icon}
        ></Image>)
      case "good":
        return (<Image
          source={require(`../../assets/images/popup/good.png`)} // replace with the actual icon
          contentFit="cover"
          style={styles.icon}
        ></Image>)
      case "deadly":
        return (<Image
          source={require(`../../assets/images/popup/deadly.png`)} // replace with the actual icon
          contentFit="cover"
          style={styles.icon}
        ></Image>)
      default:
        return (<Image
          source={require(`../../assets/images/popup/mid.png`)} // replace with the actual icon
          contentFit="cover"
          style={styles.icon}
        ></Image>)
    }
  };

  return (
    <Modal animationType="fade" transparent visible={showNotiModal}>
      <TouchableOpacity
        style={styles.modalBackground}
        onPress={onPress}
      >
        <View>
          <View style={[styles.modalContainer, { borderColor: getBorderColor() }]}>
            <View style={[styles.dashedBorder, { borderColor: getBorderColor() }]}>
              {/* image */}
              <View style={styles.imageContainer}>
                {getIcon()}
              </View>
              <View style={styles.messageContainer}>
                <CustomText fontSize={16} fontWeight="bold" align="center">
                  {message}
                </CustomText>
              </View>
              <View style={styles.descriptionContainer}>
                  {showPayload()}
              </View>

              <View
                style={{
                  // position: "absolute",
                  bottom: 8,
                }}
              >
                <CustomText
                  style={{
                    fontSize: 11,
                  }}
                >
                  Tap any where to continue
                </CustomText>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalContainer: {
    width: 248,
    backgroundColor: "white",
    padding: 20,
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
    alignItems: "center",
    borderRadius: 25,
    marginTop: 5,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    marginTop: 16,
  },
  messageContainer: {
    textAlign: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  descriptionContainer: {
    alignItems: "center",
    textAlign: "center",
    width: 166,
    paddingBottom: 20
  },
});
