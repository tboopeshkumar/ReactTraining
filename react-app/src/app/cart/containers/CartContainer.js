//bind react & redux
import {connect} from 'react-redux';
import Cart from "../components/Cart"
import * as actions from "../Actions"

//mapping redux state to react props
function mapReduxStateToReactProps(state){
    //return props
    return {
        items : state.cartState
    }
}

function mapReduxDispatchToReactProps(dispatch){
    return{
        emptyItems : ()=>{
            let action = actions.emptyCart();
            dispatch(action);
        }
    }
}


var connectFn = connect(mapReduxStateToReactProps,
                        mapReduxDispatchToReactProps);

//Higher order component
//Instrument/Wrap Cart Component
// retun wrapper component
var cartContainer = connectFn(Cart);

export default cartContainer;