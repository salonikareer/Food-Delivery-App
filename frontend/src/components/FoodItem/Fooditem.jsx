import React, { useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={`${url}/images/${image}`} alt={name} className="food-item-image" />
        {!cartItems[id] ? (
          <img 
            src={assets.add_icon_white} 
            alt="Add to cart" 
            className="add" 
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className='food-item-counter'>
            <img 
              src={assets.remove_icon_red} 
              alt="Remove from cart"  
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img 
              src={assets.add_icon_green} 
              alt="Add more"  
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating"/>
        </div>
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default Fooditem;