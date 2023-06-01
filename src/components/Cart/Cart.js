import React from 'react';
import './Cart.css';

const Cart = ({ item }) => {

    return (
        <div className='sticky top-0'>
            <h2 className='text-center text-xl font-bold'>My Best Beast</h2>
            <div>
                {
                    item.map(product => <div
                        className='flex items-center my-4'
                        key={product._id}
                    >
                        <img className='inline-block h-12 w-12 rounded-full ring-2 ring-white mr-4' src={product.picture} alt={product.name} />
                        <p>{product.name}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;