import React from "react";
import NoticeItem from "./NoticeItem";


const NoticeList = ({notices, onRemove, type}) => {
    return(
        <>
            {notices.map(notice => (
                    <NoticeItem  notice={notice} onRemove={onRemove}/>
                )
            )}
        </>
    );
}

export default NoticeList;