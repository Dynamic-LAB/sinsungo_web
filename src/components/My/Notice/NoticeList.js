import React from "react";
import NoticeItem from "./NoticeItem";


const NoticeList = ({notices, onRemove, type}) => {
    return(
        <>{type === 'my' && (
          <>
              {notices.map(notice => (
                  <NoticeItem  notice={notice} onRemove={onRemove} type="my"/>
                )
              )}
          </>
        )}

        </>
    );
}

export default NoticeList;