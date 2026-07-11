import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'


export default function Toast() {
const {isShowtoast, setIsshowtoast}=useContext(Shopcontext)

  return (

 <div className="toast-container position-fixed bottom-0 end-0 mb-4">
<div className={`${isShowtoast ? 'show':''} toast   items-center  text-white bg-primary`}>
<div className="flex justify-between items-center p-3">
    <button  type='button' className='btn-close btn-close-white ms-3'></button>
<div className="toast-body">محصول با موفقیت به سبد اضافه شد</div>
</div>

</div>
 </div>
  )
}
//     allproduct,
// userCart, 
// setUsercart,
// ,
// setIsshowtoast,
// isShowCart,
// setIsshowCart