import {RiArrowDropRightLine} from "react-icons/ri"
import {Link} from 'react-router-dom';
import {useSelector } from 'react-redux'
import {SelectProduct} from '../../features/productSlice'
import { Typography , Container, Grid} from "@material-ui/core";
import useStyles from './style';

export default function Category({cag,more}) {
   const products = useSelector(SelectProduct);
   const classes = useStyles();
   return(
          <div className='category'>
              <Container>
              <div className={classes.headProd}>
                  <Typography variant='h6'>{cag}</Typography>
                  <Link to={more}>
                    <div className={classes.headProdRight}>
                     <Typography variant='button'>SEE MORE</Typography>
                     <Typography variant='h4'className={classes.icon}><RiArrowDropRightLine /></Typography>
                    </div>
                  </Link> 
              </div>
              <Grid container spacing={3}>
                 {products
                    .filter((filter) => filter.category === cag)
                    .slice(0, 4)
                    .map((product)=>{
                      
                        return(
                           <Grid item md={3} sm={4} xs={12} key={product.id} className={classes.product}>
                            <Link to={`/product/${product.id}`} key={product.id}>
                              <img src={product.image} className={classes.img}/>
                              <Typography variant='h5'className={classes.prodName}>{product.product}</Typography>
                              <Typography variant='body1'>{product.price} DA</Typography>
                            </Link>
                           </Grid> 
                             )
                        })
                     }
               </Grid>
             </Container>
            </div>
   )
    
}