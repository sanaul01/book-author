import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    let total = 0;
    for(const author of cart){
        total = total + author.salary 
    }
    const {length} = props.cart
    return (
        <div className="cart">
            <h1>summary</h1>
            <h1>cart {length}</h1>
            
            <p>total: {total}</p>
        </div>
    );
};

export default Cart;