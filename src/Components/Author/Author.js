import React from 'react';
import './Author.css'

const Author = (props) => {
    // console.log(props)
    const {authorName, born, nationality, salary, img} = props.author
    return (
        <div className= "box-field">
            <div className="box">
            <img className="image" src={img} alt="" />
            <div>
            <h3>Poet Name: {authorName}</h3>
            <p>Born: {born}</p>
            <p>Nationality: {nationality}</p>
            <p>Salary: ${salary}</p>
            </div>
            <div>
            <button 
            onClick={() => props.handleAddToCart(props.author)}
            className="btn-regular"
            >Add me</button>
            </div>
            </div>
        </div>

    );
};

export default Author;