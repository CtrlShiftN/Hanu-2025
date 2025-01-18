import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Ticket = ({ numberTicket, onPress }) => {
  return (
    <View style={styles.container}>
        <AntDesign style={styles.plusIconButton} onPress={onPress} name="pluscircle" size={20} color="black" />

        <View style={styles.ticketWrapper}>
            <Image 
                style={styles.ticketImage}
                source={require("../../assets/ticket.png")}
            />
            <Text style={styles.ticketNum}>  {numberTicket}  </Text>
        </View>
    </View>
  )
}

export default Ticket

const styles = StyleSheet.create({
    container: {
        position: "absolute", right: 170, top: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    plusIconButton: {
        position: "absolute", top: 20, right: -5, 
        zIndex: 1,
        backgroundColor: "white",
        borderRadius: 20
    },
    ticketWrapper: {
        paddingHorizontal: 5, 
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        flexDirection: "row",
        alignItems: "center"
    },
    ticketImage: {
        width: 30, height: 30
    },
    ticketNum: {
        fontSize: 24,
    },
    
})
    
