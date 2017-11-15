import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Segment } from 'semantic-ui-react'

import "./Home.css";
import { fetchFeed } from "../../redux/demo_api"
import { Feed, Explanation} from "../loadables"
import AvailableProps from './availableProps'


class Home extends Component {

  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    return (
      <Container className="home">
        <h1>Home</h1>
        <Segment>
          <AvailableProps props={this.props}/>
        </Segment>
        <Segment>
          <Explanation />  
        </Segment>
        <Segment>
          {this.props.feed && <Feed feed={this.props.feed} />}
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { feed: state.demoReducer ? state.demoReducer : '' };
}

export default connect(mapStateToProps, { fetchFeed } )(Home)