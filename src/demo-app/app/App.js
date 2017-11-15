import React, { Component } from "react"
import { Container } from 'semantic-ui-react'
import "./App.css"
import Routes from "../../routing/Routes"
import MainNav from './MainNav'

class App extends Component {
  render() {

    const childProps = {
      isAuthenticated: true,
      userHasAuthenticated: ()=>{}
    };

    return (
      <Container className="App">
        <MainNav />
        <Routes childProps={childProps} />
      </Container>
    );
  }
}

export default App;