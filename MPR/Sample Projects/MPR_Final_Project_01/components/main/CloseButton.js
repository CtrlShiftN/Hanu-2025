import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const CloseButton = ({ positionStyle, iconImageURL, onPress }) => {
  return (
    <Pressable
        style={
            ({ pressed }) => [positionStyle, pressed && styles.pressed]
        }
        onPress={onPress}
    >
        <Image style={styles.image} source={iconImageURL}/>
    </Pressable>
  )
}

export default CloseButton

const styles = StyleSheet.create({
    image: {
        width: 40, height: 40,
    },
    pressed: {
        opacity: 0.7
    }, 
    image: {
        width: 40, height: 40,
    }
})