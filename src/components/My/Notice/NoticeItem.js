import React from "react";
import styled from 'styled-components';
import {MdDelete} from "react-icons/md";
import "../My.css";

const Remove = styled.div`
  display: flex;
  align-items: center; //세로중앙정렬
  justify-content: center;
  color: #dee2e6;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0;

  &:hover {
    color: #ff6b6b;
  }

  @media only screen and (min-width: 976px) and (max-width: 1500px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 630px) {
    font-size: 0.875rem;
  }
`;
const NoticeBlock = styled.div`
  display: block;
  margin: 5px 20px;
`;
const NoticeRightBlock = styled.div`
  display: block;
  padding: 5px;
`;
const ItemBlock = styled.div`
  display: flex;
  color: #393939;
  font-size: 12px;
  padding: 5px 0;
  align-items: center;
  justify-content: space-between;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;
const ItemRightBlock = styled.div`
  display: flex;
  color: #393939;
  font-size: 11px;
  padding: 5px 0;
  align-items: center;
  justify-content: space-between;
`;
const TextBlock = styled.div`
  display: flex;
  align-items: center;
  .day_red {
    color: #FF6767;
  }

  .member_blue {
    color: #3C82D9;
  }
`;
const TextRightBlock = styled.div`
  align-items: center;
  .day_red {
    color: #FF6767;
  }

  .member_blue {
    color: #3C82D9;
  }
`;

const NoticeItem = ({notice, onRemove, type}) => {
    return (
        <>
            {type === 'right' && (
                <NoticeRightBlock>
                        <ItemRightBlock>
                            <TextRightBlock>
                               {notice.content}
                            </TextRightBlock>
                        </ItemRightBlock>
                </NoticeRightBlock>
            )}
            
            {type === 'my' && (
                <NoticeBlock>
                         <ItemBlock>
                            <TextBlock>
                                <div className="icon_notice_red"/>
                                {notice.content}
                                </TextBlock>
                                <Remove onClick={() =>{ onRemove(notice.id)}}>
                                <MdDelete/>
                            </Remove>
                        </ItemBlock>
                </NoticeBlock>
            )}

        </>

    );
}

export default NoticeItem;