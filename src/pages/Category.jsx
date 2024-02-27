import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import "../styles/Category.css"

export default function Category() {

    const[category,setCategory]=useState("");
    const[categories,setCategories]=useState(null);

    useEffect(()=>{
         getAllCategories();
    },[])

    const getAllCategories=async()=>{
       try {
          const response=await axios.get("http://localhost:8081/get/all/category");
          setCategories(response.data);
       } catch (error) {
          console.log(error);
       }
    }

    const handleInput=(e)=>{
        setCategory(e.target.value);
    }

  const handleCategoy=async(e)=>{
     e.preventDefault();

     const data={
        "name":category
     }

     try {
        const response=await axios.post("http://localhost:8081/add/category",data);
        console.log(response.data);
        getAllCategories();
     } catch (error) {
         console.log(error);
     }
  }

  return (
    <div>
      <form onSubmit={handleCategoy}>
        <label>Enter Category Name</label>
        <input type="text" required onChange={handleInput}/>
        <button type="submit">Add Category</button>
      </form>

      <div className="show-all-category">
            <ol>
              {categories && categories.map((item) => (
                <li>{item.name}</li>  
              ))}
            </ol>
      </div>
    </div>
  )
}
