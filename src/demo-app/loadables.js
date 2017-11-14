import React from "react";
import { LoadableChunk } from '../component-lib/bundle/LoadableChunk';

/**
 * HOME
 */
export const Home = LoadableChunk({
    customElement: <div>Loading the home container</div>,
    loader: () => import("./home/Home")
  });

export const PhotosList = LoadableChunk({
    customElement: 'Loading the photos list...',
    loader: () => import("./home/photosList")
  });

export const Explanation = LoadableChunk({
    customElement: 'Loading the explanation paragraph...',
    loader: () => import("./home/explanation")
  });

export const AvailableProps = LoadableChunk({
    loader: () => import("./home/availableProps")
  });

  /**
 * SOME OTHER...
 */