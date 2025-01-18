import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
  } from "react-native";
import ExitButton from "../../../components/main/ExitButton";
import doctorData from "../../../constants/doctorData";

const TreatingScreen = ({ route, navigation }) => {
    const [isTreatingFinished, setIsTreatingFinished] = useState(false)
    const [isTreatingStarted, setIsTreatingStarted] = useState(false)
    function exit() {
        if (isTreatingFinished) {
            navigation.goBack();
        } else {
            alert("Wait for treating successfully")
        }
    }
    const { symptom } = route.params;  
    const [paddingLeft, setPaddingLeft] = useState(0);

    useEffect(() => {
        if (!isTreatingStarted) {
            var interval = setInterval(() => {
                setPaddingLeft((prevPaddingLeft) =>  prevPaddingLeft + 26 );
              }, 1000); // Update every second
            () => interval();

            setIsTreatingStarted(true)

            setTimeout(() => {
                clearInterval(interval);
                setIsTreatingFinished(true)
            }, 11000)
        }
    }, []);

    return (
        <View style={styles.container}>
            <ExitButton onPress={exit} />
            <Image 
            style={[styles.heading, { resizeMode: 'contain' }]}
            source={require("../../../assets/hospital/HospitalHeading.png")}
            />
            <Text style={styles.text}> CARE YOU CAN BELIEVE IN</Text>
            <Text style={styles.text2}> Our Doctor</Text>
            <Image style={styles.bed}
                source={require("../../../assets/hospital/hospitalBed.png")}>
            </Image>

            <View style={styles.treatingSymptom}>
                <View style={styles.e}>
                    <Text style={styles.treating}>
                        {
                            isTreatingFinished ? 
                            "Finish treating" :
                            `Treating the ${symptom.toLowerCase()}...`
                        }
                    </Text>
                </View>
            </View>
            <View style={styles.treatingProgress}>
                <View style={[styles.progressBar, {paddingLeft: paddingLeft}]}></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display:"flex",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#EDF9FC",
    },
    heading: {
        height: 30,
        width: 200,
        marginTop:10,
    },
    bed: {
        width: 300,
        height: 290, 
        marginTop: 100,
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 30,
    },
    text2: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        color: "#24C999",
    },
    treating: {
        fontSize: 20, 
        fontWeight: "bold",
        marginTop: 20,
    }, 
    treatingProgress: {
        width: 250,
        height: 20,
        backgroundColor: '#000000', 
        borderRadius: 10, 
        marginTop: 20,
        overflow: "hidden",
        alignItems: "flex-start"
    },
    progressBar: {
        height: 20,
        backgroundColor: '#007AFF', 
    }
})
export default TreatingScreen;