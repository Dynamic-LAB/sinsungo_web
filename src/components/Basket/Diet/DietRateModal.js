import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import {MdStar, MdStarBorder, MdStarHalf} from "react-icons/md";
import Rating from "react-rating";

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
  height: auto;
  width: 300px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  h2 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 3rem;
  }

  .rating {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    color: #FFC300;
  }
  
  .modal_buttons {
    display: flex;
    justify-content: flex-end;
  }
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

const DietRateModal = ({ visible, onCancel, onConfirm }) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <ModalBlock>
        <h3>별점</h3>
        <div className="rating">
          <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            fractions={2}
            onChange={(rate) => alert(rate)}
          />
        </div>
        <div className="modal_buttons">
          <StyledButton inverted={true} onClick={onCancel}>취소</StyledButton>
          <StyledButton blueBtn onClick={onConfirm}>확인</StyledButton>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
};

export default DietRateModal;