import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import CourseItem from '../components/Course/CourseItem';
import cousesUniversity from '../data/coursesUniversity.json'
import ChooseLayout from '../layout/ChooseLayout';
import CustomText from '../components/CustomText/CustomText';
import { getPlayerRedux } from '../redux/data';
import { useState } from 'react';
const CourseScreen = () => {
    const player = getPlayerRedux()
    const [courseApplied, setCourseApplied] = useState(false)
    const checkContains = (id)=> {
        if(player.course != []){
            const result = player.course.filter(item => {
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
    const courses= cousesUniversity.coursesUniversity.filter(item => {
        if(!checkContains(item.id)){
            return item
        }
    })
    return (
        <ChooseLayout>
            <View style={{flex: 1}}>
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <CustomText color="white">
                            Course
                        </CustomText>
                    </View>
                </View>
                <View style={styles.scrollView}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                       {<Pressable onPress={() => { setCourseApplied(false)}} style={{padding: 10, flex: 1}}>
                            <CustomText color="white" align="center" fontSize={courseApplied? 16 : 20} fontWeight={courseApplied ? "normal": "bold"}>New Courses</CustomText>
                        </Pressable>}
                        <Pressable onPress={() => { setCourseApplied(true)}} style={{padding: 10, flex: 1}}>
                            <CustomText color="white" align="center" fontSize={!courseApplied? 16 : 20} fontWeight={!courseApplied ? "normal": "bold"}>Course Learned</CustomText>
                        </Pressable>
                    </View>
                    {!courseApplied && 
                        <ScrollView style={{width: "100%"}}>
                            {courses.map(item => {
                                return (
                                    <CourseItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        condition={item.condition}
                                        result={item.result}
                                        credit={item.credit}
                                        time={item.time}
                                        endTime={item.endTime}
                                    />
                                )
                            })}
                        </ScrollView>
                    }

                    {courseApplied && 
                        <ScrollView style={{width: "100%"}}>
                            {player.course.map(item => {
                                return (
                                    <CourseItem
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        condition={item.condition}
                                        result={item.result}
                                        credit={item.credit}
                                        time={item.time}
                                        endTime={item.endTime}
                                        learned = {true}
                                    />
                                )
                            })}
                        </ScrollView>
                    }
                </View>
            </View>
        </ChooseLayout>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10
    },
    scrollView: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
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
export default CourseScreen