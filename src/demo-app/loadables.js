import React from "react"
import { LoadableChunk } from '../component-lib/bundle/LoadableChunk'

export const Home = LoadableChunk({
  customEl: <div>Loading the home container</div>,
  loader: () => import("./home/Home")
});

export const Feed = LoadableChunk({
  text: 'Loading the feed items...',
  loader: () => import("./home/feed")
});

export const Explanation = LoadableChunk({
  text: 'Loading the explanation paragraph...',
  loader: () => import("./home/explanation")
});

export const AvailableProps = LoadableChunk({
  text: 'Loading the available props component...',
  loader: () => import("./home/availableProps")
});