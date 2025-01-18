import React from 'react';
import { View, Text } from 'react-native';
import ProgressBar from './ProgressBar';
import { AGE_STATUS_STYLES } from '../../styles/ComponentStyles';

interface AgeStatusProps {
    age: number;
    value: number;
    color: string;
}

const AgeStatus: React.FC<AgeStatusProps> = ({ age, value, color }) => {
    return (
        <View style={AGE_STATUS_STYLES.container}>
            <Text style={AGE_STATUS_STYLES.ageText}>Age {age}</Text>
            <ProgressBar value={value} color={color} />
        </View>
    );
};

export default AgeStatus;
