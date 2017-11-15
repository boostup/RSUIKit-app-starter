import React, { Component } from 'react'
import ElementFader from '../elementfader/ElementFader'
import { Visibility } from 'semantic-ui-react'

export default class Image extends Component {

  state = { loaded: false, visibility: false };

  onImageLoad = () => {
    this.setState({ loaded: true });
  }

  componentDidMount = () => {
    let img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = this.props.src;
  }

  handleVisible = () => {
    this.setState({ visibility: true });
  }

  render() {
    const { props, state } = this;
    const { loaded, visibility } = state;
    const renderedProps = visibility === true ? props : {};

    return (
      <Visibility onTopVisible={this.handleVisible}>
        <ElementFader visible={loaded && visibility}>
          <img {...renderedProps} alt="" />
        </ElementFader>
      </Visibility >
    );
  }
}