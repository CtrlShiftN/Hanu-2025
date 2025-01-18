import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { BUTTON_STYLES } from '../../styles/AuthStyles';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={BUTTON_STYLES.button}>
            <Text style={BUTTON_STYLES.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
