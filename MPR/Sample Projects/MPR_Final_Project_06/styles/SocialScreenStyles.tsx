import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';
import Sizes from '../constants/Sizes';
 
export const SCREEN = StyleSheet.create({
    item: {
        padding: Sizes.lg,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    type: {
        fontSize: Sizes.md,
        fontWeight: 'bold',
        color: Color.red,
    },
    title: {
        fontSize: Sizes.lg,
        fontWeight: 'bold',
    },
    description: {
        fontSize: Sizes.lg,
        marginTop: Sizes.md,
    },
    list: {
        height: '75%',
    },
    cardHeader: {
        justifyContent: 'space-between',
    },
});