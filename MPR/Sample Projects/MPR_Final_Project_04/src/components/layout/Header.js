import { Image, Pressable, StyleSheet, View } from "react-native"
import CustomText from "../CustomText/CustomText"
import { getPlayerRedux } from "../../redux/data"
import Avatar from "../Avatar/Avatar"
import { useNavigation } from "@react-navigation/native"
import {useSelector} from "react-redux"
const HeaderApp = ()=> {
    const player = useSelector( state => state.playerReducer.player)
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <View style={{flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center"}}>
                <Pressable onPress={() => {navigation.navigate("ProfileScreen")}}>
                    <Avatar age={player.age} sex={player.sex} style={{width: 50, height: 50}}/>
                </Pressable>
                <View>
                    <CustomText fontSize={14} color="white" fontWeight="bold"> 
                        {player.name}
                    </CustomText>
                    <CustomText fontSize={8} color="white" fontWeight="bold" fontStyle="italic"> 
                        ({player.alive ? "Alive" : "Dead"})
                    </CustomText>
                </View>
            </View>
            <CustomText fontSize={14} color="white" fontWeight="bold">
                Age: {player.age}
            </CustomText>
            <View style={styles.money}>
                <CustomText fontSize={14} color="white" fontWeight="bold">
                    ${player.amount}
                </CustomText>
                <Image source={require('../../assets/images/icon/money.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#252525',
        paddingVertical:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    icon: {
        width:50,
        height:60
    },
    money: {
        flexDirection:'row',
        alignItems:'center',
        gap:15
    }
})
export default HeaderApp