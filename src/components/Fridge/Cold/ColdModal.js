import React from 'react';
import Modal from "../../common/Modal";

const ColdModal = ({visible, onConfirm, onCancel}) => {
    return(
        <Modal
            visible={visible}
            title = "냉장 재료 추가"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};

export default ColdModal;