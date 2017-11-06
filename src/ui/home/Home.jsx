import React, { Component } from "react";
import { connect } from "react-redux";
import "./Home.css";
import { fetchPhotos } from "../../redux/demo_api";
import { AvailableProps, PhotosList} from "../loadables";

class Home extends Component {

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div className="Home">
        <h1>Home (Sample Component)</h1>
        <AvailableProps props={this.props}/>

        {this.props.photos && <PhotosList photos={this.props.photos} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.demoReducer ? state.demoReducer : '' };
}

export default connect(mapStateToProps, { fetchPhotos } )(Home)