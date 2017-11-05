/**
 * This file is meant to manage all dynamic loading of code at run time.
 * Through the use of the "react-loadable" package, webpack knows how to automatically cut the chunks.
 */
import Loadable from "react-loadable";
import { DefaultLoadingComponent } from './loading'; 

export const Home = Loadable({
    loader: () => import("./containers/Home"),
    loading: DefaultLoadingComponent
  });