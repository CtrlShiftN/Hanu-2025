import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
    value: number;
    color: string;
    height?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color }) => {
    const styles = StyleSheet.create({
        progressBar: {
            width: '100%',
            backgroundColor: '#ddd',
            borderRadius: 5,
            overflow: 'hidden',
            position: 'relative',
            height: 20,
        },
        progress: {
            height: '100%',
            width: `${value}%`,
            backgroundColor: color,
        },
        progressText: {
            position: 'absolute',
            top: 10,
            left: 0,
            right: -300,
            bottom: 0,
            textAlign: 'center',
            lineHeight: 15,
            color: 'black',
        },
    });

    return (
        <>
            <View style={[styles.progressBar]}>
                <View style={styles.progress} />
            </View>
            <Text style={styles.progressText}>{`${value.toFixed(2)}%`}</Text>
        </>
    );
};

export default ProgressBar;
