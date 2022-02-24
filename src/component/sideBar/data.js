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




export const Side= [
    {
        id:1,
        name:"Supermarket",
        icon:<FaAppleAlt />,
        path:'/Supermarket',
    },
    {
        id:2,
        name:"Fashion",
        icon:<GiHealthPotion />,
        path:'/Fashion',
    },
    {
        id:3,
        name:"Appliances",
        icon:<FaBaby />,
        path:'/appliance',
    },
    {
        id:4,
        name:"Computer science",
        icon:<HiOutlineDesktopComputer />,
        path:'/computing',
    },
    {
        id:5,
        name:"Sport stuff",
        icon:<GiMuscleUp />,
        path:'/Sports',
    },
    {
        id:6,
        name:"Telephony",
        icon:<BsPhone />,
    },
    
    {
        id:7,
        name:"Home & office",
        icon:<HiOutlineOfficeBuilding />,
        
    },
    {
        id:8,
        name:"Health beauty",
        icon:<GiHealthPotion />,
        
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
