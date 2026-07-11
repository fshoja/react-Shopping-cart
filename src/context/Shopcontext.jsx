
import { createContext, useEffect, useState } from "react";

export const Shopcontext =createContext(null)

export const  ShopcontextProvider =({children})=>{
const [carts, setCarts]=useState([])
const [total, setTotal]=useState()
const [isShowtoast, setIsshowtoast]=useState(false)



useEffect(()=>{
setTotal(carts.reduce((acc ,cour )=> acc+ parseInt(cour.price),0))
},[carts])


useEffect(()=>{
  const localdata =JSON.parse(localStorage.getItem('carts'))
  if(localdata){
    setCarts(localdata)
  }
},[])


useEffect(()=>{
localStorage.setItem('carts', JSON.stringify(carts))
},[carts])


const addtocart =(item)=>{
  setIsshowtoast(true)

 setCarts([ ...carts, item])

 setTimeout(() => {
  setIsshowtoast(false)
 }, 3000);
 
}




const remofromcart =(itemId)=>{
 setCarts(prev => prev.filter(item => item.id !== itemId)) 
}

const contextData ={addtocart,remofromcart,carts, setCarts, total, isShowtoast, setIsshowtoast}

return(
  <Shopcontext.Provider value={contextData}>
    {children}</Shopcontext.Provider>
    
)
}

