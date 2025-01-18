import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    FlatList,
  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import ExitButton from "../../../components/main/ExitButton";
import doctorData from "../../../constants/doctorData";
const DoctorScreen = () => {
    function exit() {
        navigation.goBack();
    }
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.content}>
            <Image source={item.image} style={styles.image} />
                <View style={styles.textWrapper}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.position}</Text>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>Expert in the field: </Text>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    {item.expert.map((expert, index) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginTop:5}} key={index}>
                            <Image style={styles.symptomIcon} source={expert.icon} />
                            <Text style={styles.itemText2}>{expert.symptom}</Text>
                        </View>
                    ))}
                </View>

                </View>
            </View>
        <View style={styles.appointmentButton}>
            <Pressable style={({ pressed }) => [pressed && styles.pressed]}
                 onPress={() => navigation.navigate('DoctorDetailScreen', { doctorId: item.id })}>
                <Text  style={styles.textButton}>Appointment</Text>
            </Pressable>
        </View>
        </View>
    )

    return(
        <View style={styles.container} >
            <ExitButton onPress={exit} />
            <Image 
            style={[styles.heading, { resizeMode: 'contain' }]}
            source={require("../../../assets/hospital/HospitalHeading.png")}
            />
            <View style={styles.options}>
            <FlatList
                data={doctorData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={1}
            />
            </View>
        </View>
    )
}
export default DoctorScreen;
const styles = StyleSheet.create({
    container: {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDF9FC",
        height: "100%",
    },
    heading: {
        height: 30,
        width: 200,
        marginTop:50,
    },
    options: {
        marginTop:25,
    },
    item: {
        padding: 20,
        marginBottom: 25,
        height: 250,
        width: 340,
        display:"flex",
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    itemText2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    content: {
        display:"flex",
        flexDirection: "row",
    },
    image: {
        width: 75,
        height: 130,
    },
    textWrapper: {
        padding:20,
    },
    appointmentButton: {
        width: 150,
        height: 45,
        backgroundColor: "#007AFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    pressed: {
        opacity: 0.7
    }, 
    textButton: {
        color: "#FFFFFF",
        fontSize:16,
        fontWeight: "bold",
    },
    symptomIcon: {
        width: 30,
        height: 30,
    }
})