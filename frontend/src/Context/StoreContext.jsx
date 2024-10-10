import React, { useEffect } from "react";
// import { food_list } from "../assets/assets";
export const StoreContext = React.createContext(null);
import axios from "axios";
const StoreContextProvider =(props)=>{
  const  [cartItems,setCartItems]=React.useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = React.useState("");
  const [food_list,setFoodList] = React.useState([]);
  const addToCart =async(itemId)=>{

    if(!cartItems[itemId]){
        setCartItems(prev => ({...prev,[itemId]:1}))
    }
    else{
        setCartItems(prev => ({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
        await axios.post("http://localhost:4000/api/cart/add",{itemId},{headers:{token}})
    }
}
console.log("cart",cartItems);
const removeFromCart =(itemId)=>{
    setCartItems(prev => ({...prev,[itemId]:prev[itemId]-1}))
}

const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
           let itemInfo = food_list.find((product)=>product.id===item)
           totalAmount+=itemInfo.price*cartItems[item];

        }
    }

    return totalAmount;
}

  const fetchFoodList = async () => {
    const response = await axios.get("http://localhost:4000/api/food/list");
   setFoodList(response.data.food_list);
  };

     useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
          }
          loadData();
     },[])

    const contextValue={
       food_list,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount,url,token,setToken
    }
     
    return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider