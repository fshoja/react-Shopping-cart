import React, { useState } from 'react'
import {  shopDatat } from '../../data'
import Products from './Products'


export default function Shop() {

  const [allproduct,setAllproduct ]=useState(shopDatat)



  return (
    <>
 <h1 className="title">AllProduct</h1>

<div className="product-container">


{
  allproduct.map(item =>(
    <Products item={item}/>
  ))
}
</div>  
  </>
  )
}
