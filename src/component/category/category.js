import {RiArrowDropRightLine} from "react-icons/ri"
import {Link} from 'react-router-dom';
import {useSelector } from 'react-redux'
import {SelectProduct} from '../../features/productSlice'

export default function Category({cag,more}) {
   const products = useSelector(SelectProduct);

   return(
          <div className='category'>
              <div className="head-prod">
                  <h2>{cag}</h2>
                  <div className="head-prod-right">
                     
                        <span><Link to={more}>SEE MORE</Link></span>
                     
                    <RiArrowDropRightLine />
                  </div>
              </div>
              <div className="products">
                 {products
                    .filter((filter) => filter.category === cag)
                    .slice(0, 4)
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
