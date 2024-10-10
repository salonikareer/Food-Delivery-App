import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const fetchlist = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/api/food/list");
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.food_list);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };


   const removeFood =async(FoodId)=>{
      console.log(FoodId);
      const response = await axios.post(`${url}/api/food/remove`,{id:FoodId}) 
      await fetchlist();
      if(response.data.success){
         toast.success(response.data.message)
      }
      else{
         toast.error(response.data.message)
      }
   }

  useEffect(() => {
    fetchlist();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list?.map((item) => (
          <div className="list-table-format" key={item.id}>
            <img src={`${url}/images/${item.image}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;