import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const Prompt = ({ message, note = "", buttonNoFunction, buttonYesFunction, buttonLaterFunction, isNoButtonVisible=true, isLaterButtonVisible=false }) => {
    const screenHeight = Dimensions.get("window").height;
    const screenWidth = Dimensions.get("window").width;
    const [containerPositionStyles, setContainerPositionStyles] = useState("")

    function getContainerSize(event) {
        const {width, height } = event.nativeEvent.layout;
        setContainerPositionStyles({
            position: "absolute",
            top: screenHeight/2,
            left: screenWidth/2,
            transform: [
                {translateX: -width/2},
                {translateY: -height/2}
            ],
        })
    }

    return (
        <View style={[styles.container, containerPositionStyles]} onLayout={getContainerSize}>
            <View style={styles.messageWrapper}>
                <Text style={styles.message}>
                    {message}
                </Text>
                {
                    note != "" && 
                    <Text style={styles.note}>
                        {note}
                    </Text>
                }
            </View>
            <View style={styles.buttonGroup}>
                <Pressable 
                    style={
                        ({ pressed }) => [styles.button, pressed && styles.pressed]
                    }
                    onPress={buttonYesFunction}
                >
                    <Image 
                        style={styles.imageButton}
                        source={require("../../assets/yes.png")}
                    />
                </Pressable>
                {
                    isNoButtonVisible &&
                    <Pressable 
                        style={
                            ({ pressed }) => [styles.button, pressed && styles.pressed]
                        }
                        onPress={buttonNoFunction}
                    >
                        <Image 
                            style={styles.imageButton}
                            source={require("../../assets/no.png")}
                        />
                    </Pressable>
                }
                {
                    isLaterButtonVisible &&
                    <Pressable 
                        style={
                            ({ pressed }) => [styles.button, pressed && styles.pressed]
                        }
                        onPress={buttonLaterFunction}
                    >
                        <Image 
                            style={[styles.imageButton, {width: 100}]}
                            resizeMode='contain'
                            source={require("../../assets/laterButton.png")}
                        />
                    </Pressable>
                }
            </View>
        </View>
    )
}

export default Prompt

const styles = StyleSheet.create({
    container: {
        width: "80%",
        // height: 300,
        borderWidth: 1, borderColor: "black",
        borderRadius: 20,
        backgroundColor: "white",
        zIndex: 2,
    },
    messageWrapper: {
        marginTop: 15, 
        justifyContent: "center", alignItems: "center",
        // borderWidth: 1, borderColor: "green"
    },
    message: {
        width: "90%", 
        // borderWidth: 1, borderColor: "blue"
        fontSize: 15, fontWeight: "bold"
    },
    note: {
        width: "90%",
        fontSize: 13, fontWeight: "bold"
    },
    // buttonGroupWrapper: {
        // borderWidth: 1, borderColor: "green",
        // height: 1, 
    // },
    buttonGroup: {
        // position: "absolute", bottom: 0, 
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around", alignItems: "center",
    },
    imageButton: {
        width: 90, height: 90,
    },
    pressed: {
        opacity: 0.6
    }
})