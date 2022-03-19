import React, {useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import {selectTotalAmount} from "../../features/variableSlice"
import {incrementProduct,decrementProduct} from "../../features/productSlice"
import {setTotalAmount} from "../../features/variableSlice"
import {SelectProduct} from '../../features/productSlice'
import {TiShoppingCart} from "react-icons/ti";
import {FaTrash} from "react-icons/fa";
import useStyles from './style';
import Nav from '../navbar/nav';
import Footer from '../footer/footer';
import AlertDialog from './dialoge'
import {Typography,Container,Button,Grid,Divider} from '@material-ui/core'




export default function Basket() {
  const classes = useStyles();
  const location = useLocation();
  let totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();
  const product = useSelector(SelectProduct);
  const cartProducts = product.filter((product) => product.added);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let sum = cartProducts
  .map((product) => {
    let price = product.price;
    let quantity = product.quantity;
    let total = price * quantity;
    return total;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  useEffect(() => {
     dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

  if(cartProducts.length==0){
    return(
     <div className={classes.PgEmpty}> 
      <Nav />
      <Container>
      <div className={classes.emptyBasket}>
        <Typography variant='h1' ><TiShoppingCart className={classes.iconEmpty}/></Typography>
        <Typography variant='h5' gutterBottom>Your basket is empty !</Typography>
        <Typography variant='h6' gutterBottom>Browse our categories and discover our best offers! </Typography>
        <Link to="/"><Button color='primary' variant="contained" style={{color:'white'}}>START YOUR SHOPPING</Button></Link>
      </div>
      </Container>
      <Footer />
      
     </div> 
    )
  }
    return(
      <> 
      <Nav />
      <Container>
      
       <section className={classes.basket}>
         <Grid container spacing={2} justifyContent="space-around">
           <Grid item md={8}  className={classes.listBasket}>
             <Typography variant='h5'>Shopping cart ({cartProducts.length} item) </Typography>
             <Divider className={classes.divider}/>
             <Grid container item  direction="column">      
        {cartProducts
            .map((prod)=>{
              
            return(
             <div key={prod.id} className={prod.id}>
              <Grid container  className={classes.prod}spacing={2}>
                <Grid item direction="column" justifyContent="space-between" md={2} sm={2} className={classes.item} >
                  <img src={prod.image}  alt={prod.product} className={classes.img}/>
                </Grid>
                <Grid item direction="column"alignItems="flex-start"  md={7} sm={7}  className={classes.item}>
                  <Typography variant='h6' >{prod.product}</Typography>
                  <Typography variant='subtitle1' style={{color:'#4d4d4d'}}>Seller:  Jumia</Typography>
                  <Typography>Eligible for free delivery (only in the Wilaya of Algiers.) </Typography>
                </Grid>
                <Grid item direction="column" alignItems="flex-end" justifyContent="space-between" md={3} sm={3}  className={classes.item}>
                  <Typography variant='h6'>DA{prod.price}</Typography>
                
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="space-between"alignItems="center" spacing={3}>
              <Grid item md={4}>
              <Link to={`/${prod.id}`} key={prod.id}>
                <Button variant="text" color='primary' startIcon={<FaTrash/>} onClick={handleClickOpen}>
                  Delete
                </Button>
              </Link>
              <AlertDialog  open={open} handleClose={handleClose} />
              </Grid>  
              <Grid item md={4} className={classes.gridQnt}>
                <div className={classes.quantity}>
                <Button color='primary' disabled={prod.quantity==0} onClick={() => dispatch(decrementProduct(prod))} variant="contained">-</Button>
                  <Typography className={classes.itemQuant}>{prod.quantity}</Typography>
                  <Button color='primary' disabled={prod.quantity==10} onClick={() => dispatch(incrementProduct(prod))} variant="contained">+</Button>
                </div>
              </Grid> 
            </Grid>
            <Divider className={classes.divider}/>
          </div>
          ) 
         })
        }
       </Grid>
           </Grid>
           <Grid item md={3} className={classes.listSummery}>
             
             <Typography variant='h5'>Basket Summary</Typography>
             <Divider className={classes.divider}/>
             <Typography variant='subtitle1'className={classes.subtotal}>Total items ({cartProducts.length}) <Typography>DA{totalAmount}</Typography></Typography>
             <Divider className={classes.divider}/>
             <Typography variant="subtitle1" className={classes.subtotal}>Subtotal: <Typography>DA{totalAmount}</Typography> </Typography>
             <Typography variant="body2"className={classes.subtotal}>Delivery costs not included at this stage (non-refundable in case of return)</Typography>
             <Divider />
             <Typography variant="body2"className={classes.subtotal}>501 DA are missing to take advantage of free delivery </Typography>
             <Divider />
             <Button color='primary'variant="contained"className={classes.btn}>order DA{totalAmount}</Button>
             <Divider />
             
           </Grid>
         </Grid>
       </section> 
      </Container>
      <Footer />
     </> 
    )      
}