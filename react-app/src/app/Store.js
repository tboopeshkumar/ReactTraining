import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/Reducer";

import productReducer from "./product/Reducer";

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE, action) {
    console.log("counter reducer", state, action);

    switch(action.type) {
        //label can be any custome name like XYZ/ABC
        case "INCREMENT":
        return state + 1;

        case "DECREMENT":
        return state - 1;

        default:
        return state;
    }
}

// combine reducer
let rootReducer = combineReducers({
    cartState: cartReducer,
    counterState: counterReducer,
    productState : productReducer
});

//code below for experiement purposes

//store accept only one reducer
//one react application shud have only one store ideally
let store = createStore(rootReducer, {
    counterState:1000,
    cartState: [
        {id: 1, name: 'Moto'},
        {id: 2, name: 'Nexus'}
    ]
}, applyMiddleware(thunk));

export default store;

store.subscribe( ()=> {
    console.log("SUB ", store.getState());
});

let incrementAction = {
    type: 'INCREMENT'
}

function incrementActionCreator(value) {
    return {
        type: 'INCREMENT',
        value: 1
    }
}

//Async Action
function incrementActionAfterDelay(delay) {
    return function() {
        setTimeout( ()=> {
            //call dispatch
            console.log("thunk called me");
        },delay);
    }
}

var action = incrementActionCreator(10);
store.dispatch(action);

var actionFn = incrementActionAfterDelay(1000);
store.dispatch(actionFn);

store.dispatch(incrementAction);
console.log("State ", store.getState());

store.dispatch(incrementAction);
console.log("State ", store.getState());

store.dispatch(incrementAction);
console.log("State ", store.getState());

store.dispatch({
    type: 'UNKNOWN'
});
store.dispatch(incrementAction);
console.log("State ", store.getState());