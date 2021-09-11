import React from 'react';
import {Side} from "../data";
import './sideBar.css';
import {Link} from 'react-router-dom';

function SideBar() {
  
    return(
      <div className="sidebar"> 
          {Side.map((item)=>{
              const {id,name,icon,path}= item;
              return(
                
                 <Link to={path} key={id}>
                   <div key={id} className="sidebar-item">
                   <span>{icon}</span>
                  <h3>{name}</h3>
                  </div>
                    </Link>
                 
              )
          })}
      </div>
    )
}
export default SideBar;