import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const DailyRewardCongratsAlert = ({ rewardMoney, onPress }) => {
  return (
    <LinearGradient 
        colors={["#F77F7A", "#FCC0BE"]}
        style={styles.container}
    >
        <Text style={styles.congratsText}>
            CONGRATS
        </Text>
        <View style={styles.moneyWrapper}>
            <Text style={styles.message}>You got free {rewardMoney} </Text>
            <Image
                style={styles.coinImage}
                source={require("../../assets/money.png")}
            />
        </View>
        <Pressable
            onPress={onPress}
        >
            <LinearGradient
                colors={["#C8F170", "#55D349"]}
                style={styles.button}
            >
                <Text style={styles.buttonTitle}>OK</Text>
            </LinearGradient>
        </Pressable>
    </LinearGradient>
  )
}

export default DailyRewardCongratsAlert

const styles = StyleSheet.create({
    container: {
        position: "absolute", zIndex: 1,
        width: "60%", height: 130,
        borderRadius: 20,
        justifyContent: "space-around",
        alignItems: "center",
    },
    congratsText: {
        fontSize: 30, fontWeight: "bold",
        color: "#FCFF81",
        textShadowColor: "#712F00",
        textShadowRadius: 15,
    },
    moneyWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    message: {
        fontSize: 20, fontWeight: "bold",
        color: "#FCFF81", 
        textShadowColor: "#712F00",
        textShadowRadius: 10,
    }, 
    coinImage: {
        width: 25, height: 25,
    },
    button: {
        width: 55,
        paddingHorizontal: 5,
        borderRadius: 30,
    }, 
    buttonTitle: {
        fontSize: 20, fontWeight: "bold",
        textAlign: "center",
        color: "#F1ED8A",
        textShadowColor: "#467100",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    }
})