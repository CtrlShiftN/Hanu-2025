import { Dimensions } from "react-native";

const getInitialOrientation = () => {
    const { height, width } = Dimensions.get("window");
    return height > width ? true : false; 
};

const initialState = {
    isPortrait: getInitialOrientation()
};

const orientationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "update":
            state.isPortrait = action.payload
        // Define how the state should change for each action type
        default:
            return state;
    }
};

export default orientationReducer;