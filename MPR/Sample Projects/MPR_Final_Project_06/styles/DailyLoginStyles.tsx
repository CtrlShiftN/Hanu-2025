import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';
import Sizes from '../constants/Sizes';

export const SCREEN_STYLES = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemCont: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    backIcon: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    heading: {
        fontSize: Sizes.xxl,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: Sizes.xxxl,
        marginBottom: Sizes.xl,
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: Sizes.xl,
    },
    dayItem: {
        alignItems: 'center',
        padding: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    currentDay: {
        backgroundColor: '#94A3B8',
    },
    dayText: {
        fontSize: Sizes.xxl,
        fontWeight: 'bold',
    },
    moneyText: {
        fontSize: Sizes.xl,
        color: Color.red,
    },
    buttonContainer: {
        backgroundColor: Color.red,
        paddingVertical: Sizes.md,
        paddingHorizontal: Sizes.xxl,
        borderRadius: Sizes.md,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: Sizes.lg,
        fontWeight: 'bold',
        color: 'white',
    },
});
