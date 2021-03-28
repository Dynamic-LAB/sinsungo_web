import "./Recipe.css";
import Whitebox from "../common/WhiteBox"
import styled from 'styled-components';
// import ice from "../../assets/ice.svg";

const Fridge = () => {
    const Box1=styled(Whitebox)`
    height:300px
    `;
    const Box2=styled.div`
    margin:10px;
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
    `;
    const Box3=styled(Whitebox)`
    padding:10px;
    margin-top:0px;
    height:20px;
    width:96%;
    `;
    const Box4=styled(Whitebox)`
    padding:10px;
    margin:1px;
    height:60px;
    width:96%;
    overflow:hidden;
    `;
    const TagBox=styled(Whitebox)`
    display:inline-block;
    margin-right:15px;
    text-align:center;
    background:white;
    height:45%;
    overflow:hidden;
    box-shadow: 0px 3px 6px rgba(10, 125, 0, 0.9);
    `;
    const Imgbox=styled.div`
     background:#ffffff;
    `;

    const OriImg=styled.img`
    width:190px; 

    border-radius: 10px;
    `;

    const CardSample = () => {
        const names = ['백숙', '치킨', '통닭', '바베큐','1','2','3','2','3','2','3','2','3'];
        const hasList = ['닭', '치즈', '양파'];
        const noneList = ['물', '얼음'];
        const nameList = names.map((name,index) => 
            <div className="card" key={index}>
            <div className="card_inner">
                <OriImg src={process.env.PUBLIC_URL + '/img.jpg'} alt="오류"/>
                <Box2>
                    <Box3>{name}</Box3>
                    <Box4>냉장고속 재료:{hasList.map((n,_i)=>{return n+(_i<hasList.length-1?',':'')})}
                        <br></br>
                        없는 재료:{noneList.map((n,_i)=>{return n+(_i<noneList.length-1?',':'')})}
                    </Box4>
                </Box2>
            </div>
        </div>);
        
        return (nameList);
        
      };
        return(
        <main>
            <div className="fridge__container">
            <div className="card">
                        <div className="card_inner">
                            <input className="input_css" />검색어를 입력해주세요.
                        </div>
                        <hr></hr>
                        <div className="card_inner">
                            <TagBox>한식</TagBox>
                            <TagBox>양식</TagBox>
                            <TagBox>재료있는 레시피</TagBox>
                            
                        </div>
                    </div>
                <br></br>
                
                <div className="fridge__cards">
               <CardSample/>
                </div>
 
            </div>
        </main>
    );
}

export default Fridge;