import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;

    for(const author of cart){
        total = total + author.salary;  
    }
    
    const {length} = props.cart
    return (
//======== Cart container ========== 
        <div className="cart">
            <h1>Author Number: {length}</h1>
            <p>Total Salary: ${total}</p>
            {
                cart.map(name =><li>{name.authorName}</li>)
            }
        </div>
    );
};

export default Cart;