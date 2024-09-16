import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import axios from 'axios'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import toast from "react-hot-toast";

const Product = () => {

  const[products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData= async()=>
    {
      const response = await axios.get("http://localhost:8000/api/getAll")
      setProducts(response.data);
    }

    fetchData();

  },[])

  const deleteProduct = async(productID) =>
  {
    await axios.delete(`http://localhost:8000/api/deleteProduct/${productID}`)
    .then((response)=>{
      setProducts((preProduct)=>preProduct.filter((product)=>Product._id!==productID))
      toast.success("Product Deleted successfully!", { position: "top-left" });

    }).catch((error)=>
    {
      console.log(error);
      toast.error("Error Deleting product!", { position: "top-left" });

    })
  }

  return (
    <div className="ProductTable">
      <Link className="ADDP" to={"/add"}>Add Product</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index)=>
            {
              return(
                   <tr key={product._id}>
                      <td>{index+1}</td>
                      <td>{product.P_ID}</td>
                      <td>{product.ProductName}</td>
                      <td>{product.PricePerUnit}</td>
                       <td>{product.Discount}</td>
                        <td>
                         <Link to={`/edit/`+product._id} className="button-link"><i class="fa-regular fa-pen-to-square"></i></Link>
                         <button onClick={()=>deleteProduct(product._id)}>
                            <i className="fa-solid fa-trash"></i></button>
                        </td>
                  </tr>
              )
            }
          )}
          
        </tbody>
      </table>
    </div>
  );
};

export default Product;