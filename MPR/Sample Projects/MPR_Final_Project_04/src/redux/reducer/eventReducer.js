import events from "../../data/events.json"
const initialState = {
    stage: events.events[0]
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_EVENT":
            const stageList = []
            const playerAge = action.payload.player.age;
            events.events.forEach((event, index) => {
                if(event.condition.min <= playerAge && playerAge <= event.condition.max) {
                    stageList.push(event)
                }
            })

            return { ...state, stage: stageList[0] };
        default:
            return state;
    }
};

export default eventReducer;