import { ADD_CAREER, ADD_RELATION, CHOOSE_BANK, CHOOSE_CITY, CHOOSE_UNIVERSITY, DECREASE_HAPPINESS, DECREASE_HEALTH, DECREASE_LOOK, DECREASE_SKILLS, DECREASE_SMART, INCREASE_AGE, INCREASE_HAPPINESS, INCREASE_HEALTH, INCREASE_LOOK, INCREASE_SKILLS, INCREASE_SMART } from "./actionType";

export const increaseAge = (value) => {
    return {
        type: INCREASE_AGE,
        payload: value
    }
}
export const increaseHappiness = (value) => {
    return {
        type: INCREASE_HAPPINESS,
        payload: value
    };
}

export const decreaseHappiness = (value) => {
    return {
        type: DECREASE_HAPPINESS,
        payload: value
    }
}

export const increaseHealth = (value) => {
    return {
        type: INCREASE_HEALTH,
        payload: value
    }
}

export const decreaseHealth = (value) => {
    return {
        type: DECREASE_HEALTH,
        payload: value
    }
}

export const increaseSmart = (value) => {
    return {
        type: INCREASE_SMART,
        payload: value
    }
}

export const decreaseSmart = (value) => {
    return {
        type: DECREASE_SMART,
        payload: value
    }
}

export const increaseLook = (value) => {
    return {
        type: INCREASE_LOOK,
        payload: value
    }
}

export const decreaseLook = (value) => {
    return {
        type: DECREASE_LOOK,
        payload: value
    }
}

export const increaseSkills = (value) => {
    return {
        type: INCREASE_SKILLS,
        payload: value
    }
}

export const decreaseSkills = (value) => {
    return {
        type: DECREASE_SKILLS,
        payload: value
    }
}

export const chooseBank = (bank) => {
    return {
        type: CHOOSE_BANK,
        payload: bank
    }
}

export const addJob = (job) => {
    return {
        type: ADD_CAREER,
        payload: job
    }
}

export const chooseCity = (city) => {
    return {
        type: CHOOSE_CITY,
        payload: city
    }
}

export const addRelation = (relation)=> {
    return {
        type: ADD_RELATION,
        payload: relation
    }
}

export const choseUniversity =(university)=> {
    return {
        type: CHOOSE_UNIVERSITY,
        payload: university
    }
}