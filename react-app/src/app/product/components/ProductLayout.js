import React from "react";

import {Link} from "react-router-dom";

export default function ProductLayout (props) {
    return (
        <div>
            <div>
                <Link to="/products/list" 
                className="button">List</Link>

                <Link to="/products/search" 
                className="button">Search</Link>
            </div>

            {/* view container */}
            {props.children}
        </div>
    )
}