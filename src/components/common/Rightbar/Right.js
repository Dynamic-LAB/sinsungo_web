import React from 'react';
import {MdAdd} from "react-icons/md";
import styled from 'styled-components';
import './Right.css';
import WhiteBox from "../WhiteBox";

const WhiteBoxNotice = styled(WhiteBox)`
  height: 200px;
`;

const WhiteBoxMember = styled(WhiteBox)`
  height: 100px;
`;

const NoticeBlock = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

const NoticeItem = styled.div`
  color: #393939;
  font-size: 12px;
  padding: 5px 0 5px 0;
  border-bottom: 1px solid #bbbbbb;
`;

const Right = () => {
    return (
        <div className="right">
            <div className="right__container">
                <div className="right__cards">

                    {/*알림*/}
                    <WhiteBoxNotice>
                        <div className="notice_card_title">
                            <i className="fa fa-bell-o"></i>
                            <h2>알림</h2>
                        </div>
                        <NoticeBlock>
                            <NoticeItem>알림1</NoticeItem>
                            <NoticeItem>알림2</NoticeItem>
                        </NoticeBlock>
                    </WhiteBoxNotice>

                    {/*멤버*/}
                    <WhiteBoxMember>
                        <div className="member_card_title">
                            <h2>냉장고멤버</h2>
                            <div className="plus"><MdAdd/></div>
                        </div>
                        <div className="r_card_inner">

                        </div>
                    </WhiteBoxMember>

                </div>
            </div>
        </div>
    );
}

export default Right;