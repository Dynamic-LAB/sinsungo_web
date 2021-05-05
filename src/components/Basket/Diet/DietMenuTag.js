import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { MdCancel } from "react-icons/md";

const TagBlock = styled.div`
  width: auto;
  padding-top: 10px;
`;

const TagInput = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  
  li {
    display: flex;
    align-items: center;
    background: #9B8C81;
    border-radius: 20px;
    color: #010101;
    font-weight: 300;
    font-size: 13px;
    list-style: none;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px 10px;
    button {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      padding-left: 10px;
    }
  }
  .input-tag__tags__input {
    background: none;
    flex-grow: 1;
    padding: 5px;
  }
`;

const TagInputEnter = styled.input`
  border: none;
  background: none;
  outline: none;
  width: 100px;
  font-size: 13px;
`;

const DietMenuTag = () => {
  let tagInput = useRef();
  const [tags, setTags] = useState([]);
  //삭제 버튼 구현
  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i,1);
    setTags(newTags);
  };
  // enter 키 누르면 입력
  const inputKeyDown = (e) => {
    const val = e.target.value;
    if(e.key === 'Enter' && val) {
      if(tags.find(tag => tag.toLowerCase() === val.toLowerCase())){
        return;
      }
      setTags([...tags, val]);
      tagInput.value = null;
    }
  };

  return(
    <TagBlock>
      <TagInput>
        {tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => removeTag()}>
              <MdCancel/>
            </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <TagInputEnter
            type="text"
            onKeyDown={inputKeyDown}
            placeholder="# 메뉴이름"
            ref={c => {tagInput = c;}}/>
        </li>
      </TagInput>
    </TagBlock>
  );
};

export default DietMenuTag;