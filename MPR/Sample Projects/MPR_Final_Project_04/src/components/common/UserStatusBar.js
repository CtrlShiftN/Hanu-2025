import { StyleSheet, Text, View } from "react-native"
import CustomText from "../CustomText/CustomText"

const UserStatusBar = ({percentage, showLabel = false})=> {
    const condition =(percentage)=>{
        if(percentage > 75){
            return '#8dff33'
        } else if (percentage >= 50 && percentage <75) {
            return '#fff629'
        } else if(percentage >=25 && percentage <50) {
            return '#ff5151'
        } else {
            return 'black'
        }
    }
    const styles= StyleSheet.create({
        statusBar: {
            width:'100%',
            height:18,
            borderRadius:10,
            backgroundColor:'#ffffff'
        },
        fill: {
            width: `${percentage}%`,
            backgroundColor: `${condition(percentage)}`,
            height:'100%',
            color:'#ffffff',
            borderRadius: 10
        }
    })
    
    return (
        <View style={styles.statusBar}>
            <View style={styles.fill}>
                {showLabel && 
                <CustomText align="center" fontSize={12} color="white" fontWeight="bold">{percentage}%</CustomText>}
            </View>
        </View>
    )
}

export default UserStatusBar