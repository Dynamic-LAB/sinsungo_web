import React from 'react';
import Modal from "../../common/Modal";


const SeasoningModal = ({visible, onConfirm, onCancel}) => {
    return(
        <Modal
            visible={visible}
            title = "조미료/양념 재료 추가"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};

export default SeasoningModal;