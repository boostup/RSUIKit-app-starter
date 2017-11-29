/**
 * This file is meant to manage all dynamic loading of code at run time.
 * Through the use of the "react-loadable" package, webpack knows how to automatically cut the code into chunks.
 *
 * Examples of usage:
 * LoadableChunk({
 *   customElement: <div>Loading the home container</div>, //passing a react component
 *   loader: () => import("./home/Home")
 * });
 *
 * export const PhotosList = LoadableChunk({
 *   customElement: 'Loading the photos list...',//passing a string
 *   loader: () => import("./home/photosList")
 * });
 */
import React from "react"
import Loadable from "react-loadable"
import { defaultLoadingWithProps } from './LoaderWidget'
import { ElementFader } from "@source360/react-semantic-ui-kit"

/**
 * https://github.com/thejameskyle/react-loadable#how-do-i-avoid-repetition
 * This wrapper helps avoiding having to repeat the loadable parameters common to
 * all the components that will be made 'loadable' in this file.
 */
export const LoadableChunk = function (opts) {
  return Loadable(Object.assign({
    loading: defaultLoadingWithProps({...opts}),
    timeout: 10,
    render: (loaded, props) => <ElementFader {...opts}><loaded.default {...props}/></ElementFader>
  }, opts));
};