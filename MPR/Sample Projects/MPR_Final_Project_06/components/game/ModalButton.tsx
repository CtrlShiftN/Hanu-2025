import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MODAL_SHARED_STYLE } from '../../styles/ComponentStyles'; 

type ActionButtonProps = {
    onPress: () => void;
    buttonText: string;
};

const ModalButton = ({ onPress, buttonText }: ActionButtonProps) => (
    <View style={MODAL_SHARED_STYLE.buttonDiv}>
        <TouchableOpacity style={MODAL_SHARED_STYLE.button} onPress={onPress}>
            <Text style={MODAL_SHARED_STYLE.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    </View>
);

export default ModalButton;
