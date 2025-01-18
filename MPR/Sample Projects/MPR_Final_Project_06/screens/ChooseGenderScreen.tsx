import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { GameContext } from '../store/GameContext';
import ModalButton from '../components/game/ModalButton';
import { SCREEN_STYLES } from '../styles/ChooseGenderScreenStyles';
import { GAME_TEXT_CONSTANTS, PLAYER_CONSTANTS } from '../constants/GameConstants';

interface Props {
    navigation: any;
}

const ChooseGenderScreen: React.FC<Props> = ({ navigation }) => {
    const context = useContext(GameContext);
    const [isMale, setIsMale] = useState<boolean>(true);

    const handleConfirmGender = () => {
        context.setGender(isMale ? PLAYER_CONSTANTS.GENDER_MALE : PLAYER_CONSTANTS.GENDER_FEMALE);
        context.setIsPause(false);
        navigation.navigate('Game');
    };

    return (
        <View style={SCREEN_STYLES.container}>
            <Text style={SCREEN_STYLES.heading}>Choose Your Gender</Text>
            <View style={SCREEN_STYLES.genderContainer}>
                <TouchableOpacity onPress={() => setIsMale(true)}>
                    <Image
                        source={require('../assets/images/male0-5.png')}
                        style={[
                            SCREEN_STYLES.genderImage,
                            isMale && SCREEN_STYLES.selectedGenderImage,
                        ]}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsMale(false)}>
                    <Image
                        source={require('../assets/images/female0-5.png')}
                        style={[
                            SCREEN_STYLES.genderImage,
                            !isMale && SCREEN_STYLES.selectedGenderImage,
                        ]}
                    />
                </TouchableOpacity>
            </View>

            <ModalButton onPress={handleConfirmGender} buttonText={GAME_TEXT_CONSTANTS.CONFIRM_BUTTON_TEXT} />
        </View>
    );
};


export default ChooseGenderScreen;
