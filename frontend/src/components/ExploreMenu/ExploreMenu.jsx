import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {


  return (
    <div className='=explore-menu' id="explore-menu">
   <h1>Explore Our Menu</h1>
   <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable variety of cuisines crafted with finest ingredients and delivered to your door.</p>
     <div className="explore-menu-list">
        {menu_list.map((item)=>(
            <div onClick={()=>setCategory(prev =>prev===item.menu_name ? "All" : item.menu_name)} className="explore-menu-item" key={item.menu_name}>
                <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
        ))}
     </div>
     <hr/>
    </div>
  )
}

export default ExploreMenu