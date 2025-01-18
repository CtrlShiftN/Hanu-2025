import React from 'react';
import { Activity, Education, Job } from '../../models/Types';
import ModalDetails from './ModalDetails';
import ModalButton from './ModalButton';
import ModalContentWrapper from './ModelContentWrapper';

interface ModalProps {
    modalObject: Education | Activity | Job | null | undefined;
    closeModal: () => void;
    handlePress: () => void;
    buttonText: string;
}

const EducationModal: React.FC<ModalProps> = ({
    modalObject,
    closeModal,
    handlePress,
    buttonText,
}) => {
    if (!modalObject) return null;

    return (
        <ModalContentWrapper title={modalObject.name} closeModal={closeModal}>
            <ModalDetails
                description={modalObject.desc}
                ageNeeded={modalObject.ageNeeded}
                effect={modalObject.effect}
                prerequisite={modalObject.prerequisite}
            />
            <ModalButton onPress={handlePress} buttonText={buttonText} />
        </ModalContentWrapper>
    );
};

export default EducationModal;
