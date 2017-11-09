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

##Router transition animation

Look at these 2 solutions, and chose the best; or mix and match them: 

 - router transition animation [using this sandbox I made](https://codesandbox.io/s/2484vxj9qy) and making it reusable by Wrapping <Transition> Components, [see this guide](https://github.com/reactjs/react-transition-group/blob/master/Migration.md#wrapping-transition-components)
 - animation transition or a loader like 'nprogress' by integrating [the code I made in this pen](https://codesandbox.io/s/j7y1576lv) or using [this example from the react-router documentation] (https://reacttraining.com/react-router/web/example/animated-transitions)
 
 ##Misc.
 
 - ~~Could not use NavItem from 'react-bootrap' because I prefer the stylesheet for bootstrap v4 than v3.  However, the 'react-bootrap' implement v3 of bootstrap... should I use semantic-UI for React instead ?~~ No, i should stick to the package 'react-bootstrap'.  However, now I have to adapt the 'sample list' items, and the 'selected route' in main nav to reflect bootstrap HTML markup, because the one I have is compatible v4, but not v3...
 
 - Create reusable component SwipeSelect by integrating [the code I made in this pen](https://codepen.io/b00stup/pen/XzXooM?editors=1000)

#Roadmap
- Include redux and all its relevant bag of tricks, in other words, its related packages like redux-thunk, etc
- Make an app level loading indicator for API requests
- REUSABLE components:
    - infinite scroll
    - pull to reload
    - SwipeSelect: swipeable selection (for example, selecting many check boxes under one swipe)
    - image lazy loader with optional animation effect
- CSS preprocessor ? which ? provide the choice ??


- ~~is ES6 await/async??~~  YES IT IS!!!

#Useful tools
- [Defining favicons](https://serverless-stack.com/chapters/add-app-favicons.html)
