import { View, StyleSheet, Image } from "react-native";
import UserStatusBar from "../common/UserStatusBar"
function StatusBarWithIcon( {source, percentage, showLabel=false}) {
    return ( 
        <View style = {[styles.row, styles.verticalCenter, {gap: 10}]}>
            <Image style={styles.imageIconSmall} source={source} />
            <View style = {{width: "88%"}}>
                <UserStatusBar percentage={percentage} showLabel={showLabel}/>
            </View>
        </View> 
     );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    imageIcon: {
        width: 50,
        height: 50
    },
    imageIconSmall: {
        width: 25,
        height: 25
    },
    verticalCenter: {
        alignItems: "center"
    }
})
export default StatusBarWithIcon;