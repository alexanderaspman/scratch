import React, { useState } from 'react';
import   hjalpenhemlos from "../img/hjalpenhemlos.png";
import   green from "../img/green.png";
import   shop from "../img/shop.png";
import   game from "../img/game-controller.svg";
import   app from "../img/app.svg";
import SkillzBackground from "./nextToLast";
import hero from "../img/hero.jpg";
import hero2 from "../img/gamemaker.jpg";
import hero3 from "../img/blapp.jpg";
import   vaska from '../img/vaska.png';
import   bjc1 from "../img/bjc4.png";
import   bjc2 from "../img/bjc2.png";
import   bjc3 from "../img/bjc3.png";
import  SlideShow  from "./slide";
import Footer from './Footer'

 const Top=()=>{
    
const [box,setBox] = useState(<>
 
<img className="hero1" src={hero}  />      

</>)
const info1=()=>{
    return(
        <div className="heroCard">
        <a href="https://cocky-johnson-891fb3.netlify.app/"><img classname="heroCard" src={vaska}/></a>
            </div>)
}
const info2=()=>{
    return( <>
 
        <img className="hero1" src={hero3}  />      
        
        </>)
}
const info3=()=>{
    return(
        <>
 <a href="https://cocky-johnson-891fb3.netlify.app/"> 
 <img className="hero1" src={hero2}  />      

 </a>
        
        </>)
}
const info4=()=>{
    return(
    <div>
        <div>
            <p>

            </p>
            <img />
        </div>
        <div>
            <p> info4</p>
        </div>
    </div>)
}

     return(
<div className="container">
    <div className="rowTop">
    <div className="header">
        <div classname="headerText">
        {/* <p className="headerCaption">Alexander Aspman</p><br/> */}
            <p className="headerCaption">Frontend developer            </p>
            </div>
            </div>
            <div className="col">
           <div className="row">
           <div className="card iconCard shop" onClick={info2}>
               <p>webshop</p>
                <img className="" onClick={()=>setBox(info1)} src={shop}/>
            </div>
            <div className="card iconCard hjalpEnHemlos" >
            <img className="shopCard" src={app} onClick={()=>setBox(info2)} />
                </div>
                </div>
                <div className="row">
                <div className="card iconCard green">
                <img className="greenCard" onClick={()=>setBox(info3)} src={game}/>
                </div>

                <div className="card iconCard app">
                    <div className="hjalpOverst">  
                <img className="shopCard1 hjalp" onClick={()=>setBox(info4)} src={hjalpenhemlos}/>
                </div>
                <div className="hjalpBotten"> </div>

                </div>
                </div>
                </div>
                </div>

                <div className="card portfolioContent">
                    {/* <div className="jag">
                Alexander Aspman
<br />
<p className="bjTitle">Black Jack Cash Back App</p>
<br/>
<p>
Soon available on the Play Store</p>                    </div>

                    <div className="infoBox blackJackCalculator">
                       
                        < img className="appCard" src={bjc2}/></div> */}
{box}
                </div>


<SkillzBackground/>
<Footer/>

    </div>
)


}   
export default Top