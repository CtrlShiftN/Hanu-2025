import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';
import Sizes from '../constants/Sizes';

export const GLOBAL_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        alignItems: 'center',
    },
    maxWidth: {
        width: '100%',
    },
    flexRow: {
        flexDirection: 'row',
        gap: Sizes.md
    },
    flexColumn: {
        flexDirection: 'column'
        ,gap: Sizes.md
    }
});
