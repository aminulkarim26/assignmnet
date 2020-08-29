import React from 'react';
import './Product.css';

const Product = (props) => {
     console.log(props);
    const {price, name }= props.product;
    
    return (
        <div className="product">
            <div class="product-details">
            <h1 className ="product-name">{name}</h1>  
            <h5> Best Online Course </h5>
            <p> {price} BDT</p>
            
            <button
             className="main-button"
             onClick={() => props.handleAddProduct(props.product)}
             > Add to Cart </button>
            
            
            
            </div>
            
        
        </div>
    );
};

export default Product;