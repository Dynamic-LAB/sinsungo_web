import React, {useState} from 'react';
import {MdNotificationsNone, MdSupervisorAccount} from "react-icons/md";
import styled from 'styled-components';
import './Right.css';
import WhiteBox from "../WhiteBox";
import Member from "./Member/Member";
import MemberAddButton from "./Member/MemberAddButton";
import NoticeList from "../../My/Notice/NoticeList";
import AskModal from '../../My/AskModal';

const WhiteBoxNotice = styled(WhiteBox)`
  height: 300px;
`;

const WhiteBoxMember = styled(WhiteBox)`
  height: auto;
`;

const NoticeBlock = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
  margin: 5px 0;
  overflow-y: auto;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Right = () => {
  const [notices, setNotice] = useState([

    {
      id : 1,
      day: '1',
      item: '감자',
    },
    {
      id : 2,
      day: '1',
      member: '송윤경',
      used: true,
      update: false,
      write: true,
    },
    {
      id : 3,
      day: '2',
      item: '고구마',
    },
    {
      id : 4,
      day: '1',
      member: '서현지',
      used: false,
      update: true,
      write: true,
    },

  ])
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
              <NoticeList notices={notices} type="right"/>
            </NoticeBlock>
          </WhiteBoxNotice>

          {/*멤버*/}
          <WhiteBoxMember>
            <div className="member_card_title">
              <div className="icon-member"><MdSupervisorAccount/></div>
              <h2>냉장고멤버</h2>
              <Spacer/>
              {/*<MemberAddButton/>*/}
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