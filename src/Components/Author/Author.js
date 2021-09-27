import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAddressBook, faThumbsUp, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import './Author.css'

const Author = (props) => {
    const element = <FontAwesomeIcon icon={faAddressBook} />
    const like = <FontAwesomeIcon icon={faThumbsUp} />
    const goAway = <FontAwesomeIcon icon={faShareSquare} />
    const {authorName, born, nationality, salary, img, work} = props.author
    return (

        <div className= "box-field">
{/* =======  Author container  ==========  */}
            <div className="box">
                
                <img className="image" src={img} alt="" />
                <div>
                    <h3>Poet Name: {authorName}</h3>
                    <p>Born: {born}</p>
                    <p>Nationality: {nationality}</p>
                    <p>Salary: ${salary}</p>
                    <p>Work: {work}</p>
                </div>
                <div>
{/*========== button Handler  ===========*/}
                    <button 
                    onClick={() => props.handleAddToCart(props.author)}
                    className="btn-regular"
                    ><small>{element}</small> Add to Cart</button>
                </div>

                <div className="icon-field">
                    <p className="icon">{like}</p>
                    <p className="icon">{goAway}</p>
                </div>
            </div>
        </div>

    );
};

export default Author;