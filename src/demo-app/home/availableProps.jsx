import React from "react";
import _ from "lodash";
import ExplanationParagraph from "./explanation";

export default (props) => {
    return (
        <div>
            <h2>Available Properties</h2>
            <p>The following props are available to this component via 'this.props': </p>
            <ul>
            {(_.keys(props.props).map(propName => <li key={propName}>{propName}</li>))}
            </ul>        

            <ExplanationParagraph />    
        </div>
    )
}