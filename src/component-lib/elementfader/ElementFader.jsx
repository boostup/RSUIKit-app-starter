import React, { Component } from 'react'
import { Transition } from 'semantic-ui-react'

/**
 *  <ElementFader></ElementFader> => will manage internal state.visible
 *  <ElementFader visible={true} => makes element always Visible; no fade transition
 *  <ElementFader visible={false} => makes element always Invisible; no fade transition
 *  <ElementFader visible={someValue} => transition will fade in if someValue === true, or fade out if someValue === false
 */

export default class ElementFader extends Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount = () => this.toggleVisibility()

  render() {
    const { props } = this;

    //Not ready to render
    if (!props) return null;

    const visible = props.visible === undefined
      ? this.state.visible
      : props.visible;

    return (
      <div>
        <Transition visible={visible} animation='fade' duration={props.duration || 1000}>
          {/*DO NOT REMOVE this wrapping DIV.  Without it, the Transition does not work... */}
          <div>
            {props.children}
          </div>
        </Transition>
      </div>
    )
  }
}