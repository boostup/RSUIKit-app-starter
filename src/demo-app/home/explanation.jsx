import React from "react";

export default (props) => (
    <div>
        <h2>Props origin {console.log(...props, props)}</h2>
        <ul>
            <li>
                <b>fetchPhotos:</b> function available through redux <b>connect()</b> mechanism.  
                Have a look at the bottom of the <b>Home.jsx</b> component file</li>
            <li>
                <b>photos:</b> example for data retrieved via HTTP using redux=>action/reducer.</li>
            <li>
                <b>isAuthenticated</b> and <b>userHasAuthenticated:</b> examples of how to propagate values or functions
                from the top level <b>App</b> component and shared to its child routes thanks to the <b>AppliedRoute</b> 
                componenent).
            </li>
            <li>
                <b>match</b>, <b>location</b>, and <b>history</b> come from the react router and routes mechanism
            </li>
        </ul>          
    </div>
    )