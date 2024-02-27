import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../styles/Products.css"
export default function Produc() {

  const[name,setName]=useState("");
  const[price,setPrice]=useState("");
  const[qty,setQty]=useState("");
  const[categoryid,setCategoryId]=useState("");
  const[category,setCategory]=useState(null);
  const[products,setProducts]=useState(null);
  useEffect(()=>{
    getAllCategories();
    getAllProducts();
},[])

const handleName=(e)=>{
    setName(e.target.value);
}
const handlePrice=(e)=>{
    setPrice(e.target.value);
}
const handleselect=(e)=>{
    setCategoryId(e.target.value);
}
const handleQTY=(e)=>{
  setQty(e.target.value);
}

const getAllProducts=async()=>{
     try {
       const response=await axios.get("http://localhost:8081/get/all/products");
       setProducts(response.data);
     } catch (error) {
         console.log(error);
     }
}

const getAllCategories=async(e)=>{
    try {
        const response=await axios.get("http://localhost:8081/get/all/category");
       setCategory(response.data);
    } catch (error) {
        console.log(error);
    }
}
     const addProduct=async(e)=>{
        e.preventDefault();

        const data={
            "name":name,
            "price":price,
            "qty":qty,
            "categoryid":categoryid
        }

        try {
            const response=await axios.post("http://localhost:8081/add/product",data);
            console.log(response.data);
            getAllProducts();
        } catch (error) {
             console.log(error);
        }
     }
  return (
    <div>
      <form onSubmit={addProduct}>
        <div className="name">
          <label>Product Name</label>
        <input type="text" onChange={handleName} required/>
        </div>
         <div className="qty">
         <label>Product QTY</label>
         <input type="text" onChange={handleQTY} required plceholder="qty"/>
        </div>
            <div className="price">
            <label>Product Price</label>
        <input type="text" onChange={handlePrice} required/>
          </div>    
  <select onChange={handleselect}>
             <option>Select Category</option> 
            
              {category && category.map((cata) => (
                <option value={cata.id}>
                  {cata.name}
                </option>
              ))}
           
            </select>
            <button type="submit">add product</button>
      </form>


      <div className="load-all-products">
            <ol>
              {products && products.map((item) => (
                 <li>{item.name}</li>
              ))}
            </ol>
      </div>
    </div>
  )
}
