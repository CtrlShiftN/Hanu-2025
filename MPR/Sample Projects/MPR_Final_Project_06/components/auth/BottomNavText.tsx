import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BOTTOM_NAV_STYLES } from '../../styles/AuthStyles';

interface BottomNavTextProps {
    title: string;
    text: string;
    onPress: () => void;
}

export const BottomNavText: React.FC<BottomNavTextProps> = ({
    title,
    text,
    onPress,
}) => {
    return (
        <View style={BOTTOM_NAV_STYLES.container}>
            <Text>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={BOTTOM_NAV_STYLES.to}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

