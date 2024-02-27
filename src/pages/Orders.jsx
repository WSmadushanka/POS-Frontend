import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Order.css"
import Swal from 'sweetalert2';
export default function Order() {

   const[products,setProduct]=useState(null);
   const[Orders,setOrders]=useState([]);
   const[total,setTotal]=useState(0);
   const[count,setCount]=useState(0);

   const saveOrderAlert=()=>{
    Swal.fire({
        title: "Good job!",
        text: "We got your order.",
        icon: "success"
      });
   }

   const increment=()=>{
     setCount(count+1);
   }

   useEffect(()=>{
    getProducts();
},[])

useEffect(()=>{
},[total])

    const getProducts= async () => {
        const response=await axios.get("http://localhost:8081/get/all/products")
        setProduct(response.data);
    }

    const saveOrder = async()=>{
        const productIds = Orders.map(product=>product.id);//assign ids of the products to a single array

        const data={
            "products":productIds
        }

        const response = await axios.post("http://localhost:8081/place/order",data);
        if (response.status===200) {
            saveOrderAlert();
            setOrders([]);
            setTotal(0);
            setCount(0);
        } else {
            //show error message
        }
    }

  return (
    <div>
        <div className="container-fluid">
            <div className="lniks">
                <div className="product-page-link">
                    <p>Do you want to add Products or Category? please use the links</p>
                <Link to="/prduct" className="produc-page">Products</Link>
                </div>

           <div className="category-page-link">
           <Link to="/category" className="category-page">Category</Link>
           </div>

            </div>
            <div className="heading text-center">
                <h1>Page Order</h1>
            </div>
        </div>
      <div className="row">
        <div className="col-md-6">
        <h3>products</h3>
            {products && products.map(product =>(
                <div key={product.id} className="product shadow-sm bordered bg-light px-3 py-3 mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>{product.name}</h5>
                            <h5>{product.price}</h5>
                           
                        </div>
                        <button className="btn btn-primary" onClick={()=>{
                             setOrders([...Orders,product]);
                            let productTotal=total+product.price;
                             setTotal(productTotal);
                             increment();
                        }}>
                            Add
                        </button>
                    </div>
                </div>
            ))}
           
        </div>
        <div className="col-md-6">
           <h1>Orders</h1>
           <div className="cart-icon">
           <i class="fa-solid fa-cart-shopping"></i>
           </div>
           <div className="red-ball">
           {count}
           </div>
           
           <table className="table">
            <thead>
                <tr>
                   <th>
                    ProductID
                   </th>
                   <th>
                    Name
                   </th>
                   <th>Price</th>
                </tr>
            </thead>
            <tbody>
               {Orders.map(product =>(
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                      <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
            <thead>
                <tr>
                    <th colSpan={2}>
                        Total is :
                    </th>
                    <th>
                        {total}
                    </th>
                </tr>
               
            </thead>
           </table>
           <div className="save-order-button">
           <button className="btn btn-secondry" onClick={saveOrder}>Save Order</button>
           </div>
        </div>
      </div>
     
    </div>
  )
}
