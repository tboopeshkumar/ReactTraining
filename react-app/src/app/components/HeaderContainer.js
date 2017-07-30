//container component
//higher order component
//wrap existing component

import {connect} from "react-redux";
  
import {Header} from "./Header";
 
const mapReduxStateToCompProps = (state) => {
     return {
         cartLength: state.cartState.length
     }
}
 
export default connect(mapReduxStateToCompProps)(Header);