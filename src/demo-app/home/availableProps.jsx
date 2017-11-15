import React from "react";
import _ from "lodash";

export default (props) => {
    return (
        <div>
            <h2>Available Props</h2>
            <p>The following props are available to this component via 'this.props': </p>
            <ul>
            {(_.keys(props.props).map(propName => <li key={propName}>{propName}</li>))}
            </ul>          
        </div>
    )
}