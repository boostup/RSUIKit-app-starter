This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Guide available here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

[This app is made following this tutorial](https://serverless-stack.com/chapters/create-a-new-reactjs-app.html)

#Intro
This package is meant as a starter kit for creating react apps for the browser.

#Features
- Webpack, live coding
- VSCode: integrated app debugging, [thanks to this page, down at the 'Visual Studio Code' section](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- Bootstrap for react
- Routing (Handling "not found" routes)
- Auto selecting nav item of main nav, according to URL/href
- Default loading component is now 'skinnable'
- CSS imports using regular ES6 import statements
- Passing App-level data or functions to routes' child component (useful for passing user session data for example)
- [Components are loadable through ES6 'import' statements using 'react-loadable'](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html#nextsteps)

#TODO

## Router transition animation

Look at these 2 solutions, and chose the best; or mix and match them: 

 - router transition animation [using this sandbox I made](https://codesandbox.io/s/2484vxj9qy) and making it reusable by Wrapping <Transition> Components, [see this guide](https://github.com/reactjs/react-transition-group/blob/master/Migration.md#wrapping-transition-components)
 - animation transition or a loader like 'nprogress' by integrating [the code I made in this pen](https://codesandbox.io/s/j7y1576lv) or using [this example from the react-router documentation] (https://reacttraining.com/react-router/web/example/animated-transitions)

## Misc.
 
 - ~~Could not use NavItem from 'react-bootrap' because I prefer the stylesheet for bootstrap v4 than v3.  However, the 'react-bootrap' implement v3 of bootstrap... should I use semantic-UI for React instead ?~~ No, i should stick to the package 'react-bootstrap'.  However, now I have to adapt the 'sample list' items, and the 'selected route' in main nav to reflect bootstrap HTML markup, because the one I have is compatible v4, but not v3...
 
 - Create reusable component SwipeSelect by integrating [the code I made in this pen](https://codepen.io/b00stup/pen/XzXooM?editors=1000)

#Roadmap
- Make an app level loading indicator for API requests
- REUSABLE components
- ~~Include redux and all its relevant bag of tricks, in other words, its related packages like redux-thunk, etc~~Done!
- ~~CSS preprocessor ? which ? provide the choice ??~~  While reading the 'create-react-app' doc I got the serious feeling that CSS precoessors are a thing of the past, espcially with component scoping now available...So, I'm so glad to have never wasted any time investing it in those now already dinosaurs...

##Reusable Image lazy loader
image lazy loader with optional animation effect

##Reusable Component URLs in descriptions
Parse video descriptions to detect URLs.  Then, convert this URL string into a real HTML A tag using the string as the href.
HINT: https://www.w3schools.com/jsref/jsref_link.asp

##Reusable Component InfiniteScroll
Implement infinite-scroll for the "PL management" & the "PL details" screens

 - 18 examples: https://react.rocks/tag/InfiniteScroll
 - google search: https://www.google.fr/search?q=React+scroll-to-load-more&oq=React+scroll-to-load-more&aqs=chrome..69i57j0.3078j0j4&sourceid=chrome&ie=UTF-8
 - Material UI infinite scroll: https://github.com/callemall/material-ui/issues/1511

##Reusable Component SwipeCheckboxSelection
Implement from the Codepen prototype:
https://codepen.io/b00stup/pen/XzXooM?editors=1000

It should be used on 
 - the "PL details":
    - on the list of videos itself to allow quick swipe selection of videos, swiping on as many checkboxes as are visible on the screen at the moment of the gesture.
    - (optional) the "PL management" selectbox which is available to move selected videos to other playlists, through multiple selection swipe gesture.

##Reusable Component PullToRefresh
It should be combinable with any react.Component and augment it or give it access to the functions or components to wire up the pull to refresh to any list of items

It should be used on the "PL management" and "PL details" screens' list of items


- ~~is ES6 await/async??~~  YES IT IS!!!

#Useful tools
- [Defining favicons](https://serverless-stack.com/chapters/add-app-favicons.html)
