import { View } from "react-native";
import CustomText from "../CustomText/CustomText";
import { cloneElement } from "react";

function ProfileRow({icon, title, content}) {
    return ( 
        <View style = {{flexDirection: "row", gap: 10, alignItems: "center"}}>
            <View style = {{flexDirection: "row", gap: 10, alignItems: "center"}}>
                {icon}
                <CustomText fontWeight="bold" color="white" fontSize={20}>{title}</CustomText>
            </View>
            <View style={{paddingLeft: 30}}>
                <CustomText color="white" fontSize={20}>{content}</CustomText>
            </View>
        </View>
    );
}

export default ProfileRow;