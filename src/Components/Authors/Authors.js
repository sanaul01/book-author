import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Cart from '../Cart/Cart';
import './Authors.css'

const Authors = () => {
    const [authors, setAuthors] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setAuthors(data))
    }, [])

    const handleAddToCart = author =>{
        const newCart = [...cart, author];
        setCart(newCart)
    }
    return (
        <div className="container">
            <div >
            <h2>authors: {authors.length}</h2>
                <div className="authors-container">
                    
                    {
                        authors.map(author => <Author 
                            // key={author.key}
                            author={author}
                            handleAddToCart={handleAddToCart}
                            ></Author>)
                    }
                </div>            
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Authors;