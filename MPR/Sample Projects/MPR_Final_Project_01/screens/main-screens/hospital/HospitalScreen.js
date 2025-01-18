import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    FlatList,
  } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExitButton from "../../../components/main/ExitButton";
import { CharacterContext } from "../../../store/character-context";
import symptomsData from "../../../constants/symptomsData";


const HospitalScreen = ({ navigation }) => {
    const characterCtx = useContext(CharacterContext)

    const renderItem = ({ item }) => {
        let symptomData = symptomsData.find((symptomData) => symptomData.name.toLowerCase() == item)
        return (
            <View style={styles.item}>
                <Image source={symptomData.image} style={styles.image} />
                <Text style={styles.itemText}>{symptomData.name}</Text>
            </View>
        )
    }
      
    function Doctor() {
        navigation.navigate("DoctorScreen")
    }
    function exit() {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ExitButton onPress={exit} />
            <Image 
            style={styles.heading}
            resizeMode="contain"
            source={require("../../../assets/hospital/HospitalHeading.png")}
            />

            <View style={styles.wrapper}>
                <Image 
                style={styles.avatar}
                source={characterCtx.characterImage}
                >
                </Image>
                <View style={styles.textWrapper}>
                <Text style={styles.text}>
                    Name: {characterCtx.characterName}
                </Text>
                <Text style={styles.text}>
                    Coin: {characterCtx.income}
                </Text>
                </View>
            </View>

            <View style={styles.symptomsWrapper}>
                <Text style={styles.header}>Your Symptoms</Text>
                <FlatList   
                    style={styles.symptomList}
                    data={characterCtx.symptoms}
                    renderItem={renderItem}
                    // keyExtractor={item => item.index}
                    numColumns={2}
                />
            </View>

            <View style={styles.optionWrapper}>
                <Pressable style={({ pressed }) => [pressed && styles.pressed]} 
                onPress={Doctor}>
                    <View style={styles.option1}>
                        <Image 
                        style={styles.doctorIcon}
                        source={require("../../../assets/hospital/doctor.png")}
                >
                        </Image>
                        <Text style={styles.textOption}>Doctors</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}  

export default HospitalScreen;
const styles = StyleSheet.create({
    container: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        height: 30,
        width: 200,
        marginTop:10,
    },
    textWrapper: {
        display:"flex",
        flexDirection: "column",
    },
    wrapper: {
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        width: 350,
        height:167,
        backgroundColor: "#D9D9D9",
        marginTop:25,
    },
    avatar: {
        width: 100,
        height:150,
    },
    text: {
        padding: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#C60000"
    },
    symptomsWrapper: {
        // borderWidth: 1, borderColor: "red",
        width: 350,
        height: 200,
        marginTop:35,
    },
    symptomList: {
        // borderWidth: 1, borderColor: "red",
    },
    item: {
        width: 155,
        height: 45,
        flexDirection: 'row',
        alignItems: "center",
        margin: 5,
        backgroundColor: "#FFD2D2",
        borderRadius: 20,
    },
    image: {
        width: 38,
        height: 38,
        marginLeft:10,
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 10,
    },
    optionWrapper: {
        width: 350,
        height:140,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 40,
    },
    option1: {
        width: 155,
        height:145,
        backgroundColor: "#FFEAEA",
        borderRadius: 20,
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
    },
    doctorIcon: {
        width:70,
        height:70,
    },
    medicinIcon: {
        width:70,
        height:75,
    },
    pressed: {
        opacity: 0.7
    }, 
    textOption: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }
})