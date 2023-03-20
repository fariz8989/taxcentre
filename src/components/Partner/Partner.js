import React from "react";
export default function Partner(){
    return(<>
    <div className="partner-container">
        <h1 className="partner-title">Our Partner & Client</h1>
        <div className="partner-inner-container">
        <div className="partner-wrapper">
            <img loading="lazy"alt="DJP" src={require('../../assets/DJP.png')}/>
            <img loading="lazy"alt="PWC" src={require('../../assets/PWC.png')}/>
            <img loading="lazy"alt="EY" src={require('../../assets/EY.png')}/>
   

        </div>    <div className="partner-wrapper">
           
            <img loading="lazy"alt="UNSW" src={require('../../assets/UNSW.png')}/>
            <img loading="lazy"alt="" src={require('../../assets/melbourne.png')}/>
            <img loading="lazy"alt="AFD" src={require('../../assets/AFD.png')}/>

        </div>
        </div>
    </div>
    </>)
}