import React, { useEffect, useState } from "react";
import "../addproduct/Addp.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = ()=>
{
    const products = {
        P_ID: " ",
        ProductName:"",
        PricePerUnit:"",
        Discount:""
    }

    const {id} = useParams();
    const [product, setProduct] = useState(products);
    const navigate = useNavigate();

    const inputChangeHandler =(e)=>
        {
            const {name, value} = e.target;
            setProduct({...product,[name]:value});
            console.log(product);
    
        }
 useEffect(() =>{
    axios.get(`http://localhost:8000/api/getOne/${id}`)
    .then((response)=>
    {
        setProduct(response.data)

    })
    .catch((error)=>
    {
        console.log(error);
    })
 },[id])
 const submitForm = async(e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/update/${id}`, product);
      toast.success("Product updated successfully!", { position: "top-left" });
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error updating product!", { position: "top-left" });
    }
  };
    return(
        <div className="addProduct">
        <Link to={"/"}> <i class="fa-solid fa-angle-left"></i></Link>
        <h3> Update Product</h3>
        <form className="addproductform" onSubmit={submitForm}>
            <div className="inputGroupe">
                <label htmlFor="P_ID">Product ID</label>
                <input type="text" onChange={inputChangeHandler} value={product.P_ID} id="pid" name="P_ID" autoComplete="off" placeholder="Product ID"/>
            </div>
            <div className="inputGroupe">
                <label htmlFor="ProductName">ProductName</label>
                <input type="text" id="ProductName" onChange={inputChangeHandler} value={product.ProductName} name="ProductName" autoComplete="off" placeholder="ProductName"/>
            </div>
            <div className="inputGroupe">
                <label htmlFor="PricePerUnit">Price</label>
                <input type="text" id="PricePerUnit" onChange={inputChangeHandler} value={product.PricePerUnit} name="PricePerUnit"  autoComplete="off" placeholder="Price Per Unit"/>
            </div>
            <div className="inputGroupe">
                <label htmlFor="Discount">Discount</label>
                <input type="text" id="Discount" onChange={inputChangeHandler} value={product.Discount} name="Discount" autoComplete="off" placeholder="Discount"/>
            </div>
            <div className="inputGroupe" id="btn">
                <button type="submit"> Update Product</button>
            </div>
        </form>
    </div>
    )
}
export default Edit