import React, {useState} from 'react';
import styled from "styled-components";
import Button from "../../common/Button";
import WhiteBox from "../../common/WhiteBox";
import RecipeDietAddModal from "./RecipeDietAddModal";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  background: #F6F6F6;
  height: 480px;
  width: 750px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);

  h2 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .modal_buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledWhiteBox = styled(WhiteBox)`
  height: 380px;
  width: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 15px;
`;

const StyledButton = styled(Button)`
  height: 2rem;
  border-radius: 20px;
  font-size: 0.75rem;
  padding: 0.25rem 1.25rem;

  & + & {
    margin-left: 0.5rem;
  }
`;


const RecipeModal = ({
                       name,
                       visible,
                       cancelText = '닫기',
                       confirmText = '식단추가',
                       moveText = '우리의식탁으로 이동',
                       onConfirm,
                       onCancel
                     }) => {
  //레시피에서 식단추가를 위한 팝업창 상태변화
  const [open, setOpen] = useState(false);
  //식단추가 액션
  const onAddClick = () => {
    setOpen(true);
  };
  const onCloseClick = () => {
    setOpen(false);
  }

  if (!visible) return null;
  return (
    <>
      <Fullscreen>
      <ModalBlock>
        <h2>레시피 상세보기</h2>
        <StyledWhiteBox>
          <div
            style={{
              'textAlign': 'center',
              'marginTop': '20px',
            }}
          ><img src={process.env.PUBLIC_URL + '/img.jpg'} alt="오류" style={{'borderRadius': '10px', 'width': '200px'}}/>
            <div>요리명</div>
            <div style={{
              'borderRadius': '10px',
              'height': '70%',
              'marginTop': '5px',
              'border': '1px dashed #bbb',
              'marginBottom': '10px',
              'padding': '10px'
            }}>
              <div>설명</div>
            </div>
          </div>
        </StyledWhiteBox>
        <div className="modal_buttons">
          <StyledButton inverted={true} onClick={onCancel}>{moveText}</StyledButton>
          <StyledButton inverted={true} onClick={onAddClick}>{confirmText}</StyledButton>
          <StyledButton blueBtn onClick={onCancel}>{cancelText}</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
      {/*식단추가 누르면 나오는 팝업*/}
      <RecipeDietAddModal
        visible={open}
        onCloseClick={onCloseClick}
      />
    </>


  );
};

export default RecipeModal;