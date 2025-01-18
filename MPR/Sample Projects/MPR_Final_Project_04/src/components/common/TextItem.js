import { StyleSheet, View } from "react-native"
import CustomText from "../CustomText/CustomText"
const TextItem = ({ title, content, fontWeight, fontSize, showTitle = true, align="left" }) => {
    return (
        <View style={styles.textItem}>
            <View style={styles.titleContentContainer}>
                {showTitle && <CustomText fontSize={15} color="blue" fontWeight="bold">
                   {title}: </CustomText>}
                <CustomText color="black" fontSize={fontSize} fontWeight={fontWeight} align={align}>{content}</CustomText>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textItem: {
        flexDirection: 'row',
        marginTop: 5,
    },
    titleContentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default TextItem;

