import React, { useEffect, useState } from "react";
import GetAlam from "../../ForServer/GetAlam";
import NoticeItem from "./NoticeItem";
import axios from 'axios';

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
          ):<div>Empty</div>}
        </>
      )}
      {type === 'right' && (
        <>
          {(Alam&&Alam.length>0)?Alam.map(notice => (
              <NoticeItem notice={notice} onRemove={onRemove} type="right"/>
            )
          ):<div>Empty</div>}
        </>
      )}

    </>
  );
}

export default NoticeList;