import * as ActionTypes from "./ActionTypes"

export function emptyCart(){
     console.log("empty cart called");
    return {       
        type: ActionTypes.EMPTY_CART
    }
}