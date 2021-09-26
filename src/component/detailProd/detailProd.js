import React,{useState,useEffect} from 'react'
import './detailProd.css'
import { useParams} from 'react-router-dom';
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from "react-icons/ai"
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import {SelectProduct} from '../../features/productSlice'
import {add} from "../../features/productSlice"

export default function DetailProd() {
  const [count, setCount] = useState(0);
  const prod = useSelector(SelectProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = prod[id-1];

  
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count')));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);
  
  
  let iconFull= <AiFillStar style={{color:"orange"}}/>
  const starEmpty = iconFull -5;
  let iconEmpty= <AiOutlineStar />;


    return (
               <div className="detail" key={product.id}>        
                       <div className="detail-prod" >
                            <img src={product.image} />
                            <div className="inf-prod">
                               <h2>{product.desc}</h2>
                               <h3>mark: <span>{product.product}</span></h3>
                               <div className="star">
                                  {iconFull}{iconFull}{iconFull}{iconEmpty}
                               </div>
                               <span>{product.price} DA</span>
                               <button className="btn-add" onClick={() => dispatch(add(product))}><HiOutlineShoppingCart />I BUY</button>
                            </div>
                            
                       </div>
               </div>
    )
}
