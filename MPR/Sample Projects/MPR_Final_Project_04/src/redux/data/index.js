import store from "../store";

const getIsPortraitRedux = () => {
    const state = store.getState();
    const isPortrait = state.orientationReducer.isPortrait;
    return isPortrait
}

const getPlayerRedux = () => {
    const state = store.getState();
    const player = state.playerReducer.player;
    return player
}

const getTimeRedux = () => {
    const state = store.getState();
    const time = state.playerReducer.time
    return time
}

const getStageRedux = () => {
    const state = store.getState();
    const stages = state.eventReducer.stage
    return stages
}

const getEventRedux = () => {
    const state = store.getState();
    const events = state.eventReducer.stage.events
    return events
}
export {getIsPortraitRedux, getPlayerRedux, getTimeRedux, getStageRedux, getEventRedux}