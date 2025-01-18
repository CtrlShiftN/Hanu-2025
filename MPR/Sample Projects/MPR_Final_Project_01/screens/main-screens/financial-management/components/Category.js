import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const Category = ({isLandscape, title, amount, onPress, isExpenseFocus}) => {
    var amountStyle;
    var noFocusStyle;
    var focusStyle;
    var containerFocusStyle = {
        width: "50%",
        backgroundColor: "#243E3E"
    };

    if (title == "Balance Overview") {
        amountStyle = {
            color: "blue",
            fontSize: 24,
            fontWeight: "bold"
        }
    } else {
        amountStyle = {
            color: (isExpenseFocus == true) ? "white" : "blue",
            fontSize: 20,
            fontWeight: "bold"
        }
    }

    // if (title == "Expense" && !isExpenseFocus) {
    //     noFocusStyle = {
    //         backgroundColor: "#FFFFFF",
    //         // borderBottomRightRadius: 10
    //     }
    // } else if (title == "Income" && !isExpenseFocus) {
    //     noFocusStyle = {
    //         // backgroundColor: "#243E3E",
    //         // borderBottomLeftRadius: 10
    //     }
    // }

    // if (title == "Expense" && isExpenseFocus) {
    //     focusStyle = {
    //         backgroundColor: "green",
    //         borderTopRightRadius: 10,
    //     }
    // } else if (title == "Income" && isExpenseFocus) {
    //     focusStyle = {
    //         backgroundColor: "purple",
    //         borderTopLeftRadius: 10, 
    //     }
    // }

    return (
        <View 
            style={
                (isExpenseFocus) ? containerFocusStyle : styles.container}>
      
            <Pressable 
                style={[styles.componentsWrapper, isExpenseFocus && focusStyle, noFocusStyle]} 
                onPress={onPress}>
                <Text style={isExpenseFocus && styles.title}>{title}</Text>
                <View style={styles.amountWrapper}>
                    <Image 
                        style={styles.moneyImage}
                        source={require("../../../../assets/money.png")}
                    />
                    <Text style={amountStyle}>  {amount}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    componentsWrapper: {
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
    },
    container: {
        width: "50%",
        backgroundColor: "#FFFFFF",
    },
    title: {
        fontWeight: "bold",
        color: "white",
    },
    moneyImage: {
        width: 25, height: 25,
    },
    amountWrapper: {
        flexDirection: "row",
        alignItems: "center"
    }
})