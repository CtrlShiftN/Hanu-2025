import { Image, View } from "react-native";

function Avatar({age, sex, style}) {
    const getImage = () => {
        if (sex == 0 || sex == "Male") {
            if(0 <= age && age <= 17) {
                return <Image source={require("../../assets/images/people/boy.png")} style={style}/>
            } else if (18 <= age && age <= 35) {
                return <Image source={require("../../assets/images/people/teen_boy.png")} style={style}/>
            } else {
                return <Image source={require("../../assets/images/people/old_man.png")} style={style}/>
            }
        } else {
            if(0 <= age && age <= 17) {
                return <Image source={require("../../assets/images/people/girl.png")} style={style}/>
            } else if (18 <= age && age <= 35) {
                return <Image source={require("../../assets/images/people/teen_girl.png")} style={style}/>
            } else {
                return <Image source={require("../../assets/images/people/old_woman.png")} style={style}/>
            }
        }
    }
    return (
        <View style={{justifyContent: "center", alignItems: "center"}}>
            {getImage()}
        </View>
    );
}

export default Avatar;