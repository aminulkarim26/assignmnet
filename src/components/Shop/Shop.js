import React, { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {

    const products = [
        { name: 'Bootstrap', price: parseInt(100) },
        { name: 'JS', price: parseInt(120) },
        { name: 'Angular', price:parseInt(130) },
        { name: 'Php', price: parseInt(140) },
        { name: 'Java', price: parseInt(150) },
        { name: 'Python', price: parseInt(160) },
        { name: 'UI Design', price: parseInt(170) },
        { name: 'UX Design', price: parseInt(180) },
        { name: 'Vue', price: parseInt(190) },
        { name: 'HTML', price: parseInt(190)},
        { name: 'CSS', price: parseInt(200) },
        { name: 'C#', price: parseInt(220) }
    ];
    const first12 = products.slice(0, 12);
    const [product, setProducts] = useState(first12);
    const [cart, setCart]=useState([]);


    const handleAddProduct = (product)=>{
        console.log('Product Added',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className ="shop-container">
        
        <div className="product-container">
           

            {products.map(pd => <Product 
            handleAddProduct ={handleAddProduct}
            product={pd}
            ></Product>
            ) 

            }
            
         </div>
        
        <div className="cart-container">
            
        <Cart cart={cart}></Cart>
        </div>
            
        </div>


    );
};

export default Shop;

