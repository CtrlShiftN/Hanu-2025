import { createContext, useState } from 'react';
import { Event, Job, NPC } from '../models/Types';
import { PLAYER_CONSTANTS } from '../constants/GameConstants';

export const GameContext = createContext({
    health: PLAYER_CONSTANTS.ZERO,
    money: PLAYER_CONSTANTS.ZERO,
    happiness: PLAYER_CONSTANTS.ZERO,
    smarts: PLAYER_CONSTANTS.ZERO,
    events: [] as Event[],
    activities: [] as string[],
    days: PLAYER_CONSTANTS.ZERO,
    jobs: new Array<string>(),
    coursesTaken: [] as string[],
    username: '',
    title: PLAYER_CONSTANTS.INITIAL_TITLE,
    gender: '',
    badDeeds: Array<string>(),
    goodDeeds: Array<string>(),
    setGender: (e: string) => {},
    setTitle: (e: string) => {},
    isTakeDailyLogin: false,
    setIsDailyLogin: (e: boolean) => {},
    setUsername: (e: string) => {},
    setJobs: (e: string[]) => {},
    setCoursesTaken: (e: string[]) => {},
    setDays: (e: number) => {},
    setHealth: (e: number) => {},
    setMoney: (e: number) => {},
    setHappiness: (e: number) => {},
    setSmarts: (e: number) => {},
    setActivities: (e: string[]) => {},
    setEvents: (e: Event[]) => {},
    isPause: true, // login vao game thi false
    setIsPause: (e: boolean) => {},
    setGoodDeeds: (deeds: string[]) => {},
    setBadDeeds: (deeds: string[]) => {},
    npcs: new Array<NPC>(),
    setNpcs: (list: NPC[]) => {},
    careers: new Array<Job>(),
    setCareers: (c: Job[]) => {},
});

interface Props {
    children: any;
}
export default function GameContextProvider({ children }: Props) {
    const [health, setHealth] = useState(PLAYER_CONSTANTS.INITIAL_HEALTH);
    const [money, setMoney] = useState(PLAYER_CONSTANTS.INITIAL_MONEY);
    const [happiness, setHappiness] = useState(
        PLAYER_CONSTANTS.INITIAL_HAPPINESS
    );
    const [activities, setActivities] = useState<string[]>([]); // Initialize activities as an empty array
    const [smarts, setSmarts] = useState(PLAYER_CONSTANTS.INITIAL_SMARTS);
    const [days, setDays] = useState(PLAYER_CONSTANTS.INITIAL_DAY);
    const [jobs, setJobs] = useState(new Array<string>());
    const [careers, setCareers] = useState(new Array<Job>());
    const [username, setUsername] = useState<string>(''); // Initialize username as an empty string
    const [coursesTaken, setCoursesTaken] = useState<string[]>([]);
    const [isTakeDailyLogin, setIsTakeDailyLogin] = useState(false);
    const [title, setTitle] = useState(''); // Initialize title as an empty string
    const [gender, setGender] = useState('');
    const [goodDeeds, setGoodDeeds] = useState(new Array<string>());
    const [badDeeds, setBadDeeds] = useState(new Array<string>());
    const [events, setEvents] = useState<Event[]>([]);
    const [isPause, setIsPause] = useState(true);
    const [npcs, setNpcs] = useState(new Array<NPC>());

    function setSmartsHandler(e: number) {
        let newSmarts = e;
        if (e < PLAYER_CONSTANTS.MIN_SMARTS) {
            newSmarts = PLAYER_CONSTANTS.MIN_SMARTS;
        }
        if (e > PLAYER_CONSTANTS.MAX_SMARTS) {
            newSmarts = PLAYER_CONSTANTS.MAX_SMARTS;
        }

        setSmarts(newSmarts);
    }

    function setHappinessHandler(e: number) {
        let newHappiness = e;
        if (e < PLAYER_CONSTANTS.MIN_HAPPINESS) {
            newHappiness = PLAYER_CONSTANTS.MIN_HAPPINESS;
        }
        if (e > PLAYER_CONSTANTS.MAX_HAPPINESS) {
            newHappiness = PLAYER_CONSTANTS.MAX_HAPPINESS;
        }

        setHappiness(newHappiness);
    }

    function setHealthHandler(e: number) {
        let newHealth = e;
        if (e < PLAYER_CONSTANTS.MIN_HEALTH) {
            newHealth = PLAYER_CONSTANTS.MIN_HEALTH;
        }
        if (e > PLAYER_CONSTANTS.MAX_HEALTH) {
            newHealth = PLAYER_CONSTANTS.MAX_HEALTH;
        }

        setHealth(newHealth);
    }

    function setMoneyHandler(e: number) {
        setMoney(e);
    }

    const context = {
        health: health,
        money: money,
        happiness: happiness,
        activities: activities,
        smarts: smarts,
        days: days,
        jobs: jobs,
        coursesTaken: coursesTaken,
        username: username,
        isTakeDailyLogin: isTakeDailyLogin,
        title: title,
        gender: gender,
        events: events,
        setEvents: setEvents,
        setGender: setGender,
        setTitle: setTitle,
        setIsDailyLogin: setIsTakeDailyLogin,
        setUsername: setUsername,
        setDays: setDays,
        setJobs: setJobs,
        setCoursesTaken: setCoursesTaken,
        setHealth: setHealthHandler,
        setMoney: setMoneyHandler,
        setHappiness: setHappinessHandler,
        setSmarts: setSmartsHandler,
        setActivities: setActivities,
        isPause: isPause,
        setIsPause: setIsPause,
        setGoodDeeds: setGoodDeeds,
        setBadDeeds: setBadDeeds,
        goodDeeds: goodDeeds,
        badDeeds: badDeeds,
        npcs: npcs,
        setNpcs: setNpcs,
        careers: careers,
        setCareers: setCareers,
    };

    return (
        <GameContext.Provider value={context}>{children}</GameContext.Provider>
    );
}
