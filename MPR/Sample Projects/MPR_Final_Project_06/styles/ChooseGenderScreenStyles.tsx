import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';

export const SCREEN_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    genderContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    genderImage: {
        width: 160,
        height: 200,
        marginRight: 20,
    },
    selectedGenderImage: {
        borderWidth: 2,
        borderColor: Color.red,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 16,
    },
    confirmButton: {
        backgroundColor: Color.red,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    confirmButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.white,
    },
});
