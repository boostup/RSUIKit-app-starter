This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Guide available here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

[This app is made following this tutorial](https://serverless-stack.com/chapters/create-a-new-reactjs-app.html)

#Intro
This package is meant as a starter kit for creating react apps for the browser.

#Features
- Webpack, live coding
- VSCode: integrated app debugging, [thanks to this page, down at the 'Visual Studio Code' section](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- Semantic UI for react
- Routing (Handling "not found" routes)
- Auto selecting nav item of main nav, according to URL/href
- Default loading component is now 'skinnable'
- CSS imports using regular ES6 import statements
- Passing App-level data or functions to routes' child component (useful for passing user session data for example)
- [Components are loadable through ES6 'import' statements using 'react-loadable'](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html#nextsteps)

#Roadmap

##Create NPM package to host this project
 - [Working with scoped packages | npm Documentation](https://docs.npmjs.com/getting-started/scoped-packages)
 - [Semantic versioning and npm | npm Documentation](https://docs.npmjs.com/getting-started/semantic-versioning)
 - [Publishing npm packages | npm Documentation](https://docs.npmjs.com/getting-started/publishing-npm-packages)

##Component Catalog
Create a catalog of components using Catalog.style:

 - https://docs.catalog.style/installation/module
 - https://docs.catalog.style/configuration/imports
 - https://www.catalog.style/try

##Resuable Component active route indicator
Auto selecting nav item of main nav, according to URL/href.

##Reusable Component AJAX loader
Make an app level loading indicator for API requests

##Reusable Component Image lazy loader
image lazy loader with optional animation effect

##Reusable Router transition animation
Look at these 2 solutions, and chose the best; or mix and match them:

 - router transition animation [using this sandbox I made](https://codesandbox.io/s/2484vxj9qy) and making it reusable by Wrapping <Transition> Components, [see this guide](https://github.com/reactjs/react-transition-group/blob/master/Migration.md#wrapping-transition-components)
 - animation transition or a loader like 'nprogress' by integrating [the code I made in this pen](https://codesandbox.io/s/j7y1576lv) or using [this example from the react-router documentation] (https://reacttraining.com/react-router/web/example/animated-transitions)

##Reusable Component PullToRefresh
It should be combinable with any react.Component and augment it or give it access to the functions or components to wire up the pull to refresh to any list of items.

##Reusable Component InfiniteScroll
Implement infinite-scroll for the "PL management" & the "PL details" screens:

 - 18 examples: https://react.rocks/tag/InfiniteScroll
 - google search: https://www.google.fr/search?q=React+scroll-to-load-more&oq=React+scroll-to-load-more&aqs=chrome..69i57j0.3078j0j4&sourceid=chrome&ie=UTF-8
 - Material UI infinite scroll: https://github.com/callemall/material-ui/issues/1511

##Reusable App-wide top bar
It should not scroll with page and stay fixed at the top.
Must have a back button
Must have a title
Must have an optional button at the right end offering menu options; with the vertical 3 dots icon.

##Reusable SelectorMenu
Just like on Android YT app: the playlist selector.

##Reusable Component URLs in descriptions
Parse video descriptions to detect URLs.  Then, convert this URL string into a real HTML A tag using the string as the href.
HINT: https://www.w3schools.com/jsref/jsref_link.asp

##Reusable Component SwipeCheckboxSelection
Implement from the Codepen prototype:
https://codepen.io/b00stup/pen/XzXooM?editors=1000

It should be used on:

 - the "PL details":
    - on the list of videos itself to allow quick swipe selection of videos, swiping on as many checkboxes as are visible on the screen at the moment of the gesture.
    - (optional) the "PL management" selectbox which is available to move selected videos to other playlists, through multiple selection swipe gesture.

#Historical decisions 
 - ~~CSS preprocessor ? which ? provide the choice ??~~  While reading the 'create-react-app' doc I got the serious feeling that CSS precoessors are a thing of the past, espcially with component scoping now available...So, I'm so glad to have never wasted any time investing it in those now already dinosaurs...
 - REUSABLE components based on Semantic UI's rich UI API
 - ~~Could not use NavItem from 'react-bootrap' because I prefer the stylesheet for bootstrap v4 than v3.  However, the 'react-bootrap' implement v3 of bootstrap... should I use semantic-UI for React instead ?~~ ~~No, i should stick to the package 'react-bootstrap'.  However, now I have to adapt the 'sample list' items, and the 'selected route' in main nav to reflect bootstrap HTML markup, because the one I have is compatible v4, but not v3...~~ No, I will keep Semantic UI as it is way more professional than 'react-boostrap' package.
