import React, { useContext } from 'react'
import './cart.css'
import { TbTrash } from 'react-icons/tb'
import { Shopcontext } from '../../context/Shopcontext'
export default function Cart() {
  const {remofromcart,carts,  total}=useContext(Shopcontext)

  
  return (
  <>
  <h1 className='cart-title'>Cart Product</h1>

<div className="cart-container">
  {
    carts.map(item =>(
       <div className="cart-product">
    <div className="imgg">
      <img src={item.img} alt="" />
    </div>
    <div className="cart-text">
      <h3>{item.title}</h3>
      <p className="price">${item.price}</p>
   
      <button onClick={()=> remofromcart(item.id)}><TbTrash/></button>
    </div>
  </div>
    ))
  }
 
</div>









  <h2 className='total'>Total: ${total} </h2>
  </>
  )
}
