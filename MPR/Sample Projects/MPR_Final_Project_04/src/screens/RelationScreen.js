import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import npcs from "../data/npc.json"
import RelationItem from "../components/Relation/RelationItem";
import CustomText from "../components/CustomText/CustomText";
import ChooseLayout from "../layout/ChooseLayout";
import { getPlayerRedux } from "../redux/data";
import { useState } from "react";
const RelationScreen = () => {
    const player = getPlayerRedux()
    const [friendTab, setFriendTab] = useState(false)
    const checkContains = (id)=> {
        if(player.friendList != []){
            const result = player.friendList.filter(item => {
                return item.id === id
            })
            if(result.length >0){
                return true;
            } else {
                return false
            }
        } else {
            return false
        }
        
    }
    const result= npcs.npcs.filter(item => {
        if(!checkContains(item.id) && (item.age <= player.age + 10 && item.age >= player.age - 10 )){
            return item
        }
    })
    return (
        <ChooseLayout>
            <View style={{flex: 1}}>
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <CustomText color="white">
                            Relation around
                        </CustomText>
                    </View>
                </View>
                <View style={styles.scrollView}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                       {<Pressable onPress={() => { setFriendTab(false)}} style={{padding: 10, flex: 1}}>
                            <CustomText color="white" align="center" fontSize={friendTab? 16 : 20} fontWeight={friendTab ? "normal": "bold"}>New Friends</CustomText>
                        </Pressable>}
                        <Pressable onPress={() => { setFriendTab(true)}} style={{padding: 10, flex: 1}}>
                            <CustomText color="white" align="center" fontSize={!friendTab? 16 : 20} fontWeight={!friendTab ? "normal": "bold"}>Your Friends</CustomText>

                        </Pressable>
                    </View>
                    {!friendTab &&
                    <ScrollView> 
                            {result.map(item => {
                                return (
                                        <RelationItem
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            age={item.age}
                                            hobby={item.hobby}
                                            description={item.description}
                                            behaivor={item.behaivor}
                                            sex={item.sex}
                                            relation={item.relation}
                                        />
                                )
                            })}
                    </ScrollView>}

                    {friendTab &&
                    <ScrollView> 
                            {player.friendList.map(item => {
                                return (
                                        <RelationItem
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            age={item.age}
                                            hobby={item.hobby}
                                            description={item.description}
                                            behaivor={item.behaivor}
                                            sex={item.sex}
                                            relation={item.relation}
                                            added = {true}
                                        />
                                )
                            })}
                    </ScrollView>}
                </View>
            </View>
        </ChooseLayout>
    )
}
const styles = StyleSheet.create({
    title: {
        marginTop:10,
        marginLeft:10,
        paddingBottom:10
    },
    relationScreen: {
        flex: 1
    },
    scrollView:{
        flex:1,
    },
    buttonWrapper: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    button: {
        color: 'white',
        width: '35%',
        height: 40,
        backgroundColor: '#059862',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})
export default RelationScreen