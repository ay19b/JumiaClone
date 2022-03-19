import React,{useState,useEffect} from 'react';
import {Typography, Container,Grid,Badge,Button,InputAdornment,TextField} from '@material-ui/core'
import {SelectProduct} from '../../features/productSlice';
import {useSelector} from "react-redux";
import Banner from "../../images/Banner.jpg";
import flag from "../../images/flag.png";
import france from "../../images/france.png";
import logo from "../../images/logo.png";
import Avatar from 'react-avatar';
import {GiAlliedStar} from "react-icons/gi";
import {HiSearch,HiMenu} from "react-icons/hi";
import {BsFillPersonFill} from "react-icons/bs";
import {TiShoppingCart} from "react-icons/ti";
import {RiArrowDropDownLine} from 'react-icons/ri';
import {IoMdHelpCircleOutline} from "react-icons/io";
import {Link} from 'react-router-dom';
import {Side} from "./data";
import useStyles from './style';
import classNames from 'classnames';


const Nav=({show})=> {
    const classes = useStyles();
    const [navbar, setNavbar] = useState(false);
    const product = useSelector(SelectProduct)
    const cartProducts = product.filter((product) => product.added);
    const [ShowSidebar, setShowSidebar] = useState(false);
    const fixedNav=()=>{
      if(window.scrollY>=100){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
  
  useEffect(() => {
    fixedNav()
    window.addEventListener('scroll',fixedNav)  
  })
   

  return (
    <section className={classes.header}>
       
        <div className={classes.headerFirst}>
            <img src={Banner} className={classes.img}/>
        </div>
        <div className={classes.headerSecond}>
          <Container>
            <Grid container spacing={1}>
              <Grid item md={6} xs={6} className={classes.headerLeft}>
                   <Typography variant='subtitle2'><GiAlliedStar /></Typography>
                   <Typography variant='subtitle2'>Sell ​​on Jumia</Typography>
              </Grid>
              <Grid item md={6} xs={6} className={classes.headerRight}>
                    <div className={classes.lang}>
                        <Avatar src={france} size="20" round="20px" />
                        <Typography variant='subtitle2'>francais</Typography>
                     </div>
                     <div className={classes.lang}>
                        <Avatar src={flag} size="20" round="20px" /> 
                        <Typography variant='subtitle2'>العربية</Typography>
                     </div>
              </Grid>
            </Grid>
          </Container>    
        </div>
        <div className={!navbar?classes.headerLast:classes.navActive} >
          <Container>
              <Grid container spacing={2}>
                <Grid item md={2} sm={5} xs={5} className={classes.logoPart}>
                  <Typography variant='h4'>
                    <HiMenu className={!show?classes.menu:classes.menuDis} onClick={()=>setShowSidebar(!ShowSidebar)}/>
                  </Typography>
                  <Link to="/"><img src={logo} className={classes.imgLogo}/></Link>
                </Grid>
                <Grid item md={6} sm={4} xs={5} className={classes.searchPart}>
                  <TextField
                   id="outlined-hidden-label-small"
                   size="small"
                   variant="outlined"
                   placeholder="Search for a product, brand or category"
                   InputProps={{
                   startAdornment: <InputAdornment position="start">
                                      <HiSearch className={classes.searchIcon}/>
                                   </InputAdornment> 
                   }} 

                  />
                  <Button variant="contained" className={classes.btnSearch}>SEARCH</Button>
                </Grid>
                <Grid item md={4} sm={3} xs={2} className={classes.info}>
                  <Typography variant='h6' className={classes.infoItem}>
                    <BsFillPersonFill className={classes.iconNav}/>
                    Login
                    <RiArrowDropDownLine className={classes.iconNav}/>
                  </Typography>
                  <Typography variant='h6' className={classes.infoItem}>
                    <IoMdHelpCircleOutline className={classes.iconNav}/>Help<RiArrowDropDownLine className={classes.iconNav}/>
                  </Typography>
                  <Typography variant='h6' className={classes.infoItem}>
                    <Link to="/basket" className={classes.link}> 
                     <Badge badgeContent={cartProducts.length} color="primary" className={classes.iconNav}>
                       <TiShoppingCart />
                     </Badge>
                     
                     <Typography variant='h6'className={classes.basketItem}>Basket</Typography>
                     </Link>
                   </Typography>
                </Grid>
              </Grid> 
              <div className={ShowSidebar?classNames(classes.sideBar, classes.active):classes.sideBar}onMouseLeave={()=>setShowSidebar(!ShowSidebar)} > 
                   {Side.map((item)=>{
                     const {id,name,icon,path}= item;
                     return(

                        <Link to={path} key={id} onClick={()=>setShowSidebar(!ShowSidebar)}>
                         <div key={id} className={classes.sidebarItem}>
                          <Typography variant='h6'>{icon}</Typography>
                          <Typography variant='subtitle1' className={classes.name}>{name}</Typography>
                         </div>
                        </Link>

                          )
                    })}
              </div>    
          </Container> 
        </div>
        
    </section>
  )
}

export default Nav