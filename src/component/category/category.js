import {RiArrowDropRightLine} from "react-icons/ri"
import {Link} from 'react-router-dom';
import {useSelector } from 'react-redux'
import {SelectProduct} from '../../features/productSlice'
import { Typography , Container} from "@material-ui/core";
import useStyles from './style';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 900 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 900, min: 600 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 600, min: 300 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 300, min: 0 },
    items: 1
  }
};

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
              <Carousel 
                 responsive={responsive}
                 autoPlay={false}
              >
              
                 {products
                    .filter((filter) => filter.category === cag)
                    .map((product)=>{
                      
                        return(
                           <div key={product.id} className={classes.product}>
                            <Link to={`/product/${product.id}`} key={product.id}>
                              <img src={product.image} className={classes.img}/>
                              <Typography variant='h6'className={classes.prodName}>{product.product}</Typography>
                              <Typography variant='body1'className={classes.price}>{product.price} DA</Typography>
                            </Link>
                           </div> 
                             )
                        })
                     }
               
              </Carousel>
             </Container>
            </div>
   )
    
}