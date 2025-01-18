import React from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MODAL_SHARED_STYLE } from '../../styles/ComponentStyles';

interface ModalContentProps {
    title: string;
    children: React.ReactNode;
    closeModal: () => void;
    isOpened?: boolean;
}

export const ModalContentWrapper: React.FC<ModalContentProps> = ({
    title,
    children,
    closeModal,
    isOpened,
}) => {
    return (
        <Modal
            visible={true && isOpened}
            animationType='slide'
            transparent={true}
            statusBarTranslucent={true}
        >
            <View style={MODAL_SHARED_STYLE.modalContainer}>
                <View style={MODAL_SHARED_STYLE.modalContent}>
                    <View style={MODAL_SHARED_STYLE.modalHeader}>
                        <Text style={MODAL_SHARED_STYLE.modalTitle}>
                            {title}
                        </Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Ionicons name='close' size={24} color='#333' />
                        </TouchableOpacity>
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

export default ModalContentWrapper;
