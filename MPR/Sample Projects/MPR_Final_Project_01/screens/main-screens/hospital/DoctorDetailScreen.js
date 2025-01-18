
import {View, Text, Image, StyleSheet, Pressable, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import doctorData from "../../../constants/doctorData";
import Prompt from "../../../components/main/Prompt";
import symptomsData from "../../../constants/symptomsData";
import ExitButton from "../../../components/main/ExitButton";
import DarkOverlay from "../../../components/ui/DarkOverlay";
import { CharacterContext } from "../../../store/character-context";

const DoctorDetailScreen = ({ route, navigation }) => {
    const characterCtx = useContext(CharacterContext)
    const [isRepOkVisible, setRepOkVisible] = useState(false);
    const [selectedSymptom, setSelectedSymptom] = useState(null);
    const isSymptomInSymptomsData = (symptom) => {
        return symptomsData.some(symptomData => symptomData.name === symptom);
    };
    function exit() {
        navigation.goBack();
    }
    function treatingScreen(symptom) {
        navigation.navigate("TreatingScreen", { symptom: symptom });
        setRepOkVisible(false)
    }
    function repOk(symptom) {
        if (characterCtx.income < 1000) {
            alert("You don't have enough coin")
        } else {
            if (characterCtx.symptoms.includes(symptom.toLowerCase())) {
                setSelectedSymptom(symptom); 
                setRepOkVisible(true);
                characterCtx.setSymptoms(characterCtx.symptoms.filter((characterSymptom) => characterSymptom.toLowerCase() != symptom.toLowerCase()))
                characterCtx.minusIncome(1000, "Treat " + symptom)
            } else {
               alert("You don't have this symptom!")
            }
        }
    }
    const { doctorId } = route.params;
    const doctor = doctorData.find(doc => doc.id == doctorId);

    return (
        <ScrollView style={styles.scrollView}>
            <ExitButton zIndexSetting={1} onPress={exit} />
            <View style={styles.container}>
                <Image 
                style={[styles.heading, { resizeMode: 'contain' }]}
                source={require("../../../assets/hospital/HospitalHeading.png")}
                />
                <Image source={doctor.image} style={styles.image} />
                <Text style={styles.name}>{doctor.name}</Text>
                <Text style={styles.position}>{doctor.position}</Text>
                <View style={styles.symptomWrapper}>
                    {doctor.expert.map((expert, index) => (
                        <View key={index} style={styles.expertise}>
                            <Image style={styles.icon} source={expert.icon} />
                            <Text style={styles.symptom}>{expert.symptom}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.desc}>{doctor.desc}</Text>

                <View style={styles.coin}>
                    
                    <View style={styles.coinNumber}>
                        <Image style={styles.coinIcon}
                            source={require("../../../assets/money.png")}>  
                        </Image>
                
                        <Text style={styles.coinText}>1000</Text>
                    </View>
                    <View style={styles.coinNumber}>
                        <Image style={styles.coinIcon}
                            source={require("../../../assets/money.png")}>  

                        </Image>
                        <Text style={styles.coinText}>1000</Text>
                    </View>
                </View>
                <View>
                    <Pressable style={({ pressed }) => [pressed && styles.pressed]}
                    >
                        <View style={styles.buttonWrapper}>
                        {doctor.expert.map((exp, index) => (
                            <View key={index} style={styles.treatButton}>
                                <Pressable  style={({ pressed }) => [pressed && styles.pressed]}
                                onPress={() => repOk(exp.symptom)}>
                                
                                    <Text style={styles.buttonText} onPress={() => repOk(exp.symptom)}>Treat the {exp.symptom.toLowerCase()}</Text>
                                </Pressable>
                            </View>
                        ))}
                        </View>
                    </Pressable>
                </View>
                {isRepOkVisible && (
                    <>
                        <Prompt
                            message={
                            "Are you sure to treat this symptom!"
                            }
                            buttonNoFunction={() => setRepOkVisible(false)}
                            buttonYesFunction={() => treatingScreen(selectedSymptom)}
                        />      
                        <DarkOverlay />
                    </>
                )}
            </View>
        </ScrollView>
    );
};

export default DoctorDetailScreen;

const styles = StyleSheet.create({
    scrollView: {
        borderColor: "red",
        padding: 0,
        margin: 0,
        backgroundColor: "#EDF9FC",
    },
    container: {
        alignItems: "center",
        height: "100%",
        backgroundColor: "#EDF9FC",
    },
    heading: {
        height: 30,
        width: 200,
        marginTop:10,
    },
    image: {
        marginTop:20,
        width: 130,
        height: 220,
    },
    name: {
        marginTop:10,
        fontSize: 25,
        fontWeight: "bold",
    },
    position: {
        fontSize: 25,
        fontWeight: "bold",
    },
    symptomWrapper: {
        display:"flex",
        flexDirection: "row",
    },
    expertise: {
        display:"flex",
        flexDirection: "column",
        padding: 15,
    },
    icon: {
        width: 60,
        height:60,
    },
    symptom: {
        fontSize: 20,
        textAlign: 'center',
    },
    desc: {
        fontSize: 16,
        padding:25,
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    treatButton: {
        height: 50,
        width: 160,
        backgroundColor: "#007AFF",
        margin:10,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    coin: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    coinIcon: {
        width: 50,
        height: 50,
        marginRight:10,
    },
    coinNumber: {
        fontSize:20,
        width: 170,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft:10,
    },
    coinText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#0300A2",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});
