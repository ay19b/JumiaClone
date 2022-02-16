import React from 'react';
import {FaAppleAlt} from "react-icons/fa";
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import {BsPhone} from "react-icons/bs";
import {GiHealthPotion} from "react-icons/gi";
import {GiMuscleUp} from "react-icons/gi";
import {FaBaby} from "react-icons/fa";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {GrGamepad} from "react-icons/gr";
import {BiGame} from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";
import {TiShoppingCart} from "react-icons/ti";
import {IoMdHelpCircleOutline} from "react-icons/io";
import {RiArrowDropDownLine} from 'react-icons/ri';
import {RiArrowDropUpLine} from 'react-icons/ri';


export const Head=[
    
    {
        id:1,
        name:"login",
        icon: <BsFillPersonFill />  ,
        dropDown:<RiArrowDropDownLine />,
        dropUp:<RiArrowDropUpLine />,
        down:{
            btn:'LOG IN',
            create:"create an account", 
            }
    },
    {
        id:2,
        name:"Help",
        icon: <IoMdHelpCircleOutline /> , 
        dropDown:<RiArrowDropDownLine />,
        dropUp:<RiArrowDropUpLine />,
    },
    {
        id:3,
        name:"Basket",
        icon: <TiShoppingCart /> , 
        path:"/basket",
        
    },
]

export const Side= [
    {
        id:1,
        name:"Supermarket",
        icon:<FaAppleAlt />,
        path:'/Supermarket',
    },
    {
        id:2,
        name:"Home & office",
        icon:<HiOutlineOfficeBuilding />,
        path:'/office',
    },
    {
        id:3,
        name:"Health beauty",
        icon:<GiHealthPotion />,
        path:'/beauty',
    },
    
    {
        id:4,
        name:"Fashion",
        icon:<FaAppleAlt />,
        path:'/Fashion',
    },
    {
        id:5,
        name:"Appliances",
        icon:<FaAppleAlt />,
        path:'/appliance',
    },
    {
        id:6,
        name:"Sport stuff",
        icon:<GiMuscleUp />,
        path:'/Sports',
    },
    {
        id:7,
        name:"Telephony",
        icon:<BsPhone />,
        path:'/telephone',
    },
    {
        id:8,
        name:"Computer science",
        icon:<HiOutlineDesktopComputer />,
        path:'/computer',
    },
    {
        id:9,
        name:"Baby & Childcare",
        icon:<FaBaby />,
    },
    
    {
        id:10,
        name:"Toys & Games",
        icon:<BiGame/>
    },
    {
        id:11,
        name:"Video Games ",
        icon:<GrGamepad />
    },
    
    {
        id:12,
        name:"Other categories",
        icon:<FaAppleAlt />
    },
];

