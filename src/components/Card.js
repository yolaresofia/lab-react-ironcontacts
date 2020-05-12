import React from 'react';

function Card (props) {
return(
    <div>
        <td><img src={props.pictureUrl} style={{width:50}}alt=""/></td>
        <td>{props.name}</td>
        <td>{Math.floor(props.popularity)}</td>
        <button onClick={() => props.removeContact(props.id)} className="btn-delete">Delete</button>
        </div>
)
}

export default Card;