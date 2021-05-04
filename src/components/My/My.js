import React from "react";
import "./My.css";
import styled from 'styled-components';
import WhiteBox from "../common/WhiteBox";
import {MdAdd, MdNotificationsNone} from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import Member from "../common/Rightbar/Member/Member";

const WhiteBoxMy = styled(WhiteBox)`
  height: 250px;
  .member_profile {
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 10px;
  }
`;

const MyTitle = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  font-size: 10px;
  border-bottom: 1px solid #C9C9C9;
  @media only screen and (max-width: 978px) {
    padding: 10px 20px;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;

const My = () => {
  return (
    <my>
      <div className="my__container">
        <div className="fridge__cards">
          <div className="my__notice">
            <WhiteBoxMy>
              <MyTitle>
                <div className="icon-notice"><MdNotificationsNone/></div>
                <h2>알림</h2>
              </MyTitle>
            </WhiteBoxMy>
          </div>
          <div className="my__member">
            <WhiteBoxMy>
              <MyTitle>
                <h2>신선고 멤버 추가하기</h2>
                <Spacer/>
                <div className="plus"><MdAdd/></div>
              </MyTitle>
              <div className="member_profile">
                <Member type="my"/>
              </div>

            </WhiteBoxMy>
          </div>
        </div>
        <div className="my_menu">
          <div className="my_title">
            마이페이지
          </div>
          <div className="bar_title">
            메뉴이름
          </div>
          <div className="my_menu_bar">

          </div>
        </div>
      </div>
    </my>
  );
}

export default My;