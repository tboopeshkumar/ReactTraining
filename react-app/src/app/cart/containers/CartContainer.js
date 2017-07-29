//bind react & redux
import {connect} from 'react-redux';
import Cart from "../components/Cart"

//mapping redux state to react props
function mapReduxStateToReactProps(state){
    //return props
    return {
        items : state.cartState
    }
}


var connectFn = connect(mapReduxStateToReactProps);

//Higher order component
//Instrument/Wrap Cart Component
// retun wrapper component
var cartContainer = connectFn(Cart);

export default cartContainer;