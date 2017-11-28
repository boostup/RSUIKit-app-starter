import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './MainNav.css'

export default class MainNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => 
  this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <img className="logo" src="logo.png" alt=""/>
        <Menu pointing secondary>
          <Menu.Item header as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/catalog' name='components catalog' active={activeItem === 'components catalog'} onClick={this.handleItemClick} />
        </Menu>
      </Container>
    )
  }
}
