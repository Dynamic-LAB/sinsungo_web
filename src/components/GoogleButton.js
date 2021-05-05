import React,{useState} from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "717096392722-0ukrc6ofn0fuue61ol1ounln68ktvfc4.apps.googleusercontent.com";
function GoogleButton(props){
    let [isLogin,LoginChange]= useState("");

    const onSuccess = async(response) => {
    	//console.log("구글 로그인 정보",response);
        //const { googleId,tokenId, profileObj : { email, name } } = response; 
        //LoginChange([googleId,email,name]);
        window.sessionStorage.setItem('id',1 );
        props.GoMain(response,'google');
        }
    const onFailure = (error) => {
        console.log(error);
        window.sessionStorage.setItem('id',2 );
    }

    return(
        <div>
            {isLogin[1]}
            <GoogleLogin
                render={renderProps => (
                    <button onClick={renderProps.onClick}  style={{width:'240px',height:'40px',background:'white',border:'1px solid'}}>구글 로그인</button>
                )}
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}
export default GoogleButton