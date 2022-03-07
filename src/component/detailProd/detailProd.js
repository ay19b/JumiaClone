import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom';
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import {SelectProduct} from '../../features/productSlice'
import {add} from "../../features/productSlice"
import useStyles from './style';
import {Grid,Container,Typography,Button} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import {Link} from 'react-router-dom';
import Layout from '../Layout'

export default function DetailProd() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const prod = useSelector(SelectProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product =prod[id-1];
  
  
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);
  
    return (
        <Layout>
               <div className={classes.detail}> 
                 <Container>  
                 <div className={classes.linkPages}>
	                  
				            <Typography variant='body2' className={classes.link}>
                      <Link to="/">Home</Link>
                    </Typography> 			
			          	  
                    <Typography variant='body2'className={classes.link}>></Typography>
                    
				            <Typography variant='body2' className={classes.link}>
                      <Link to={`/${product.category}`}>{product.category}</Link>
                    </Typography> 			
			          	  
                    <Typography variant='body2'className={classes.link}>></Typography>
			              <Typography variant='body2'className={classes.link}>detailProd</Typography>
			          </div>   
                       <Grid container spacing={2} className={classes.detailCont}>
                         <Grid item xs={6}md={4} >
                           <img src={product.image} className={classes.img}/>
                         </Grid>
                         <Grid item xs={6} md={4} className={classes.infDtl} >
                               <Typography variant='h5'>{product.desc}</Typography>
                               <Typography variant='h6' className={classes.mark}>mark: <Typography variant='h6'>{product.product}</Typography></Typography>
                               <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                               
                               
                               <Typography variant='h5'>{product.price} DA</Typography>
                               <Button variant="contained" className={classes.btnAdd}onClick={() => dispatch(add(product))}>
                                 <Typography variant='subtitle1'><HiOutlineShoppingCart />I BUY</Typography>
                               </Button>
                               
                         </Grid>   
                            
                       </Grid>
                 </Container>      
               </div>
          </Layout>     
    )
}