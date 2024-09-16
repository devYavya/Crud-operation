import React, { useState } from "react";
import "./Addp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Add= () =>
{
    const products = {
        P_ID:"",
        ProductName:"",
        PricePerUnit:"",
        Discount:""

    }

    const [product, setProduct] = useState(products);
    const navigate = useNavigate();

    const inputHandler = (e) =>
    {
        const {name,value} = e.target;
        setProduct({...product,[name]:value});
        // console.log(product); 
    }
const submitForm = async(e) =>
{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create",product)
    .then((response)=>{
        toast.success("Product Added Sucessfully!",{position:"top-left"})
        navigate("/")
    }).catch(error => console.log(error))
}



    return (
        <div className="addProduct">
            <Link to={"/"}> <i class="fa-solid fa-angle-left"></i></Link>
            <h3>Add New Product</h3>
            <form className="addproductform" onSubmit={submitForm}>
                <div className="inputGroupe">
                    <label htmlFor="P_ID">Product ID</label>
                    <input type="text" onChange={inputHandler} id="pid" name="P_ID" autoComplete="off" placeholder="Product ID"/>
                </div>
                <div className="inputGroupe">
                    <label htmlFor="ProductName">ProductName</label>
                    <input type="text" onChange={inputHandler} id="ProductName" name="ProductName" autoComplete="off" placeholder="ProductName"/>
                </div>
                <div className="inputGroupe">
                    <label htmlFor="PricePerUnit">Price</label>
                    <input type="text" onChange={inputHandler} id="PricePerUnit" name="PricePerUnit" autoComplete="off" placeholder="Price Per Unit in $"/>
                </div>
                <div className="inputGroupe">
                    <label htmlFor="Discount">Product ID</label>
                    <input type="text" onChange={inputHandler} id="Discount" name="Discount" autoComplete="off" placeholder="Discount"/>
                </div>
                <div className="inputGroupe" id="btn">
                    <button type="submit"> Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Add