import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props;
    let total = 0;
    let name = '';
    for(const author of cart){
        total = total + author.salary ;  
        name = author.authorName
    }
    
    
    const {length} = props.cart
    return (
        <div className="cart">
            <h1>Author Number: {length}</h1>
            <p>Total Salary: {total}</p>
            <p>{name}</p>
        </div>
    );
};

export default Cart;