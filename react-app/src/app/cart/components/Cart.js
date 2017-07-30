import React from 'react';

export default function Cart(props){
    return(
        <div>
            <h2>Cart- { props.items.length }</h2>
            <button onClick={(e)=>{ props.emptyItems()}}>
                Empty
            </button>
            <ul>

            </ul>
        </div>
    )
}

Cart.defaultProps ={ items :[] }