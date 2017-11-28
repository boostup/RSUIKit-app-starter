import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Segment, Visibility } from 'semantic-ui-react'

import "./index.css";
import { fetchFeed } from "../../redux/starterAppAPI"
import { Feed, Explanation} from "../loadables"
import AvailableProps from '../../component-lib/availableprops/AvailableProps'


class Home extends Component {

  state = {startLazyLoading: false}

  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    const {props} = this;
    const {error} = props.feed;
    const {startLazyLoading} = this.state;

    return (
      <Container className="home" style={{overflowWrap: "break-word"}}>
        <h1>Home</h1>
        
        <Segment>
          <Explanation vars={{startLazyLoading}} />  
        </Segment>

        <Segment>
          <AvailableProps props={{propPath: "this.state", prop: this.state}}/>
          <AvailableProps props={{propPath: "this.props", prop: this.props}}/>
        </Segment>

        <Visibility onUpdate={this.onVisibilityUpdate}>
          {this.state.startLazyLoading && <Segment>
            {error ? error : <Feed feed={props.feed} />}
          </Segment>}
        </Visibility>
      </Container>
    );
  }

  onVisibilityUpdate = () => {
    this.setState({ startLazyLoading: true });
  }
}

function mapStateToProps(state) {
  return { feed: state.starterAppReducer ? state.starterAppReducer : '' };
}

export default connect(mapStateToProps, { fetchFeed } )(Home)