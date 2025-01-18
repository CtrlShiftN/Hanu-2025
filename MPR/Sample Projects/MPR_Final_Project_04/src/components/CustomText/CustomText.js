import { StyleSheet, Text } from "react-native";
import {useFonts} from "expo-font"

function CustomText({children, style, numberOfLines = 100, align = "left", color="#3d3d3d", fontSize = 16, fontWeight = "normal", fontStyle = "normal"}) {
    const styles = StyleSheet.create({
        font: {
            fontFamily: "Outfit",
            color: `${color}`,
            fontSize: +`${fontSize}`,
            textAlign: `${align}`,
            fontWeight: `${fontWeight}`,
            fontStyle: `${fontStyle}`
        }
    })

    const [fontLoaded] = useFonts({
        "Outfit": require("../../assets/fonts/Outfit-Regular.ttf")
    })

    if(!fontLoaded) {
        return null
    }

return ( <Text style={[styles.font, style]} 
            numberOfLines={numberOfLines} 
            ellipsizeMode="tail">
            {children}
        </Text> );
}

export default CustomText;
