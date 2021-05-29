import React from 'react';
import {MdNotificationsNone, MdSupervisorAccount} from "react-icons/md";
import styled from 'styled-components';
import './Right.css';
import WhiteBox from "../WhiteBox";
import Member from "./Member/Member";
import MemberAddButton from "./Member/MemberAddButton";

const WhiteBoxNotice = styled(WhiteBox)`
  height: 200px;
`;

const WhiteBoxMember = styled(WhiteBox)`
  height: auto;
`;

const NoticeBlock = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;

const ItemBlock = styled.div`
  display: block;
  color: #393939;
  font-size: 12px;
  padding: 5px 0 5px 0;
  border-bottom: 1px solid #bbbbbb;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;


const Right = () => {
  return (
    <div className="right">
      <div className="right__container">
        <div className="right__cards">
          {/*알림*/}
          <WhiteBoxNotice>
            <div className="notice_card_title">
              <div className="icon-notice"><MdNotificationsNone/></div>
              <h2>알림</h2>
            </div>
            <NoticeBlock>
              <ItemBlock>알림1</ItemBlock>
              <ItemBlock>알림2</ItemBlock>
            </NoticeBlock>
          </WhiteBoxNotice>

          {/*멤버*/}
          <WhiteBoxMember>
            <div className="member_card_title">
              <div className="icon-member"><MdSupervisorAccount/></div>
              <h2>냉장고멤버</h2>
              <Spacer/>
              <MemberAddButton/>
            </div>
            <div className="r_card_inner">
              <Member type='right'/>
            </div>
          </WhiteBoxMember>
        </div>
      </div>
    </div>
  );
}

export default Right;