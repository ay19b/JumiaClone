import React from 'react'
import {useSelector } from 'react-redux'
import {SelectProduct} from '../../features/productSlice'
import {Link} from 'react-router-dom'
import Layout from '../Layout'
import useStyles from './style';
import { Typography , Container, Grid} from "@material-ui/core";


const PageCategory=({catg})=> {
    const classes = useStyles();
   const products = useSelector(SelectProduct);
    return (
      <Layout>
        <div className='category'>
        <Container>
            <div className={classes.linkPages}>
				      <Typography variant='body2' className={classes.link}>
                  <Link to="/">Home</Link>
              </Typography> 			
              <Typography variant='body2'className={classes.link}>></Typography>
			        <Typography variant='body2'className={classes.link}>{catg}</Typography>
			      </div> 
        <Grid container spacing={3}>
         
           {products
              .filter((filterData) => filterData.category === catg)
              .slice(0, 10)
              .map((product)=>{
                
                  return(
                    
                  <Grid item md={3} sm={5} xs={12} className={classes.product} key={product.id}>
                    <Link to={`/product/${product.id}`} key={product.id}>
                       <img src={product.image} className={classes.img}/>
                       <h2>{product.product}</h2>
                       <span>{product.price} DA</span>
                    </Link>
                  </Grid>
                     
                     
                  )
              })
          }
         </Grid>
        </Container>
      </div>
   </Layout>           
            
    )
}
export default PageCategory