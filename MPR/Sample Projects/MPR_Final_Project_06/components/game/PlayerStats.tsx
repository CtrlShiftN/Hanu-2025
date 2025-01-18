import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from './ProgressBar';
import { Color } from '../../constants/Color';
import {PLAYER_STATS_STYLES} from '../../styles/ComponentStyles';

interface PlayerStatsProps {
    health: number;
    smarts: number;
    happiness: number;
}

const PlayerStats: React.FC<PlayerStatsProps> = React.memo(
    ({ health, smarts, happiness }) => {
        return (
            <View style={PLAYER_STATS_STYLES.container}>
                <View style={PLAYER_STATS_STYLES.statCont}>
                    <Stat label='Health' value={health} />
                    <Stat label='Happiness' value={happiness} />
                    <Stat label='Smarts' value={smarts} />
                </View>
            </View>
        );
    }
);

const Stat: React.FC<{ label: string; value: number }> = ({ label, value }) => {
    const [iconName, setIconName] = React.useState<'heart' | 'happy' | 'book'>(
        'book'
    );

    useEffect(() => {
        if (label === 'Health') {
            setIconName('heart');
        } else if (label === 'Happiness') {
            setIconName('happy');
        } else if (label === 'Smarts') {
            setIconName('book');
        }
    }, [label]);

    return (
        <View style={PLAYER_STATS_STYLES.stat}>
            <View style={PLAYER_STATS_STYLES.statRow}>
                <Text style={PLAYER_STATS_STYLES.statLabel}>
                    {label + ' '}{' '}
                </Text>
                <Ionicons name={iconName} size={24} color={Color.red} />
            </View>
            <ProgressBar value={value} color={Color.black} />
        </View>
    );
};

export default PlayerStats;
