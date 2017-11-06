/**
 * This file is meant to manage all dynamic loading of code at run time.
 * Through the use of the "react-loadable" package, webpack knows how to automatically cut the code into chunks.
 */
import React from "react";
import Loadable from "react-loadable";
import { defaultLoadingWithProps } from './loading/Loading'; 

/**
 * https://github.com/thejameskyle/react-loadable#how-do-i-avoid-repetition
 * This wrapper helps avoiding having to repeat the loadable parameters common to
 * all the components that will be made 'loadable' in this file.
 */
const CommonLoadable = function (opts) {
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

/**
 * HOME
 */
export const Home = CommonLoadable({
    customElement: <div>Loading the home container</div>,
    loader: () => import("./home/Home")
  });

export const PhotosList = CommonLoadable({
    customElement: 'Loading the photos list...',
    loader: () => import("./home/photosList")
  });

export const Explanation = CommonLoadable({
    customElement: 'Loading the explanation paragraph...',
    loader: () => import("./home/explanation")
  });

export const AvailableProps = CommonLoadable({
    loader: () => import("./home/availableProps")
  });

  /**
 * SOME OTHER...
 */