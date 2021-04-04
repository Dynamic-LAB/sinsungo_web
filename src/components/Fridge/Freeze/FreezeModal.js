import React from 'react';
import Modal from "../../common/Modal";


const FreezeModal = ({visible, onConfirm, onCancel}) => {
    return(
        <Modal
            visible={visible}
            title = "냉동 재료 추가"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};

export default FreezeModal;