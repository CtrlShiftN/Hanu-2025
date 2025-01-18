import { ScrollView, View, StyleSheet } from "react-native";
import CustomText from "../CustomText/CustomText";

function EventMileStoneBox({milestones}) {

    const groupedEvents = {};

    milestones.forEach(event => {
        if (!groupedEvents[event.age]) {
            groupedEvents[event.age] = [];
        }
        groupedEvents[event.age].push(event.message);
    });

    const groupedByAgeMilestone = Object.entries(groupedEvents).map(([age, messages]) => ({ age: parseInt(age), messages }));
    
    return ( 
        <View style={styles.wrapper}>
            <ScrollView>
                {groupedByAgeMilestone.reverse().map((gr, index) => {
                   return (
                   <View key={index} style={{paddingBottom: 20}}>
                       <CustomText color="white" fontWeight="bold" align="center">Age {gr.age}</CustomText>
                       {gr.messages.map((message, index) => {
                          return <CustomText key={index*0.51} color="white" style={{paddingBottom: 10}}>• {message}</CustomText>
                       })}
                   </View>)
                })}
            </ScrollView>
        </View>
    );
}

export default EventMileStoneBox;
const styles = StyleSheet.create({
    wrapper :{
        width: "100%",
        height: 200,
        backgroundColor: "#ffffff80",
        borderRadius: 25,
        padding: 20
    }
})