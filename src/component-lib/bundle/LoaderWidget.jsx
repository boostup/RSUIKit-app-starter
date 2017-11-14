import React from "react";
/**
 * 
 * The Default App-level "is Loading..." Component to be displayed while loading
 */
export function defaultLoadingWithProps(props) {  
  return ({isLoading, error}) => {
    // Handle the loading state
    if (isLoading) {
      return props.customElement || <div>loading...</div>;
    }
    // Handle the error state
    else if (error) {
      return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
      return null;
    }
  };
}
