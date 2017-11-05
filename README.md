This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

[Guide available here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

[This app is made following this tutorial](https://serverless-stack.com/chapters/create-a-new-reactjs-app.html)

#Intro
This package is meant as a starter kit for creating react apps for the browser.

#Features
- Webpack, live coding
- Bootstrap for react
- Routing (Handling not found routes)
- Auto selecting nav item of main nav, according to URL/href
- CSS imports using regular ES6 import statements
- Passing App-level data or functions to routes' child component (useful for passing user session data for example)
- [Components are loadable through ES6 'import' statements using 'react-loadable'](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html#nextsteps)

#TODO
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


- is ES6 await/async??

#Useful tools
- [Defining favicons](https://serverless-stack.com/chapters/add-app-favicons.html)
