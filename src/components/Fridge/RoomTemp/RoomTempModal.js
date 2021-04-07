import React from 'react';
import Modal from "../../common/Modal";


const RoomTempModal = ({visible, onConfirm, onCancel}) => {
    return(
        <Modal
            visible={visible}
            title = "상온 재료 추가"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};

export default RoomTempModal;