import React from 'react';
import { View, Text } from 'react-native';
import { SECTION_HEADER_STYLES } from '../../styles/ComponentStyles';

interface HeaderProps {
    heading: string;
}

const Header: React.FC<HeaderProps> = ({ heading }) => {
    return (
        <View style={SECTION_HEADER_STYLES.headerCont}>
            <Text style={SECTION_HEADER_STYLES.heading}>{heading}</Text>
        </View>
    );
};

export default Header;
