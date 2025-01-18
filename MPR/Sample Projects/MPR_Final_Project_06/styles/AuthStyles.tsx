import { StyleSheet } from 'react-native';
import { Color } from '../constants/Color';

export const AUTH_STYLES = StyleSheet.create({
    text: {
        color: Color.black,
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
    },
    inputContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2,
    },
});

export const BUTTON_STYLES = StyleSheet.create({
    button: {
        backgroundColor: Color.black,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export const SHARED_INPUT_STYLES = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 60,
        borderWidth: 1,
        borderColor: '#CBD5E1',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
    },
})


export const BOTTOM_NAV_STYLES = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    to: {
        color: Color.black,
        fontWeight: 'bold',
        fontSize: 17,
    },
});

export const TOP_IMAGE_STYLES = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
