import { Image, StyleSheet, View } from "react-native";
import CustomText from "../CustomText/CustomText";
import StatusBarWithIcon from "./StatusBarWithIcon";
import {getPlayerRedux} from "../../redux/data/index"
function UserInfoBoard() {
    const player = getPlayerRedux()
    return ( <View style = {[styles.wrapper, {gap: 10}]}>
        <StatusBarWithIcon source={require("../../assets/images/icon/life.png")} percentage = {player.health} showLabel = {true}/>
        <StatusBarWithIcon source={require("../../assets/images/icon/smart.png")} percentage = {player.smart} showLabel = {true}/>
        <StatusBarWithIcon source={require("../../assets/images/icon/happiness.png")} percentage = {player.happiness} showLabel = {true}/>
        <StatusBarWithIcon source={require("../../assets/images/icon/skills.png")} percentage = {player.skills} showLabel = {true}/>
    </View> );
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#ffffff80",
        // width: "70%",
        width: "100%",
        padding: 20,
        borderRadius: 25

    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imageIcon: {
        width: 50,
        height: 50
    },
    imageIconSmall: {
        width: 30,
        height: 30
    },
    verticalCenter: {
        alignItems: "center"
    }
})
export default UserInfoBoard;