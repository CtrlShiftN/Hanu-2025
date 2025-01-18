import { Pressable, StyleSheet, View } from "react-native"
import TextItem from "../common/TextItem"
import CustomText from "../CustomText/CustomText"
import { useState, useEffect } from "react"
import { getPlayerRedux } from "../../redux/data"
import { useDispatch } from "react-redux"
const JobItem = ({ id, name, description, require, salary, level, promotion, quitProp }) => {
    const [apply, setApply] = useState(false)
    const dispath = useDispatch()
    useEffect(()=>{
        setApply(false);
    },[quitProp])
    const handleApply = () => {
        const player = getPlayerRedux()
        if (player.currentJob === null) {
            if (player.smart >= require[0].smart && player.skills >= require[0].skill) {
                dispath({
                    type: "ADD_JOB",
                    payload: {
                        id: id,
                        name: name,
                        description: description,
                        require: require,
                        salary: salary,
                        level: level,
                        promotion: promotion
                    }
                })
                setApply(true)
            }
            else {
                alert("You need enhance smart and skill!")
            }
        } else {
            alert("You only have one job at the time !!")
        }
    }
    return (
        <View style={styles.jobItem}>
            <TextItem title={"Title"} showTitle={false} content={name} fontWeight="bold" fontSize={20} align="center" />
            <TextItem title={"Description"} content={description} />
            <TextItem title={"Level"} content={level} />
            <TextItem title={"Salary"} content={salary} />
            <View>
                <CustomText fontSize={15} color="blue" fontWeight="bold">
                    Require:
                </CustomText>
                <View style={styles.require}>
                    <CustomText>
                        Technology: {require[0].language.map((item) => {
                            return `${item}, `
                        })}
                    </CustomText>
                    <CustomText>
                        Smart: {require[0].smart}
                    </CustomText>
                    <CustomText>
                        Skill: {require[0].skill}
                    </CustomText>
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                {!apply ?
                    <Pressable style={styles.button} onPress={() => handleApply()}>
                        <CustomText color="white">
                            Apply job
                        </CustomText>
                    </Pressable>
                    :
                    <Pressable style={styles.buttonApplied}>
                        <CustomText color="white">
                            Applied
                        </CustomText>
                    </Pressable>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    jobItem: {
        width: '90%',
        marginLeft: '5%',
        backgroundColor: '#DFF2FF',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginTop: 10
    },
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#059862',
        borderRadius: 10
    },
    buttonApplied: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'gray',
        borderRadius: 10
    },
    require: {
        marginLeft: 10
    }
})

export default JobItem