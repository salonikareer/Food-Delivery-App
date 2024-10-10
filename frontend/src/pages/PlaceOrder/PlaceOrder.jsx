import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form action="" className="place-order">
       <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" className="text" placeholder='first name' />
          <input type="text" className="text" placeholder='last name' />
        </div>
           <input type="email"placeholder='email' />
           <input type="text" placeholder='Street' />
           <div className="multi-fields">
          <input type="text" className="text" placeholder='City' />
          <input type="text" className="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" className="text" placeholder='Zip code' />
          <input type="text" className="text" placeholder='Country' />

        </div>
        <input type="text" placeholder='Phone Number' />
       </div>
<div className="place-order-right">
<div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p> ${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <hr/>
            <button >Proceed To payment</button>
          </div>
      
        </div>



</div>
    </form>
  )
}

export default PlaceOrder