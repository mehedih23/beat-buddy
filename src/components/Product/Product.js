import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleBuyNow }) => {
    const { picture, name, price, isStock } = product;
    return (
        <div className='border rounded border-green-400'>
            <img className='p-2' src={picture} alt="" />
            <div className='p-2'>
                <h2 className='font-bold'>{name}</h2>
                <p>Price : ${price}</p>
                <h2>Availability : {isStock}</h2>
                <div>
                    <button className='bg-slate-600 text-center p-2 mt-4 text-white rounded w-full' onClick={() => handleBuyNow(product)}>
                        <span className='mr-2'>Buy Now</span>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;