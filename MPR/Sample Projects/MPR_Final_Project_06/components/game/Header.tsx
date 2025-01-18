import React from 'react';
import { View, Text } from 'react-native';
import {PLAYER_HEADER_STYLES} from '../../styles/ComponentStyles';

interface HeaderProps {
    username: string;
    userTitle: string;
    balance: number;
}

const Header: React.FC<HeaderProps> = ({ username, userTitle, balance }) => {
    return (
        <View style={PLAYER_HEADER_STYLES.container}>
            <View style={PLAYER_HEADER_STYLES.leftCont}>
                <Text style={PLAYER_HEADER_STYLES.username}>{username}</Text>
                <Text style={PLAYER_HEADER_STYLES.userTitle}>
                    Title: {userTitle}
                </Text>
            </View>

            <View style={PLAYER_HEADER_STYLES.rightCont}>
                <Text style={PLAYER_HEADER_STYLES.balance}>${balance}</Text>
                <Text>Balance</Text>
            </View>
        </View>
    );
};


export default Header;
