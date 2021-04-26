import "./Recipe.css";
import Whitebox from "../common/WhiteBox"
import styled from 'styled-components';
import TagBox from './TagBox';
import { MdSearch} from 'react-icons/md';
import RecipeModal from "./recipPopUp/RecipeModal"
import React, {useState, useCallback} from 'react';
// import ice from "../../assets/ice.svg";
const Box2=styled.div`
margin:10px;
height:100%;
width:100%;
display: flex;
flex-direction: column;
`;
const Box3=styled(Whitebox)`
padding:10px;
margin-top:px;
height:20px;
width:96%;
border-radius: 4px;
box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.08);
font-weight:700;
color: #393939;
font-size: 16px;
`;

const Box4=styled.div`
padding:10px;
margin-top:1px;
height:60px;
width:96%;
flex: 1;

font-weight: 500;
color: #000000;
font-size: 13px;
@media only screen and (max-width: 978px) {
  font-size: 15px;
}
`;

const HasItem=styled.span`
color: #3c82d9;
`;
const NoneItem=styled.span`
color: #D93C3C;
`;

const OriImg=styled.img`
width:160px; 
border-radius: 10px;
`;


const RecipeCard = (props) => {
    const [modal, setModal] = useState(false);
    const onAddClick = () =>{
        setModal(true);
    };
    const onCancel = () => {
        setModal(false);
    };
    const onConfirm = () => {
        setModal(false);
        // onAdd();
    }
    const popUp=()=>{
        onAddClick();
    }
        return(
            <>
           <div onClick={popUp} className="card">
            <div className="card_inner">
                <OriImg src={process.env.PUBLIC_URL + '/img.jpg'} alt="오류"/>
                <Box2>
                    <div style={{
                        'marginLeft':'5px'

                    }}>{props.name}</div>
                    <hr style={{
                             'marginTop':'5px',
                             'borderTop': '1px dashed #bbb',
                             'borderBottom': '1px dashed #fff'

                        }}/>
                    <Box4>
                        <HasItem>냉장고 속 재료 │</HasItem> {props.hasList.map((n,_i)=>{return n+(_i<props.hasList.length-1?',':'')})}
                        <br></br>
                        <NoneItem>없는 재료 │</NoneItem> {props.noneList.map((n,_i)=>{return n+(_i<props.noneList.length-1?',':'')})}
                    </Box4>
                </Box2>
            </div>
        </div>
        <RecipeModal
                name={props.name}
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>
        );
        
      };

export default RecipeCard;