import React,{useEffect} from 'react'
import './basket.css'
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import {selectTotalItems,selectTotalAmount} from "../../features/variableSlice"
import {remove,incrementProduct,decrementProduct} from "../../features/productSlice"
import {setTotalAmount} from "../../features/variableSlice"
import {SelectProduct} from '../../features/productSlice'


export default function Basket() {
    let totalItems = useSelector(selectTotalItems);
    let totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch();
    const product = useSelector(SelectProduct)
    const cartProducts = product.filter((product) => product.added);


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
    dispatch(setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);

    if(cartProducts.length==0){
      return(
        <div className="basket">
          <div className="header-basket">
              <h2>Shopping cart</h2>
           </div>
           <div className="empty-cart">
              <div className="icon">
                 <i class="fas fa-shopping-cart"></i>
              </div>
              
              <h3>Your basket is empty !</h3>
              <Link to="/"><button>START YOUR SHOPPING</button></Link>
           </div>
        </div>
      )
    }
      return(
        <div className="basket">
           <div className="header-basket">
              <h2>Shopping cart ({cartProducts.length} item) </h2>
           </div>  
           <div className="head-bask">
           
          </div>   
                
           {product.filter((prod)=>prod.added)
               .map((prod)=>{

  
    if(prod.quantity==0){
          dispatch(remove(prod))
      }       const totProd=prod.quantity * prod.price;
          return(
            <>
                    
            <div className="item-basket" key={prod.id}>
              <div className="feature item">
                  
                  <div className="cart-item">
                      <img src={prod.image} />
                      <span className="saller">Seller:</span>
                      <span className="prod">{prod.desc}</span>
                      <div className="icon-item">
                          <div className="icon">
                             <i class="far fa-heart"></i>
                             <div className="name-icon">PUT ASIDE</div>
                          </div>

                          <div className="icon">
                             <i class="fas fa-trash"></i>
                             <div className="name-icon"onClick={() => dispatch(remove(prod))}>REMOVE</div>
                          </div>
                      </div>
                </div>
                  
              </div>
              <div className="feature amount">
              
                      <button onClick={() => dispatch(decrementProduct(prod))}>-</button>
                      <input className="inf-item" value={prod.quantity}/>
                      <button onClick={() => dispatch(incrementProduct(prod))}>+</button>
              </div>
              <div className="feature price">
                      
                       <div className="inf-item">DA{prod.price}</div>
              </div>

              <div className="feature total">
                      
                      <div className="inf-item">DA{totProd}</div>
              </div>


              
            </div>
            </>
          ) 
      })
      }

         <div className="sum">
                   <h2>total: <span>DA{totalAmount}</span> </h2>
          </div>
        </div>
      )      
}
