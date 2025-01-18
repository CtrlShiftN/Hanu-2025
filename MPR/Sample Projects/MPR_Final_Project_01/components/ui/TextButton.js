import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const TextButton = ({ 
    positionStyle, title, titleColor="white", onPress, buttonColor="#9FEB4D", borderColor }) => {
    
    const buttonColorStyle = 
        (!!borderColor) 
        ? {
            backgroundColor: buttonColor,
            borderColor: borderColor,
        } 
        : {
            backgroundColor: buttonColor,
            borderBottomWidth: 0,
            borderRightWidth: 0, borderLeftWidth: 0,
        }
  return (
    <Pressable 
        style={
            ({ pressed }) => [[styles.container, positionStyle, buttonColorStyle, pressed && styles.pressed]]
        }
        onPress={onPress}    
    >
        
        <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </Pressable>
  )
}

export default TextButton

const styles = StyleSheet.create({
    container: {
        minWidth: 120, 
        borderRadius: 20, 
        borderTopWidth: 0,
        borderBottomWidth: 5,
        borderRightWidth: 1, borderLeftWidth: 1,
    },
    title: {
        fontWeight: "bold", fontSize: 25,
        textAlign: "center",
        textShadowColor: "black", textShadowRadius: 5,
        paddingVertical: 3,
    }
})