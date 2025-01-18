import { View, Text, StyleSheet, Pressable, Image} from 'react-native'
import React from 'react'

const MainButton = ({ positionStyle, onPress, imageURL, isUnlock=true }) => {
  return (
    <Pressable
        style={[styles.container, positionStyle]}
        onPress={onPress}
        disabled={isUnlock ? false : true}
    >
        <Image 
            source={require("../../assets/mainButton.png")}
            style={styles.backgroundImage}
        />
        <Image 
            source={imageURL}
            style={styles.buttonImage}
            resizeMode='contain'
        />
        {
            !isUnlock &&
            <View style={styles.darkOverlay}></View>
        }
        
    </Pressable>
  )
}

export default MainButton

const styles = StyleSheet.create({
    container: {
        justifyContent: "center", alignItems: "center",
        // borderWidth: 1, borderColor: "red"
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    backgroundImage: {
        width: 50, height: 50,
        // borderWidth: 1, borderColor: "green"
    },
    buttonImage: {
        position: "absolute",
        width: 30, height: 30,
        // borderWidth: 1, borderColor: "blue"
    },
    darkOverlay: {
        position: "absolute", borderRadius: 25,
        width: "100%", height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})