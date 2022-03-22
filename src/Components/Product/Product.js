import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Product = (props) => {
    const { addToCart, product } = props;
    const { name, img, price, seller, ratings } = product;
    return (
        <div className='product-container'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h3>Price : ${price}</h3>
                <i>Manufacturer : {seller}</i> <br />
                <small>Ratings : {ratings}</small>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => addToCart(product)}>
                <p style={{ marginRight: '5px' }}>Add To Cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    )
}

export default Product