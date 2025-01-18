import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import DarkOverlay from '../ui/DarkOverlay';
import { CharacterContext } from '../../store/character-context';

const GameResultAlert = ({ gameName, resultTitle, onPress, rewardMoney=0 }) => {
    const [imageURL, setImageURL] = useState()
    const [closeButtonPositionStyle, setCloseButtonPositionStyle] = useState({})
    const characterCtx = useContext(CharacterContext)
    const [rewardMoneyWrapperPositionStyle, setRewardMoneyWrapperPositionStyle] = useState({})
    
    useEffect(() => {
        switch(resultTitle) {
            case "Win": {
                setImageURL(require("../../assets/winGame.png"))
                characterCtx.addIncome(rewardMoney, "Win " + gameName)
                setCloseButtonPositionStyle({
                    right: -20, top: 50
                })
                setRewardMoneyWrapperPositionStyle({
                    position: "absolute", top: 140,
                })
                ; break;
            }
            case "Tie": {
                setImageURL(require("../../assets/tieGame.png")); 
                characterCtx.addIncome(rewardMoney, "Tie " + gameName)
                setCloseButtonPositionStyle({
                    right: -20, top: 75
                })
                setRewardMoneyWrapperPositionStyle({
                    position: "absolute", top: 120,
                    width: 160, borderTopRightRadius: 100,
                })
                ; break;
            }
            case "Lose": {
                setImageURL(require("../../assets/loseGame.png")); 
                characterCtx.minusIncome(rewardMoney, "Lose " + gameName)
                setCloseButtonPositionStyle({
                    right: -20, top: 120
                })
                setRewardMoneyWrapperPositionStyle({
                    position: "absolute", top: 150,
                })
                break;
            }
        }
    }, [resultTitle])

    return (
        <View style={styles.container}>
            <Image 
                style={styles.resultImage}
                source={imageURL}
            />
            <View style={[styles.rewardMoneyWrapper, rewardMoneyWrapperPositionStyle]}>
                <Image 
                    style={styles.moneyImage}
                    source={require("../../assets/money.png")}
                />
                <Text style={styles.rewardIncome}>  {rewardMoney}</Text>
            </View>
            <Pressable
                style={[styles.closeButton, closeButtonPositionStyle]}
                onPress={onPress}
            >
                <Image 
                    style={styles.closeImage}
                    source={require("../../assets/yellowCloseButton.png")}
                />
            </Pressable>
        </View>
    )
}

export default GameResultAlert

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        // borderWidth: 1, borderColor: "red",
        zIndex: 2,
        justifyContent: "center", alignItems: "center",
    },
    resultImage: {
        width: 300, height: 300,
    },
    moneyImage: {
        width: 40, height: 40,
    },
    rewardIncome: {
        fontWeight: "bold", fontSize: 30,
    },
    rewardMoneyWrapper: {
        flexDirection: "row",
        // borderWidth: 1, borderColor: "blue",
        justifyContent: "center", alignItems: "center",
        width: 205, height: 60,
        backgroundColor: "#FFC434",
    },
    closeButton: {
        position: "absolute",
        // borderWidth: 1, borderColor: "red"
    },
    closeImage: {
        width: 40, height: 40,
    }
})