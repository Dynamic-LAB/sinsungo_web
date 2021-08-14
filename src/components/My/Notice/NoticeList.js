import React, { useEffect, useState } from "react";
import GetAlam from "../../ForServer/GetAlam";
import NoticeItem from "./NoticeItem";
import axios from 'axios';
import emptyImage from "../../../assets/img_notice_empty.png";
import styled from "styled-components";

const EmptyBlock = styled.div`
  
  text-align: center;
  //margin-left: 230px;
  width: 150px;
  display: block;
  margin: 0 auto;

  .empty_image {
    display: flex;
    text-align: center;
  }
  .img_search_empty_my {
    padding-top: 20px;
    width: 150px;
  }
  @media only screen and (max-width: 765px) {
    width: 120px;
    .img_search_empty_my {
      width: 120px;
    }
  }
`;
const RightBlock = styled.div`
  padding-top: 70px;
  text-align: center;
  //margin-left: 230px;
  width: 130px;
  display: block;
  margin: 0 auto;

  .empty_image {
    display: flex;
    text-align: center;
  }
  .img_search_empty_right {
    width: 130px;
  }
  @media only screen and (max-width: 765px) {
    width: 120px;
    .img_search_empty_right {
      width: 120px;
    }
  }
`;

const NoticeList = ({notices, type}) => {
  const onRemove=(id)=>{
    axios.delete('/notification/'+id).then((res)=>{
      GetAlam({id:JSON.parse(window.sessionStorage.getItem('User')).newRefId, SetAlam:SetAlam});
    })
  }
  const [Alam,SetAlam]=useState()
  useEffect(()=>{
    GetAlam({id:JSON.parse(window.sessionStorage.getItem('User')).newRefId, SetAlam:SetAlam});
  },[])
  return (
    <>
    
      {type === 'my' && (
        <>
          {(Alam&&Alam.length>0)?Alam.map(notice => (
              <NoticeItem notice={notice} onRemove={onRemove} type="my"/>
            )
          ):<EmptyBlock>
            <div className="empty_image">
              <img className="img_search_empty_my" src={emptyImage} alt="알림 텅 이미지"/>
            </div>
          </EmptyBlock>}
        </>
      )}
      {type === 'right' && (
        <>
          {(Alam&&Alam.length>0)?Alam.map(notice => (
              <NoticeItem notice={notice} onRemove={onRemove} type="right"/>
            )
          ):<RightBlock>
            <div className="empty_image">
              <img className="img_search_empty_right" src={emptyImage} alt="알림 텅 이미지"/>
            </div>
          </RightBlock>}
        </>
      )}

    </>
  );
}

export default NoticeList;