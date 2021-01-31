
import idcard from "../img/id-card.svg";
import background from "../img/background.svg";
import  Skillz from './skillz'
import { useState } from "react";


const SkillzBackground =()=>{

    const [info, setInfo] = useState('Skillz')
    const [infoBox, setInfoBox] = useState("asdasdasda")

    function box(){
        setInfoBox(<Skillz/>);
        setInfo('Skillz')

    }
    function box2(){
        setInfoBox(<>
           <span>Background</span> <br/> <p className="skillzInfo">
            I have a thirst for coding which never will be filled, and I always like to learn the newest framework because I believe its healthy NOT to feel like your brilliant all the time.</p>
            </>);
                    setInfo('Background')

    }


    return(
<div className="nextToLastContainer">
    <div className="bottomRow">
        <div className="col">
            
            <div className="card card--pink" onClick={()=>box()}>
                <img className="id" src={idcard}/>          
            </div>

            <div  className="card card--blue" onClick={()=>box2()}>
                <img className="id" src={background}/>
            </div>
    
            <div  className="utfyllnad">
                <div className="infoBackgroundBox">        
                    {info}
                </div>
            </div>
        </div>
        <div className="col">
            <div className="skillzBakgrundInfoBox">
                {infoBox}
            </div>
        </div>
    </div>
</div>)
}
export default SkillzBackground