import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DarkOverlay = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default DarkOverlay

const styles = StyleSheet.create({
    container: {
        position: "absolute", top: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "black", opacity: 0.6,
        zIndex: 1,
    }
})