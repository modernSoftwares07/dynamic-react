import React from "react";
import './card.css'
const Card = (props) => {
    return(
        <div className="content">
            <h1>My Telephone directory</h1>
            {props.children}
        </div>
    )
}

export default Card;