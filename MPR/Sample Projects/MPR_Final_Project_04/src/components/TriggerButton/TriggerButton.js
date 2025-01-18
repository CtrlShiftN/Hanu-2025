import { Pressable, Image, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, Path, G } from 'react-native-svg';

function TriggerButton({onPress, percentage}) {
    const size = 150
    const strokeWidth = 10
    const center = size/2
    const radius = size/2 - strokeWidth / 2
    const c = 2 * Math.PI * radius

    return ( 
    <Pressable onPress={onPress} >
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle stroke="#404040" fill="white" cx={center} cy={center} r={radius} strokeWidth={strokeWidth}/>

                    <Circle stroke="#8eff58" 
                        cx={center} 
                        cy={center} 
                        fill="transparent"
                        r={radius} 
                        strokeWidth={strokeWidth} 
                        strokeDasharray={c}
                        strokeDashoffset={ c - (c *percentage) / 100}
                    >
                        
                    </Circle>
                </G>
            </Svg>
            <Image style={{width: 100, height: 100, position: "absolute"}} source={require("../../assets/images/coding_boy.png")} />
        </View>
    </Pressable> 
    );
}

export default TriggerButton;