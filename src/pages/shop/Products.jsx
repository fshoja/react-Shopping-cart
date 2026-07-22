import React, { useContext } from 'react'
import './shop.css'
import { Shopcontext } from '../../context/Shopcontext'
export default function Products({item}) {

    const {addtocart}=useContext(Shopcontext)
  return (
    <> 

     <div className="product">
    <div className="img">
      <img src={item.img} alt="" />
    </div>
    <div className="desc">
      <h3>{item.title}</h3>
      <p className="prices">${item.price}</p>
   
      <button onClick={()=> addtocart(item)}>Add To Cart</button>
    </div>
   </div>
    </>
 
  )
}