/**
 * This file is meant to manage all dynamic loading of code at run time.
 * Through the use of the "react-loadable" package, webpack knows how to automatically cut the code into chunks.
 */
import React from "react";
import Loadable from "react-loadable";
import { defaultLoadingWithProps } from './LoaderWidget'; 

/**
 * https://github.com/thejameskyle/react-loadable#how-do-i-avoid-repetition
 * This wrapper helps avoiding having to repeat the loadable parameters common to
 * all the components that will be made 'loadable' in this file.
 */
export const LoadableChunk = function (opts) {
  return Loadable(Object.assign({
    loading: defaultLoadingWithProps({customElement: opts.customElement}),
    timeout: 10,
    render: (loaded, props) => {
      //Does nothing special for now, but this could be useful oneday to wrap the 'Component' component...
      let Component = loaded.default;
      return <Component {...props}/>;
    }
  }, opts));
};