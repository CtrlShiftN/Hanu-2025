import { Pressable, ScrollView, StyleSheet, View } from "react-native"
import ChooseLayout from "../layout/ChooseLayout"
import job from '../data/job.json'
import JobItem from "../components/Job/JobItem";
import CustomText from "../components/CustomText/CustomText";
import {useSelector, useDispatch} from "react-redux"
import { useState } from "react";
const JobScreen = () => {
    const player = useSelector(state => state.playerReducer.player)
    const dispatch = useDispatch()
    const [quit,setQuit] = useState(false)
    return (
        <ChooseLayout>
            <View style={styles.buttonWrapper}>
                <View style={styles.button}>
                    {player.currentJob == null ?
                    <CustomText color="white">Job</CustomText> :
                    <Pressable onPress={() => {
                        dispatch({type: "ADD_JOB", payload: null})
                        setQuit(!quit)
                    }}>
                        <CustomText color="white"> Quit current job</CustomText> 
                    </Pressable>}   
                </View>
            </View>
            <View style={styles.scrollView}>
                <ScrollView>
                    <View>
                        {job.map(item => {
                            return (
                                <JobItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    require={item.require}
                                    salary={item.salary}
                                    level={item.level}
                                    quitProp={!quit}
                                    promotion={item.promotion}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </ChooseLayout>
    )
}
const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10
    },
    scrollView: {
        flex: 1
    }, buttonWrapper: {
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
export default JobScreen