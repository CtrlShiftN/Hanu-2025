import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Video } from 'expo-av';
import adsVideo from "../../assets/ads.mp4"
import { Ionicons } from '@expo/vector-icons';

const AdvertiseScreen = ({ navigation }) => {
  const [countdown, setCountdown] = useState(10)
  const [buttonContent, setButtonContent] = useState("")
  const [isButtonActive, setIsButtonActive] = useState(false)

  useEffect(() => {
    const runCountdown = setInterval(() => {
      setCountdown((prevSecond) => prevSecond -= 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(runCountdown)
      setButtonContent("Get reward")
      setIsButtonActive(true)
    }, 10000)
  }, [])

  useEffect(() => {
    setButtonContent("Reward in " + countdown + " seconds")
  }, [countdown])

  function exit() {
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, !isButtonActive && styles.inactiveButton]}
        onPress={isButtonActive ? exit : null}
      >
        <Ionicons name="close-circle-sharp" size={24} color="black" />
        <Text style={styles.buttonContent}>{buttonContent}</Text>
      </Pressable>
      <Video 
        source={adsVideo} 
        style={styles.video}
        useNativeControls={false} 
        resizeMode="contain" 
        shouldPlay 
     />
    </View>
  )
}

export default AdvertiseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
      // width: "100%",
      flex: 1
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 10, marginTop: 10,
      borderColor: "black", borderWidth: 1,
      borderRadius: 20, 
      alignSelf: "baseline",
      paddingHorizontal: 5
    },
    inactiveButton: {
      opacity: 0.5
    }
})