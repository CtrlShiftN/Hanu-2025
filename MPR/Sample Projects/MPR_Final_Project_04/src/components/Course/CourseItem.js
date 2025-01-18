import { Image, Pressable, StyleSheet, View } from "react-native"
import CustomText from "../CustomText/CustomText"
import { useDispatch } from "react-redux"
import { getPlayerRedux } from "../../redux/data"
import { useState } from "react"
const CourseItem = ({ id, name, description, condition, result, credit, time, endTime, learned = false }) => {
    const dispatch = useDispatch()
    const player = getPlayerRedux()
    const [apply, setApply] = useState(learned)
    const greater = () => {
        return ">"
    }
    const handleApply = () => {
        if (player.smart < condition[0].smart && player.skills < condition[0].skill) {
            alert("You cannot apply this course!")
        }
        else {
            dispatch({
                type: "ADD_COURSE",
                payload: {
                    id: id,
                    name: name,
                    description: description,
                    condition: condition,
                    result: result,
                    credit: credit,
                    time: time,
                    endTime: endTime
                }
            })
            dispatch({
                type: "MODIFY_STATISTIC",
                payload: {
                    smart: result[0].value,
                    skills: result[1].value
                }
            })
            setApply(true)
        }
    }
    return (
        <View style={styles.courseItem}>
            <View style={{ flexDirection: "row", gap: 20 }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('../../assets/images/course.png')} style={styles.image}>
                    </Image>
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <CustomText fontSize={16} fontWeight="bold" style={{ width: 180 }}>
                            {name}
                        </CustomText>
                        {!learned && (!apply ?
                            <Pressable style={styles.button} onPress={() => handleApply()}>
                                <CustomText color="white" fontSize={14}>
                                    Apply
                                </CustomText>
                            </Pressable>
                            :
                            <Pressable style={styles.buttonApplied}>
                                <CustomText color="white" fontSize={14}>
                                    Applied
                                </CustomText>
                            </Pressable>)}
                    </View>
                    <View>
                        <CustomText fontSize={15} fontWeight="200" style={{ width: 250 }}>
                            {description}
                        </CustomText>
                        <View style={styles.require}>
                            <CustomText fontStyle="italic" fontSize={14}>
                                (Smart: {greater()} {condition[0].smart}
                            </CustomText>
                            <CustomText fontStyle="italic" fontSize={14}>
                                Skill:  {greater()} {condition[0].skill})
                            </CustomText>
                        </View>
                        <View style={styles.result}>
                            <CustomText color="#059862">
                                Smart : +{result[0].value}
                            </CustomText>
                            <CustomText color="#059862">
                                Skill: +{result[1].value}
                            </CustomText>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    courseItem: {
        padding: 10,
        backgroundColor: '#DFF2FF',
        marginTop: 20,
        borderRadius: 20,
        width: '90%',
        marginLeft: '5%'
    },
    image: {
        width: 30,
        height: 30
    },
    headerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        color: 'white',
        width: '25%',
        height: 30,
        backgroundColor: '#059862',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttonApplied: {
        color: 'white',
        width: '25%',
        height: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    require: {
        flexDirection: 'row',
        gap: 20,
        paddingBottom: 5
    },
    result: {
        flexDirection: 'row',
        gap: 20
    },
})

export default CourseItem