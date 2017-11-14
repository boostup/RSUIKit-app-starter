import React, { Component } from 'react'
import ElementFader from '../elementfader/ElementFader'

export default class Image extends Component {

  state = { loaded: false }

  onImageLoad = () => {
    this.setState({ loaded: true });
  }

  componentDidMount = () => {
    let img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = this.props.src;
  }

  render() {
    const { props } = this;
    const { loaded } = this.state;

    return (
      <ElementFader visible={loaded}>
        <img {...props} alt="" />
      </ElementFader>
    );
  }
}