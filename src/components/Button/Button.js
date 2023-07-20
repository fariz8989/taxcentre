import React from "react";
export default function Button({props}){
    const disable = props?.disable || false
    switch (props.type) {
        case 'primary':

            return(<>
            <button onClick={props.function} className={`button button-primary ${props.className}`} disabled={disable}>{props.text}</button>
            </>)
            break;
        case 'secondary':
            return(<>
            <button onClick={props.function} className={`button button-secondary ${props.className}`}>{props.text}</button>
            </>)
            break;
        default:
            break;
    }
}