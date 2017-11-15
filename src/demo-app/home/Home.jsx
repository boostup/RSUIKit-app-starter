import React, { Component } from "react"
import { connect } from "react-redux"
import { Segment } from 'semantic-ui-react'

import "./Home.css";
import { fetchPhotos } from "../../redux/demo_api"
import { PhotosList, Explanation} from "../loadables"
import AvailableProps from './availableProps'


class Home extends Component {

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <Segment className="home">
        <h1>Home (Sample Component)</h1>
        <Segment>
          <AvailableProps props={this.props}/>
        </Segment>
        <Segment>
          <Explanation />  
        </Segment>
        <Segment>
          {this.props.photos && <PhotosList photos={this.props.photos} />}
        </Segment>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.demoReducer ? state.demoReducer : '' };
}

export default connect(mapStateToProps, { fetchPhotos } )(Home)