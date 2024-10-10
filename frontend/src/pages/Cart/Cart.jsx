import React ,{useContext}from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext);

      const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
         <p>Items</p>
         <p>Title</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if (cartItems[item._id] >0){
            return(
              <>
              <div className='cart-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <button style={{cursor:'pointer',border:'none',background:'none'}} onClick={()=>removeFromCart(item._id)}>x</button>
                </div>
                <hr style={{height:'1px',background:"#e2e2e2",border:'none'}}/>
                </>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
            <button onClick={() => navigate('/order')}>Proceed To Checkout</button>
          </div>
      
        </div>
        <div className="card-promocode">
          <div className='card-promocode-input'>
            <p>if you have a promocode, enter it here</p>
            <input type="text" placeholder='Enter Promocode'/>
            <button>Apply</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart