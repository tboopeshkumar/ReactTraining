import React from "react";

//functioanl components
export function Footer(props){
    //let year =2017;
    return(
        <div>
            <p> Copyrights, @{props.year}, {props.company} </p>
        </div>
    )
}