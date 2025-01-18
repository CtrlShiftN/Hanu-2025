import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import TextButton from '../ui/TextButton';

const NoMoreTicket = ({ onWatchAdsEarnTicket, onCancel }) => {
    const screenHeight = Dimensions.get("window").height;
    const [containerPositionStyles, setContainerPositionStyles] = useState("")

    function getContainerSize(event) {
        const { height } = event.nativeEvent.layout;
        setContainerPositionStyles({
            position: "absolute",
            top: screenHeight/2,
            transform: [{translateY: -height/2}],
        })
    }

    return (
        <View style={[styles.container, containerPositionStyles]} onLayout={getContainerSize}>
            <LinearGradient
                colors={[ '#9A57DA', '#2A034A']}
                style={styles.linearGradient}
            >
                <Text style={styles.title}>No More Ticket</Text>
            </LinearGradient>
            <View style={styles.ticketWrapper}>
                <Image 
                    style={styles.ticketImage}
                    source={require("../../assets/ticket.png")}
                />
                <Text style={styles.ticketNum}>   0</Text>
            </View>

            <View style={styles.buttonGroup}>
                <TextButton 
                    onPress={onCancel}
                    title={"Cancel"}
                    buttonColor={"#9FEB4D"}
                    borderColor={"#71A934"}
                    // positionStyle={{position: "absolute", bottom: 10, right: 10}}
                />
                <TextButton 
                    title={"Earn"}
                    onPress={onWatchAdsEarnTicket}
                    buttonColor={"#9FEB4D"}
                    borderColor={"#71A934"}
                    // positionStyle={{position: "absolute", bottom: 10, right: 10}}
                />
                {/* <Pressable 
                    style={
                        ({ pressed }) => [styles.button, pressed && styles.pressed]
                    }
                    onPress={onCancel}
                >
                    <Text style={styles.buttonTitle}>Cancel</Text>
                </Pressable>
                <Pressable 
                    style={
                        ({ pressed }) => [styles.button, pressed && styles.pressed]
                    }
                    onPress={onWatchAdsEarnTicket}
                >
                    <Text style={styles.buttonTitle}>Watch Ads</Text>
                </Pressable> */}
            </View>
        </View>
    )
}

export default NoMoreTicket

const styles = StyleSheet.create({
    // unlockWrapper: {
    //     marginTop: 40,
    //     width: "80%",
    //     height: 300,
    //     borderWidth: 1, borderColor: "black",
    //     borderRadius: 20,
    //     backgroundColor: "white"
    // },
    // linearGradient: {
    //     borderTopLeftRadius: 20, borderTopRightRadius: 20,
    // },
    // unlockText: {
    //     fontSize: 40, fontWeight: "bold", 
    //     color: "white",
    //     textAlign: "center",
    // },
    container: {
        width: "80%",
        height: 300,
        borderWidth: 1, borderColor: "black",
        borderRadius: 20,
        backgroundColor: "white",
        zIndex: 2
    },
    linearGradient: {
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
    },
    title: {
        fontSize: 35, fontWeight: "bold", 
        color: "white",
        textAlign: "center",
    },
    ticketWrapper: {
        paddingHorizontal: 20, 
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    ticketImage: {
        width: 50, height: 50
    },
    ticketNum: {
        fontWeight: "bold", fontSize: 40,
    },

    // ---------------- Button ----------------
    buttonGroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "20%"
    },
    button: {
        width: 120,
        borderWidth: 1, borderColor: "black",
        borderBottomWidth: 5,
        backgroundColor: "#ebc634",
        borderRadius: 20,
    }, 
    buttonTitle: {
        textAlign: "center",
        fontWeight: "bold", fontSize: 20,
    },
    pressed: {
        opacity: 0.6
    }
})