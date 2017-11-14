import React from "react";

export default (props) => {

    return (
        <div>
            <h2>Where do they come from?</h2>
            <ul>
            <li>'fetchPhotos': comes from the  </li>
            <li>'photos': example for data retrieved via HTTP using redux=>action/reducer.</li>
            <li>'isAuthenticated' and 'userHasAuthenticated': examples of how to propagate values or functions
                from the top/root 'App' component to its children.  Have a look at components/AppliedRoute).
            </li>
            <li>'match', 'location', and 'history' come from the react router / routes</li>
            </ul>          
        </div>
    )

}