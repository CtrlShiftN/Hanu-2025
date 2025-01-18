import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CharacterContext } from '../../store/character-context'

const Money = ({ containerCustomStyle, moneyImageCustomStyle, moneyAmountCustomStyle }) => {
    const characterContext = useContext(CharacterContext)

    return (
        <View style={[styles.container, containerCustomStyle]}>
            <Image 
                style={[styles.moneyImage, moneyImageCustomStyle]}
                source={require("../../assets/money.png")}
            />
            <Text style={[styles.moneyAmount, moneyAmountCustomStyle]}>  {characterContext.income}  </Text>
        </View>
    )
}

export default Money

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "baseline",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        paddingVertical: 2, paddingHorizontal: 2,
        borderRadius: 25,
    },
    moneyImage: {
        width: 35, height: 35,
    },
    moneyAmount: {
        fontSize: 22, 
        color: "white",
    },
})