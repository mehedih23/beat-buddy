import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className='
        grid 
        my-4 grid-cols-1 gap-2
        md:my-8 md:grid-cols-3 md:gap-4 
        lg:grid-cols-4 lg:gap-6
        '>
            <div className='md:col-span-2 lg:col-span-3 bg-slate-500'>
                <h2>Products</h2>
            </div>
            <div className='bg-lime-500'>
                <h4>cart</h4>
            </div>
        </div>
    );
};

export default Shop;