import React, {useContext, useEffect, useState} from "react";
import {BsPeopleCircle} from "react-icons/bs";
import styled from "styled-components";
import "./Member.css";
import {Context} from "../../../../MemberList"
import GetMemberByRefrigratorId from "../../../ForServer/GetMemberByRefrigratorId";
import axios from "../../../../../node_modules/axios/index";
import AskModal from "../../../My/AskModal";
//right-bar 사용
const MemberBlock = styled.div`
  margin: 10px;
  text-align: center;

  .member_name {
    display: flex;
    justify-content: center;
    width: auto;
    padding: 5px;
    font-size: 0.75rem;
  }
`;
const MemberState = styled.div`
  display: inline-block;
  height: 0;
`;

const Circle = styled.div`
  display: flex;
  padding: 0 5px 0 5px;
  font-size: 2.5rem;
`;
//my-page 사용
const MyMemberBlock = styled.div`
  padding: 50px 0;
  margin: 0 25px;
  text-align: center;

  .member_name {
    display: flex;
    justify-content: center;
    width: auto;
    margin: 5px;
    font-size: 0.75rem;
  }
`;
const MyProfileBlock = styled.div`
  display: flex;
  padding: 0 5px 0 5px;
  font-size: 3rem;
`;

const Member = ({type}) => {
  const [ask,SetAsk]=useState(false);
  const {state,dispatch}=useContext(Context);
  const [selectMember,SetSelectMember]=useState();
  const UserDelete=(item)=>{
    //삭제하시겠습니까 실행
    SetAsk(true);
    SetSelectMember(item);
  }
  const onBan=(item)=>{
    SetAsk(false)
    SetSelectMember(null);
    axios.put("user/",
    {
      id: item.id,
      login_type: item.login_type,
      name: item.name,
      push_token: item.push_token,
      push_setting: item.push_setting,
      refrigerator_id:0
    }
    ).then((res)=>{
      if(JSON.parse(window.sessionStorage.getItem('User'))&& JSON.parse(window.sessionStorage.getItem('User')).newRefId!=null){
        GetMemberByRefrigratorId({refId:JSON.parse(window.sessionStorage.getItem('User')).newRefId,dispatch:dispatch})
        }
      }
    ).then((res) => {
      if (JSON.parse(window.sessionStorage.getItem('User')) && JSON.parse(window.sessionStorage.getItem('User')).newRefId != null) {
        GetMemberByRefrigratorId({
          refId: JSON.parse(window.sessionStorage.getItem('User')).newRefId,
          dispatch: dispatch
        })
      }
    })
  }
  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem('User')) && JSON.parse(window.sessionStorage.getItem('User')).newRefId != null) {
      GetMemberByRefrigratorId({refId: JSON.parse(window.sessionStorage.getItem('User')).newRefId, dispatch: dispatch})
    }
  }, [])
  return (
    <>
       <AskModal visible={ask} type="ban" onCancel={()=>{SetAsk(false)}} onBan={()=>{onBan(selectMember)}} ></AskModal>
      {type === 'right' && (
        <>
          {
            state.MemberList && state.MemberList.master !== "NoData" ?
              state.MemberList.members.map((item, _i) => {
                if(item.id==state.MemberList.master)
                return (
                  <MemberBlock>
                    <MemberState>
                      <Circle><BsPeopleCircle/></Circle>
                      {
                      (state.MemberList.master === JSON.parse(sessionStorage.getItem('User')).newId) ?
                      (item.id!=JSON.parse(sessionStorage.getItem('User')).newId?<div onClick={() => {UserDelete(item)}} className="icon_remove"/>:
                      <div className="icon_master"/>) : null
                      }
                    </MemberState>
                    <div className="member_name">{item.name}</div>
                  </MemberBlock>
                );
              })
              : null
          }
          {
            state.MemberList && state.MemberList.master !== "NoData" ?
              state.MemberList.members.map((item, _i) => {
                if(item.id!=state.MemberList.master)
                return (
                  <MemberBlock>
                    <MemberState>
                      <Circle><BsPeopleCircle/></Circle>
                      {
                      (state.MemberList.master === JSON.parse(sessionStorage.getItem('User')).newId) ?
                      (item.id!=JSON.parse(sessionStorage.getItem('User')).newId?<div onClick={() => {UserDelete(item)}} className="icon_remove"/>:
                      <div className="icon_master"/>) : null
                      }
                    </MemberState>
                    <div className="member_name">{item.name}</div>
                  </MemberBlock>
                );
              })
              : null
          }
        </>
      )}
     {false&&<div onClick={()=>{console.log(state.MemberList.master,JSON.parse(sessionStorage.getItem('User')).newId)}}>hh</div>}
      {type === 'my' && (
        <>
        {
            state.MemberList && state.MemberList.master !== "NoData" ?
              state.MemberList.members.map((item, _i) => {
                if(item.id==state.MemberList.master)
                return (
                  <MyMemberBlock>
                    <MemberState>
                      <MyProfileBlock><BsPeopleCircle/></MyProfileBlock>
                      {
                       (state.MemberList.master === JSON.parse(sessionStorage.getItem('User')).newId) ?
                          (item.id!=JSON.parse(sessionStorage.getItem('User')).newId?<div onClick={() => {UserDelete(item)}} className="icon_my_remove"/>:
                          <div className="icon_my_master"/>) : null
                      }
                    </MemberState>
                    <div className="member_name">{item.name}</div>
                  </MyMemberBlock>
                );
              })
              : null
          }
         {
            state.MemberList && state.MemberList.master !== "NoData" ?
              state.MemberList.members.map((item, _i) => {
                if(item.id!=state.MemberList.master)
                return (
                  <MyMemberBlock>
                    <MemberState>
                      <MyProfileBlock><BsPeopleCircle/></MyProfileBlock>
                      {
                       (state.MemberList.master === JSON.parse(sessionStorage.getItem('User')).newId) ?
                          (item.id!=JSON.parse(sessionStorage.getItem('User')).newId?<div onClick={() => {UserDelete(item)}} className="icon_my_remove"/>:
                          <div className="icon_my_master"/>) : null
                      }
                    </MemberState>
                    <div className="member_name">{item.name}</div>
                  </MyMemberBlock>
                );
              })
              : null
          }
        </>
      )}
    </>
  );
}

export default Member;