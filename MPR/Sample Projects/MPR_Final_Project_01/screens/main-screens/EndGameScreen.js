import {View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../store/character-context";

const EndGameScreen = ({navigation}) => {
    const characterCtx = useContext(CharacterContext);

    return (
        <View style={styles.container}>
            <View style={styles.headstoneWrapper}>
                <Image style={styles.headstone}
                    source={require("../../assets/headstone.png")}
                    resizeMode='contain'
                />
                <View style={styles.pictureFrame}>
                    <Image style={styles.avatar}
                    source={characterCtx.characterImage}></Image>
                </View>
            </View>
            <View style={styles.infor}>
                <Text style={styles.name}>
                        Name: {characterCtx.characterName}
                </Text>
                <Text style={styles.age}>
                        Age: {characterCtx.age}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        height: "100%",
    },
    headstoneWrapper: {
    },
    headstone: {
        width: 320,
        height: 350,
    },
    pictureFrame: {
        width: 105,
        height: 105,
        backgroundColor: "#fff",
        borderRadius: 50,
        position: "absolute",
        top: 50,
        left: 110,
        overflow: "hidden",
    },
    avatar: {
        maxWidth: "100%",
        height: 250,
    },
    infor: {
        position: "absolute",
        top: "52%",
        alignItems: "center"
    },
    name: {
        color: "#fff",
        fontSize: 20,
    },
    age: {
        color: "#fff",
        fontSize: 20,
    },
    button: {
    width: 200,
    height: 50,
    backgroundColor: "#2EFF00",
    },
    buttonText: {
        color: "#FFF",
    }

})
export default EndGameScreen;