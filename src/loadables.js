/**
 * This file is meant to manage all dynamic loading of code at run time.
 * Through the use of the "react-loadable" package, webpack knows how to automatically cut the chunks.
 */
import Loadable from "react-loadable";
import { DefaultLoadingComponent } from './loading'; 

/**
 * https://github.com/thejameskyle/react-loadable#how-do-i-avoid-repetition
 * This wrapper helps avoiding having to repeat the loadable parameters common to
 * all the components that will be made 'loadable' in this file.
 */
const CommonLoadable = function CommonLoadable(opts) {
  return Loadable(Object.assign({
    loading: DefaultLoadingComponent,
    delay: 200,
    timeout: 10,
  }, opts));
};

/**
 * HOME COMPONENT
 */
export const Home = CommonLoadable({
    loader: () => import("./containers/Home")
  });