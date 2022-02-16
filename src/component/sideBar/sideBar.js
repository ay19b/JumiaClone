import React from 'react';
import {Side} from "../data";
import useStyles from './style';
import {Typography} from '@material-ui/core'
import {Link} from 'react-router-dom';
import classNames from 'classnames';

function SideBar({ShowSidebar}) {
    const classes = useStyles();
    return(
      <div className={classes.sideBar}> 
          {Side.map((item)=>{
              const {id,name,icon,path}= item;
              return(   
                <Link to={path} key={id}>          
                   <div key={id} className={classes.sidebarItem}>
                     <Typography variant='h6'>{icon}</Typography>
                     <Typography variant='subtitle2' className={classes.name}>{name}</Typography>
                   </div>
                </Link>   
              )
          })}
      </div>
    )
}
export default SideBar;