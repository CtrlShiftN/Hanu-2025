import React from 'react';
import { ImageBackground } from 'react-native';
import { TOP_IMAGE_STYLES } from '../../styles/AuthStyles';

const image = require('../../assets/images/bg.jpg');

const TopBackground = () => {
    return (
        <ImageBackground
            source={image}
            resizeMode='cover'
            style={TOP_IMAGE_STYLES.image}
        />
    );
};

export default TopBackground;
