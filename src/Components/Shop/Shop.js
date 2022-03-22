import './Shop.css'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [shipping, setShipping] = useState(0)
    const addToCart = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
        const prevPrice = products.price;
        setPrice(price + prevPrice);
        setTax(price * .10);
        setShipping(15);
    }
    useEffect(() => {
        setTax(price * .10);
        setGrandTotal(price + tax + shipping)
    }, [price, tax, grandTotal, shipping])


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                }
            </div>

            <div className='order-container'>
                <h2>Order Summary</h2>
                <p>Items Selected : {cart.length}</p>
                <p>Total Price : {price}</p>
                <p>Shipping Charge : ${shipping}</p>
                <p>Tax : {tax.toFixed(2)}</p>
                <p>Grand Total : {grandTotal || 0}</p>
            </div>
        </div>
    )
}

export default Shop