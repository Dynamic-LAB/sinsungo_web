import React, {useCallback, useEffect, useState} from "react";
import "./My.css";
import styled from 'styled-components';
import WhiteBox from "../common/WhiteBox";
import {MdAdd, MdNotificationsNone} from "react-icons/md";
import Member from "../common/Rightbar/Member/Member";
import {Link} from "react-router-dom";
import MemberAddButton from "../common/Rightbar/Member/MemberAddButton";
import AskModal from "./AskModal";
import NoticeItem from "./Notice/NoticeItem";
import NoticeList from "./Notice/NoticeList";
import Footer from "../common/Footer";
import GetMemberByRefrigratorId from "../ForServer/GetMemberByRefrigratorId"
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
const MenuItemBlock = styled.div`
  display: block;
  justify-content: flex-start;
  color: #393939;
  padding: 20px 0;
  border-radius: 3px;
  border-bottom: 1px solid #C9C9C9;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: #3C82D9;
    text-shadow: none;
  }
`;
const Spacer = styled.div`
  flex-grow: 1;
`;
const ListBlock = styled.div`
  overflow-y: auto;
  margin: 10px 5px;
`;
const NoticeTable = styled.table`
  width: 100%;
`;
const TableThead = styled.thead`
  
`;
const TableTbody = styled.tbody`
  
`;
const My = () => {
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
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);

  //탈퇴팝업 클릭 액션
  const onCheck = () => {
    setModal(true);
  };
  //강퇴팝업 클릭 액션
  const onBanCheck = () => {
    setOpen(true);
  };
  const onCancel = () => {
    setModal(false);
    setOpen(false);
  };
  //탈퇴팝업 탈퇴버튼 액션
  const onWithdrawal = () => {
    setModal(false);
  };
  //강퇴팝업 강퇴버튼 액션
  const onBan = () => {
    setOpen(false);
  };
  const onRemove = useCallback(
      id => {
        setNotice(notices.filter(notice => notice.id !== id));
      },
      [notices],
  );
  const [members,SetMembers]=useState()
  useEffect(()=>{
    GetMemberByRefrigratorId({refId:JSON.parse(window.sessionStorage.getItem('User')).newRefId,SetMembers:SetMembers})
  },[])
  return (
    <div id="my">
      <div className="my__container">
        <div className="fridge__cards">
          <div className="my__notice">
            <WhiteBoxMy>
              <MyTitle>
                <div className="icon-notice"><MdNotificationsNone/></div>
                <h2>알림</h2>
              </MyTitle>
              <ListBlock>
                <NoticeList notices={notices} onRemove={onRemove} type="my"/>
              </ListBlock>

            </WhiteBoxMy>
          </div>
          <div className="my__member">
            <WhiteBoxMy>
              <MyTitle>
                <h2>신선고 멤버</h2>
                <Spacer/>
                <MemberAddButton/>
              </MyTitle>
              <div className="member_profile">
                <Member members={members} type="my"/>
              </div>
            </WhiteBoxMy>
            {/*강퇴확인*/}
            <AskModal
              visible={open}
              onCancel={onCancel}
              onBan={onBan}
              type='ban'
            />
          </div>
        </div>
        {/*메뉴*/}
        <div className="my_menu">
          <div className="my_title">
            마이페이지
          </div>
          <div className="bar_title">
            공지사항
          </div>
          <div className="my_menu_bar">
            <MenuItemBlock>
              <Link to='/my'>공지사항</Link>
            </MenuItemBlock>
            <MenuItemBlock>
              <Link to='/my'>법적고지</Link>
            </MenuItemBlock>
            <MenuItemBlock>
              <Link to='/'>로그아웃</Link>
            </MenuItemBlock>
            <MenuItemBlock onClick={onCheck}>
              회원탈퇴
            </MenuItemBlock>

            {/*탈퇴확인*/}
            <AskModal
              visible={modal}
              onCancel={onCancel}
              onWithdrawal={onWithdrawal}
              type='leave'
            />
          </div>
          {/*공지사항 구현중*/}
          <div className="my_contents">
            <NoticeTable>
              <TableThead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </TableThead>
              <TableTbody>
                <tr>
                  <th>1</th>
                  <th>환영합니다</th>
                  <th>신선고마스터</th>
                  <th>작성일</th>
                </tr>
              </TableTbody>
            </NoticeTable>
          </div>

        </div>
      </div>
      <footer className="my_footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default My;