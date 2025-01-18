import React from 'react';
import { Text } from 'react-native';
import { Relationship } from '../../models/Types';
import { MODAL_SHARED_STYLE } from '../../styles/ComponentStyles';
import ModalContentWrapper from './ModelContentWrapper';
import ModalButton from './ModalButton';

interface RelationshipModalProps {
    rel: Relationship | null;
    closeModal: () => void;
    handleInteraction: () => void;
}

const RelationshipModal: React.FC<RelationshipModalProps> = ({
    rel,
    closeModal,
    handleInteraction,
}) => {
    if (!rel) return null;

    return (
        <ModalContentWrapper title={rel.name} closeModal={closeModal}>
            <Text style={MODAL_SHARED_STYLE.modalDescription}>{rel.desc}</Text>
            <Text style={MODAL_SHARED_STYLE.modalDescription}>
                Marital Status: {rel.maritalStatus}
            </Text>
            <Text style={MODAL_SHARED_STYLE.modalDescription}>
                Job: {rel.work}
            </Text>

            <ModalButton
                onPress={handleInteraction}
                buttonText='Ask for money'
            />
        </ModalContentWrapper>
    );
};

export default RelationshipModal;
