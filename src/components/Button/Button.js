import React from "react";
export default function Button({props}){
    const disable = props?.disable || false
    switch (props.type) {
        case 'primary':

            return(<>
            <button onClick={props.function} className="button button-primary" disabled={disable}>{props.text}</button>
            </>)
            break;
        case 'secondary':
            return(<>
            <button className="button button-secondary">{props.text}</button>
            </>)
            break;
        default:
            break;
    }
}