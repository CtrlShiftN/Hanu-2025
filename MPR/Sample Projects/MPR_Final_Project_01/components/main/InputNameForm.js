import { View, Image, TextInput, StyleSheet } from 'react-native'
import TextButton from '../ui/TextButton'

import React from 'react'

const InputNameForm = ({ onPress, onLayout, setCharacterName }) => {
  return (
    <View style={styles.inputNameFormStyleWrapper} onLayout={onLayout} >
        <View style={styles.inputNameFormStyle}>
            <Image 
                style={styles.inputNameFormImage}
                source={require("../../assets/inputNameForm.png")} 
                resizeMode='contain'
            />
            <TextInput 
                style={styles.inputBox}
                onChangeText={(value) => setCharacterName(value)}
            />
            <TextButton
                positionStyle={styles.inputNameHandlerButton}
                title={"Next"}
                onPress={onPress}
                borderColor={"#71A934"}
            />
        </View>
    </View>
  )
}

export default InputNameForm

const styles = StyleSheet.create({
    inputNameFormStyleWrapper: {
        position: "absolute", top: 0,
        width: "100%", height: "100%",
        justifyContent: "center", alignItems: "center",
        zIndex: 1, 
    },
    inputNameFormStyle: {
        width: 330, height: 594,
        justifyContent: "center", alignItems: "center",
    },

    inputNameFormImage: {
        width: 330, height: 594,
        position: "absolute",
    },
    inputNameHandlerButton: {
        position: "absolute", bottom: 90,
    },
    inputNameHandlerButtonImage: {
        width: 327/2.5, height: 115/2.5,
    },
    inputBox: {
        width: 170,
        position: "absolute", top: 233,
        fontSize: 20, fontWeight: "bold",
        color: "white",
        padding: 10,
    }, 
})