import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CgShoppingCart } from 'react-icons/cg'
import { Shopcontext } from '../../context/Shopcontext'
export default function Navbar() {
    const {carts}=useContext(Shopcontext)
  
  return (
  
  <div className="navbar">
    <div className="container">
      <div className="logo">ReactShop</div>
      <div className="cart">
              <ul className='list'>
        <li>
          <Link to='/'>Shop</Link>
        </li>
        <span className='count'>{carts.length}</span>
        <li>
          <Link to='/cart'><CgShoppingCart className='icon' size={25}/></Link>
        </li>
      </ul>
      </div>

    </div>
  </div>
  )
}
