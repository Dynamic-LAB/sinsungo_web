import React from 'react';
import Modal from "../Modal";

const MemberModal  = ({visible, onConfirm, onCancel}) => {
    return(
        <Modal
            visible={visible}
            title = "냉장고 멤버 추가"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};

export default MemberModal;