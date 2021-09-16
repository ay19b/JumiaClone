import React from 'react'
import {useSelector } from 'react-redux'
import {SelectProduct} from '../../features/productSlice'
import {Link} from 'react-router-dom'

const Computer=()=> {
   const products = useSelector(SelectProduct);
    return (
                 
        <div className='category'>
        
        <div className="products">
         
           {products
              .filter((filterData) => filterData.category === "computing")
              .slice(0, 10)
              .map((product)=>{
                
                  return(
                    
                     <div className="product" key={product.id}>
                     <Link to={`/product/${product.id}`} key={product.id}>
                     <img src={product.image} />
                     <h2>{product.product}</h2>
                     <span>{product.price} DA</span>
                     </Link>
                    </div>
                     
                     
                  )
              })
          }
         </div>
      </div>
                
            
    )
}
export default Computer;