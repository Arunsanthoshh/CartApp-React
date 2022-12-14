import { useEffect, useState } from "react"
import axios from 'axios';
import React from "react";
import './products.css'
import { CustomButton } from './customButton';

const baseURL = 'https://dummyjson.com/products';
const userRole = 'ADMIN';
const buttonText = userRole === 'ADMIN' ? 'Edit product' : 'Add to cart';

function cartClick(id) {

}

function closeClick(id) {

}

export function Products() {
    let [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((res) => {
            console.log(res.data['products']);
            setProductList(res.data['products']);
        })
    }, []);

    const allProducts = productList.map((product) =>
        <li className="card" key={product.id}>
            <img src={product.thumnail} style={{ width: '100%' }} alt={product.name}></img>
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <span>{product.description}</span>
            <p className="cart-button"><button onClick={cartClick(product.id)}>{buttonText}</button></p>
            {
                userRole === 'ADMIN' ?
                    <span className="close fa fa-trash" onClick={closeClick(product.id)}></span> :
                    <br />
            }
        </li>
    );
    return (
        <React.Fragment>
            <CustomButton userRole={userRole} value='Add Product' />
            <div className="product-list">{allProducts}</div>
        </React.Fragment>
    );
}