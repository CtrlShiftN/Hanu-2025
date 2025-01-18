import { getPlayerRedux } from "../redux/data"

const checkConditionApplyCourse =(smart, skill)=> {
    const player = getPlayerRedux()
    if(player.smart >= smart && player.skills >= skill){
        return true
    } else {
        return false
    }
}

export default checkConditionApplyCourse