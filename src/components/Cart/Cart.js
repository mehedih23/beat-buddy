import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ item, handleClearBtn, handleSelectBestBtn, handleDeleteBtn }) => {

    return (
        <div className='sticky top-0'>
            <h2 className='text-center text-xl font-bold'>My Best Beasts</h2>
            <div>
                {
                    item.map(product => <div
                        className='flex items-center justify-between my-4'
                        key={product._id}
                    >
                        <img className='inline-block h-12 w-12 rounded-full ring-2 ring-white mr-4' src={product.picture} alt={product.name} />
                        <p>{product.name.slice(0, 25)}</p>
                        <button
                            onClick={() => handleDeleteBtn(product)}
                        >
                            <FontAwesomeIcon icon={faTrash} style={{ color: "#ff0000" }} />
                        </button>
                    </div>
                    )
                }
            </div>
            <button
                className='w-full bg-green-700 mb-4 p-4 rounded text-white text-lg tracking-wide'
                onClick={() => handleSelectBestBtn(item)}
            >Select Best</button>
            <button
                className='w-full bg-green-700 mb-4 p-4 rounded text-white text-lg tracking-wide'
                onClick={handleClearBtn}
            >Clear</button>
        </div>
    );
};

export default Cart;