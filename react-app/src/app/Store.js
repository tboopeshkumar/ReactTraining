import {createStore, combineReducers} 
    from "redux";

import cartReducer from "./cart/Reducer";

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE , 
                        action){
    console.log("counter Reducer prev State", state, action);

    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
 
        // case "@@redux/INIT":
        //     return INITIAL_STATE;

        default: 
            return state;
    }
}

let rootReducer = combineReducers({
    cartState : cartReducer,
    counterState : counterReducer
})

//store accept only one reducer as parameter
let store = createStore(rootReducer, {
                        counterState: 1000,
                        cartState :[
                            {id:1, name:'Moto'},
                            {id:2, name:'Nexus'}
                        ]
                    });

export default store;

//code below for experiment purpose only

//called after every dispatch
store.subscribe ( ()=> {
    console.log("SUB ", store.getState());
})

let action = {
    type: 'INCREMENT',
    value: 1
}

console.log("dispatching ", action);
store.dispatch(action)
console.log("State ", store.getState());

console.log("dispatching ", action);
store.dispatch(action)
console.log("State ", store.getState());


console.log("dispatching ", action);
store.dispatch(action)
console.log("State ", store.getState());

// store.dispatch({
//     type: 'ADD_ITEM_TO_CART',
//     item: { name: 'moto'}
// })
console.log("State ", store.getState());

//INCREMENT
store.dispatch(action)
