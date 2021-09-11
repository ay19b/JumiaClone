import React from 'react';
import {footerSide} from "../data";
import "./pillars.css"

const Pillars = () => {
    return (
        <div className="pillars">
            {footerSide.map((item)=>{
                const {id,name,img} =item;
                return(
                    <div key={id} className="pill-item" >
                            <img src={img} />
                       <h3>{name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Pillars;