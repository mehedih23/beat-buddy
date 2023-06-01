import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [getProducts, setGetProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleBuyNow = (product) => {
        let newCart = [];
        let exists = getProducts.find(item => item._id === product._id);
        if (exists) {
            alert('Item is already added.')
        } else if (!exists) {
            newCart = [...getProducts, product];
            if (newCart.length > 4) {
                alert('Maximum number of products reach.')
            } else {
                setGetProducts(newCart);
            }
        } else {
            let previous = getProducts.filter(item => item._id !== product._id);
            newCart = [...previous, exists];
            if (newCart.length > 4) {
                alert('Maximum number of products reach.')
            } else {
                setGetProducts(newCart);
            }
        }
    }

    const handleSelectBestBtn = (arr) => {
        if (arr.length === 1) {
            alert('Best Item Already Selected.');
        } else {

            const index = Math.floor(Math.random() * arr.length);
            const item = arr[index];
            const newItem = [item];
            setGetProducts(newItem)
        }
    }


    const handleClearBtn = () => {
        setGetProducts([]);
    }

    return (
        <div className='
        grid 
        my-4 grid-cols-1 gap-2
        md:my-8 md:grid-cols-3 md:gap-4 
        lg:grid-cols-4 lg:gap-6
        '>
            <div className='md:col-span-2 lg:col-span-3'>
                <div className='
                grid gap-4
                grid-cols-1 justify-items-center
                md:grid-cols-2 
                lg:grid-cols-3
                '>
                    {products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleBuyNow={handleBuyNow}
                    ></Product>)}
                </div>
            </div>
            <div className='bg-green-300 rounded pt-4 pl-2 pr-2 text-center'>
                <Cart
                    item={getProducts}
                    handleClearBtn={handleClearBtn}
                    handleSelectBestBtn={handleSelectBestBtn}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;