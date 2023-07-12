import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Products = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(res=>{
    setData(res.data);
    })
  },[] /*bu loopun qarsisini alacaq*/);
   console.log(data)
  return (
	 <div className='products'>
    <table id="customers">
      <thead>
      <tr>
    <th>ID</th>
    <th>Image</th>
    <th>Title</th>
    <th>Description</th>
  </tr>
      </thead>
  <tbody>


  {
    data.map((item)=>(
      <tr>
      <td>{item.id}</td>
      <td><img src={item.image} alt="" /></td>
      <td>{item.title.slice(0,15)}</td>
      <td>{item.description.slice(0,20)}</td>
    </tr>
    
    ))
  }
  </tbody>
</table>
   </div>
  )
}

export default Products