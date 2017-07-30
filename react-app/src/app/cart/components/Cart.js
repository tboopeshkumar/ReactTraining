import React from 'react';

export default function Cart(props){
  let list = props.items.map ( product => (

                    <li >
                      {product.name}
                    
                    </li>
                                      )) 

    return(
        <div>
            <h2>Cart- { props.items.length }</h2>
            {/* <button onClick={(e)=>{ props.emptyItems()}}>
                Empty
            </button> */}
    <ul>
 {/* {list}  */}
            </ul>
           
  <button onClick={(e)=>{ props.cartActions.emptyCart()}}>
                Empty
            </button> 

        
        </div>
    )
}

Cart.defaultProps ={ items :[] }