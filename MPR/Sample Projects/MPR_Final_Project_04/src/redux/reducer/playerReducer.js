import { useNavigation } from "@react-navigation/native";
import Player from "../../data/models/Player";
import {useDispatch} from 'react-redux'

const initialState = {
    player: new Player(),
    time: 0
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "SET_PLAYER":
            return {...state, player: {...state.player, ...action.payload}}
        case "INCREASE_TIME":
            return { ...state, time: state.time + 1 }
        case "SET_TIME":
            return { ...state, time: action.payload };
        case "INCREASE_AGE":
            return {
                ...state,
                player: {
                    ...state.player,
                    age: state.player.age + 1
                }
            };
        case "COUNTINUE_CHILDHOOD":
            return state
        
        case "SKIP_CHILDHOOD":
            return { ...state, time: 6*12*20, player: {
                ...state.player, age: 6
            }}

        case "JOIN_ELE_SCHOOL":
            return {...state, player: {...state.player, elementarySchool: true}}
        
        case "JOIN_SEC_SCHOOL":
            return {...state, player: {...state.player, secondarySchool: true}}
        case "CHOOSE_UNIVERSITY":
            return {...state, player: {...state.player, university: action.payload}}
        case "MODIFY_STATISTIC":
            const defaultStatistic = {
                happiness: +action.payload.happiness || 0,
                health: +action.payload.health || 0,
                smart: +action.payload.smart || 0,
                look: +action.payload.look || 0,
                skills: +action.payload.skills || 0,
                amount: +action.payload.amount || 0,
            }

            const modifyHealth = () => {
                let heath = state.player.health + defaultStatistic.health
                if(heath < 1) {
                    return health = 2
                }
                if(heath > 100) {
                    return heath = 100
                }

                return heath
            }

            return {...state, player: {...state.player, 
                happiness: state.player.happiness + defaultStatistic.happiness <= 100 ? state.player.happiness + defaultStatistic.happiness : 100,
                health:modifyHealth(),
                smart:state.player.smart + defaultStatistic.smart <= 100 ? state.player.smart + defaultStatistic.smart : 100,
                look:state.player.look + defaultStatistic.look <= 100 ? state.player.look + defaultStatistic.look : 100,
                skills:state.player.skills + defaultStatistic.skills <= 100 ? state.player.skills + defaultStatistic.skills : 100,
                amount:state.player.amount + defaultStatistic.amount 
                
            }}
        case "PASS_AWAY":
            return {...state, player: {...state.player, alive: false}}
        case "ADD_COURSE":
            return {...state, player: {...state.player, course:[...state.player.course,action.payload]}}
        case "ADD_JOB":
            return {...state, player: {...state.player, currentJob : action.payload}}
        case "ADD_PRODUCT":
            return {...state, player: {...state.player, shop:[...state.player.shop, action.payload]}}
        case "ADD_FRIENDLIST":
            return {...state, player: {...state.player, friendList:[...state.player.friendList, action.payload], happiness: state.player.happiness + 2}}
            case "DEAD" :
            return {...state, player: {...state.player, alive: false, health: 0, deathReason: action.payload.deathReason}}
        case "UPDATE_DAILY_REWARD_STREAK" :
            return {...state, player: {...state.player, dailyLoginStreak: action.payload}}
        case "UPDATE_DAILY_REWARD_DAY":
            return {...state, player: {...state.player, lastDayDailyReward: new Date().getTime()}}
        case "UPDATE_DAILY_REWARD_COUNT" :
            return {...state, player: {...state.player, timesReceivedReward: state.player.timesReceivedReward + 1}}
        case "DEPOSIT": 
            return {...state, player: {...state.player, bank: state.player.bank + action.payload, amount: state.player.amount - action.payload}}
        case "WITHDRAW": 
            return {...state, player: {...state.player, bank: state.player.bank - action.payload, amount: state.player.amount + action.payload}}
        case "CALCULATE_SALARY_AND_BANK": 
            let salary = 0
            if(state.player.currentJob !== null) {
                salary = state.player.currentJob.salary
            }
            return {...state, player: {...state.player, bank: Math.floor(state.player.bank + state.player.bank * 0.06) , amount:state.player.amount + salary}}
        case "UPDATE_MILESTONE" :
            return {...state, player: {...state.player, mileStones: [...state.player.mileStones, action.payload]}}
        default:
        return state;
    }
};

export default playerReducer;