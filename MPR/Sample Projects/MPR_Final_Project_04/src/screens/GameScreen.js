import { useDispatch, useSelector } from "react-redux";
import EventMileStoneBox from "../components/EventComponent/EventMilestoneBox";
import { getStageRedux, getPlayerRedux, getTimeRedux, getEventRedux } from "../redux/data";
import { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import UserInfoBoard from "../components/UserInfoBoard/UserInfoBoard";
import TriggerButton from "../components/TriggerButton/TriggerButton";
import CustomText from "../components/CustomText/CustomText";
import PopupModal from "../components/Popup/PopupModal";
import NotiPopupModal from "../components/Popup/NotiPopupModal";
import ChooseLayout from "../layout/ChooseLayout";
import { randomNumberInRange } from "../utils/Random";
import { useNavigation } from "@react-navigation/native";
import DailyRewardWindow from "../components/DailyReward/DailyRewardWindow";
function GameScreen() {
    const dispatch = useDispatch()
    // const [player, setPlayer] = useState(getPlayerRedux())
    const player = useSelector(state => state.playerReducer.player)
    const [stage, setStage] = useState(getStageRedux())
    const [showEvent, setShowEvent] = useState(false)
    const [percentage, setPercentage] = useState(0)
    const [currentTimeInAge, setCurrentTimeInAge] = useState(1)
    const [events, setEvents] = useState(getEventRedux()[0])
    const [uniReward, setUniReward] = useState(false)
    const [showDailyReward, setShowDailyReward] = useState(false)
    const timePerYear = 12 * 60
    const navigation = useNavigation()
    const levelUp = () => {
        dispatch({type: "INCREASE_AGE"})
        setCurrentTimeInAge(1)
        dispatch({type: "CALCULATE_SALARY_AND_BANK"})
        // setPlayer(player => player = getPlayerRedux())
        dispatch({type: "GET_EVENT", payload: {player}})
        setStage(getStageRedux())
        setEvents(events => events = getEventRedux())
        setShowEvent(true)
    }

    const filterEvent = () => {
        const milestoneAge = [0, 1, 2, 3, 4, 5, 6, 12,18]
        let e = getEventRedux()
        if(milestoneAge.includes(player.age)) {
            setEvents(e[0])
        } else {
            const randomIndex = randomNumberInRange(1, e.length - 1)
            if(e[randomIndex] !== undefined) {setEvents(e[randomIndex])}
        }
    }

    useEffect(() => { 
        const intervalID = setInterval(() => {
            dispatch({type: "INCREASE_TIME"})
            const currentTime = getTimeRedux()
            const timeToIncreaseAge = (player.age + 1) * timePerYear
            setCurrentTimeInAge(currentTimeInAge => currentTimeInAge + 1)
            setPercentage(currentTimeInAge * 100 / timePerYear)
            if(currentTime === timeToIncreaseAge && player.alive) {
                levelUp()
            } 

        }, 1000);

        return () => {clearInterval(intervalID)}
    }, [stage, showEvent, dispatch, events, currentTimeInAge, showDailyReward])


    useEffect(() => {
        if(player.alive) {
            filterEvent()
        }

        if(player.age < 6 && !showDailyReward) {
            setShowEvent(true)
        }
    }, [player])
    return ( <ChooseLayout>
         <View style={styles.wrapper}>
            <View style={styles.center}>
                <UserInfoBoard />
            </View> 

            <View style = {[styles.center]}>
                <TriggerButton percentage = {percentage} onPress={() => {
                    if(player.alive) {
                        levelUp()
                        dispatch({type: "SET_TIME", payload: (player.age + 1)  * timePerYear})
                    } else {
                        navigation.navigate("ProfileScreen")
                    }
                }}/>

                <Pressable style={{position: "absolute", right: 0, top: 0}} onPress={() => {setShowDailyReward(true)}}>
                    <Image source={require("../assets/images/icon/gift.png")} />
                </Pressable>
            </View>
            <View style = {styles.center}>
                <EventMileStoneBox milestones={player.mileStones}/>
            </View>
            <View>
                <CustomText align="center" color="white">Age: {player.age}</CustomText>
            </View>
        </View>

        {showEvent && events.options != null && <PopupModal
            visible={true}
            question = {events.message}
            options = {events.options}
            player = {player}
            hideFunction = {() => {setShowEvent(false)}}
            onChooseOption = {() => {
                setShowEvent(false); 
                // setPlayer(player => player = getPlayerRedux())
                setStage(stage => stage = getStageRedux())

                // if(player.age === 18 && !uniReward && showEvent == false) {
                //     const ev = {
                //                 "message": "You received $1,500 from parents.",
                //                 "condition": "",
                //                 "status": "good",
                //                 "effect": {
                //                     "type": "MODIFY_STATISTIC",
                //                     "payload": {
                //                         "happiness": "+5",
                //                         "amount": "+1500"
                //                     }
                //                 }
                //         }
                //     setEvents(ev)
                //     setShowEvent(true); 
                // }
            }}
        />}

        {showEvent && events.effect != null && <NotiPopupModal 
            visible={true}
            message = {events.message}
            event = {events}
            onPress = {() => {
                setShowEvent(false); 
                dispatch({type: events.effect.type, payload: events.effect.payload})
                dispatch({type: "GET_EVENT", payload: {player}})
                dispatch({type: "UPDATE_MILESTONE", payload: {message: events.message, age: player.age}})
                if(player.age === 18) {
                    setUniReward(true)
                }
                // showNextEvent()
            }}
        />}

        {player.age === 18 && !uniReward && player.university.length > 0 && 
            <NotiPopupModal
            visible={true}
            message = {"You received $1,500 from parents."}
            event = {{
                "message": "You received $1,500 from parents.",
                "condition": "",
                "status": "good",
                "effect": {
                    "type": "MODIFY_STATISTIC",
                    "payload": {
                        "happiness": "+5",
                        "amount": "+1500"
                    }
                }
            }}
            onPress = {() => {
                setUniReward(true); 
                dispatch({type: "MODIFY_STATISTIC", payload: {
                    "happiness": "+5",
                    "amount": "+1500"
                }})
                // dispatch({type: "GET_EVENT", payload: {player}})
                dispatch({type: "UPDATE_MILESTONE", payload: {message: "You received $1,500 from parents.", age: 18}})
                // if(player.age === 18) {
                //     setUniReward(true)
                // }
                // showNextEvent()
            }}
        />}
        

        {showDailyReward && <DailyRewardWindow 
                    visible={true} 
                    close = {() => {
                        // setPlayer(getPlayerRedux()); 
                    setShowDailyReward(false); }} 
                    currentDay = {player.timesReceivedReward + 1}
                    dailyLoginStreak = {player.dailyLoginStreak}
                    />
        }
        
    </ChooseLayout> );
}

export default GameScreen;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "transparent",
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: "space-evenly"
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    borderTimer: {
        backgroundColor: "#404040",
        borderRadius: 99
    },
    borderTimerOverlay: {
        backgroundColor: "#8eff58",
        padding: 10,
        borderRadius: 99
    }
})