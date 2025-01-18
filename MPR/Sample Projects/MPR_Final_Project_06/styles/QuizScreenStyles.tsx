import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';
import Sizes from '../constants/Sizes';

export const SCREEN = StyleSheet.create({
    questionCont: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    heading: {
        fontSize: Sizes.xxl,
        fontWeight: 'bold',
        marginBottom: Sizes.xl,
        textAlign: 'center',
    },
    question: {
        fontSize: Sizes.lg,
        marginBottom: Sizes.xl,
        textAlign: 'center',
    },
    option: {
        padding: Sizes.md,
        margin: Sizes.sm,
        borderRadius: Sizes.sm,
        backgroundColor: Color.lightGrey,
    },
    optionText: {
        fontSize: Sizes.lg,
    },
    progressCont: {
        marginBottom: Sizes.xl,
        width: '80%',
        height: Sizes.xl,
    },
});
