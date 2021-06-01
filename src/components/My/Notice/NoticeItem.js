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
  
  align-items: center;
  .day_red {
    color: #FF6767;
  }

  .member_blue {
    color: #3C82D9;
  }
`;

const NoticeItem = ({notice, onRemove, type}) => {
    const {id, day, item, member, used, update, write} = notice;
    return (
        <>
            {type === 'right' && (
                <NoticeRightBlock>
                    { day && item ?
                        <ItemRightBlock>
                            <TextBlock>
                                유통기한이 &nbsp; <span className="day_red">{day}</span>일 남은 {item}가 있습니다!
                            </TextBlock>
                        </ItemRightBlock> : null}
                    {member && used === true ?
                        <ItemRightBlock>
                            <TextBlock>
                                <span className="member_blue">{member}</span>님이 냉장고의 재료를 사용하였습니다.
                            </TextBlock>
                        </ItemRightBlock> : null
                    }
                    {member && update === true ?
                        <ItemRightBlock>
                            <TextBlock>
                                <span className="member_blue">{member}</span>님이 식단을 업데이트 했습니다!
                            </TextBlock>
                        </ItemRightBlock> : null
                    }
                    {write === false ?
                        <ItemRightBlock>
                            <TextBlock>
                                식단을 작성해주세요!
                            </TextBlock>
                        </ItemRightBlock> : null
                    }
                </NoticeRightBlock>
            )}
            {type === 'my' && (
                <NoticeBlock>
                    { day && item ?
                        <ItemBlock>
                            <TextBlock>
                                <div className="icon_notice_red"/>
                                유통기한이 &nbsp; <span className="day_red">{day}</span>일 남은 {item}가 있습니다!
                            </TextBlock>
                            <Remove onClick={() => onRemove(id)}>
                                <MdDelete/>
                            </Remove>
                        </ItemBlock> : null}
                    {member && used === true ?
                        <ItemBlock>
                            <TextBlock>
                                <div className="icon_notice_fridge"/>
                                <span className="member_blue">{member}</span>님이 냉장고의 재료를 사용하였습니다.
                            </TextBlock>
                            <Remove onClick={() => onRemove(id)}>
                                <MdDelete/>
                            </Remove>
                        </ItemBlock> : null
                    }
                    {member && update === true ?
                        <ItemBlock>
                            <TextBlock>
                                <div className="icon_notice_diet_update"/>
                                <span className="member_blue">{member}</span>님이 식단을 업데이트 했습니다!
                            </TextBlock>
                            <Remove onClick={() => onRemove(id)}>
                                <MdDelete/>
                            </Remove>
                        </ItemBlock> : null
                    }
                    {write === false ?
                        <ItemBlock>
                            <TextBlock>
                                <div className="icon_notice_diet_write"/>
                                식단을 작성해주세요!
                            </TextBlock>
                            <Remove onClick={() => onRemove(id)}>
                                <MdDelete/>
                            </Remove>
                        </ItemBlock> : null
                    }
                </NoticeBlock>
            )}

        </>

    );
}

export default NoticeItem;