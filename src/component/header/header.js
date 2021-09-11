import React,{useState,useRef,useEffect} from 'react';
import "./header.css";
import {DataHead} from "../data";
import Banner from "../../images/Banner.jpg";
import {GiAlliedStar} from "react-icons/gi";
import flag from "../../images/flag.png";
import france from "../../images/france.png";
import logo from "../../images/logo.png";
import {HiSearch} from "react-icons/hi";
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';
import {SelectProduct} from '../../features/productSlice';
import {useSelector} from "react-redux";
import {Side} from "../data";
import './header.css';


function Header(){
    const [clicked,setClicked]=useState(false);
    const product = useSelector(SelectProduct)
    const cartProducts = product.filter((product) => product.added);
    const linksRef = useRef(null);
    const side= useRef(null);
    const [ShowSidebar, setShowSidebar] = useState(false);

const Sidebar=()=>{
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


useEffect(()=>{
    if(cartProducts.length==0){
        linksRef.current.style.display="none";
     }else{
        linksRef.current.style.display="block";
     }
})


    return(
        <div className="header">
            
            <div className="header-first">
                <img src={Banner} />
            </div>
            <div className="header-second">
                <div className="header-left">
                   <div className="head-icon">
                      <GiAlliedStar />
                   </div>
                   <h2>Sell ​​on Jumia</h2>
                </div>
                
                 <div className="header-right">
                     <div className="lang">
                        <Avatar src={france} size="20" round="20px" />
                        <span>francais</span>
                     </div>
                     <div className="lang">
                        <Avatar src={flag} size="20" round="20px" />   
                        <span>العربية</span>
                     </div>
                 </div>  
                
            </div>
            <div className="header-last">
                <div className="container">

                <i className="menu fas fa-bars" onClick={()=>setShowSidebar(!ShowSidebar)} ></i>
                 
                

               <div className="logo">
                <Link to="/">
                   <img src={logo}/>
                </Link>
                </div>

               <div className="search-inf">
                    <span><HiSearch /></span>
                    <input  placeholder="search" />
                    <button>SEARCH</button>
               </div>

               <div className="info">
               {DataHead.map((item)=>{
                      const {id,name,icon,path,dropDown}=item;

                
                      return(
                              <Link to={path} className="inf-item" key={id} onClick={() => setClicked(!clicked)}> 
                                <span>{icon}
                                   <div ref={linksRef} className="nmb-cart">{cartProducts.length}</div>
                                </span>
                               
                                <h3>{name}</h3>
                              
                              <span>
                                <span>{dropDown}</span> 
                               
                               </span>
                               </Link>
                       )
                   })
                 }
                 
               </div>
    
              </div>
            </div>
            <div className={ShowSidebar?"sideBar active":"sideBar"}onMouseLeave={()=>setShowSidebar(!ShowSidebar)} > 
                   {Side.map((item)=>{
                 const {id,name,icon,path}= item;
                 return(

                    <Link to={path} key={id} onClick={()=>setShowSidebar(!ShowSidebar)}>
                       <div key={id} className="sideBar-item">
                       <span>{icon}</span>
                       <h3>{name}</h3>
                      </div>
                    </Link>

                  )
               })}
               </div>
         </div>
    )
}
export default Header;