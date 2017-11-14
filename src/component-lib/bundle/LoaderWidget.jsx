import React from "react";
import { Loader, Dimmer } from 'semantic-ui-react'
/**
 * 
 * The Default App-level "is Loading..." Component to be displayed while loading
 */
export function defaultLoadingWithProps(props) {  
  return ({isLoading, error}) => {
    // Handle the loading state
    if (isLoading) {
      return props.customEl || <Dimmer active><Loader>{props.text || 'loading...'}</Loader></Dimmer>;
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
