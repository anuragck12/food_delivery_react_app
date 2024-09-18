import {H_URL} from '../utils/constant';
import {useState} from 'react';

 const Header=()=>{
    const[signState,setsignState] = useState("Sign In");
    const signSet=()=>{
        if (signState==="Sign In"){
            setsignState("Sign Out");
        }
        else{
            setsignState("Sign In");
        }
    }
    return(
        <div className="header">
            <div className="logo">
                <img alt="logo" src={H_URL}/>
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
                <button className='sign' onClick={signSet}>{signState}</button>
            </div>
        </div>
    )
}
export default Header;