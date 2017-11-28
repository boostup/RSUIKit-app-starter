import React from "react";

export default (props) => (
    <div>
        <h2>Props</h2>
        <p>Among others, these are found in the <b>HOME</b> component</p>
        <ul>
            <li>
                <b>startLazyLoading:</b> <i>Right now, is it equal to <b>{props.vars.startLazyLoading.toString()}</b></i>.
                <p>
                    This is for performance purposes (Critical Rendering Path) and it is set to <b>false</b> on 
                    first screen render. 
                    As soon as the screen is scrolled, this component state prop will be equal to <b>true</b>, 
                    which will trigger the lazy loading of the rest of the page.
                </p>
            </li>
            <li>
                <b>fetchFeed:</b> function available through redux <b>connect()</b> mechanism.  
                Have a look at the bottom of the <b>Home.jsx</b> component file</li>
            <li>
                <b>feed:</b> example for data retrieved via HTTP using redux=>action/reducer.</li>
            <li>
                <b>isAuthenticated</b> and <b>userHasAuthenticated:</b> examples of how to propagate values or functions
                from the top level <b>App</b> component and share them with its child routes thanks to the <b>AppliedRoute</b> 
                componenent).
            </li>
            <li>
                <b>match</b>, <b>location</b>, and <b>history</b> come from the react router and routes mechanism
            </li>
        </ul>          
    </div>
)