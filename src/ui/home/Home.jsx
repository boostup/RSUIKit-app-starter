import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./Home.css";
import { fetchPhotos } from "../../redux/demo_api";

class Home extends Component {

  componentDidMount() {
    //get dummy data from a json placeholder online service
    //Integrate redux and redux-thunk to allow sync code syntaxe to run async'ly
    // + test await / async in this environment
    this.props.fetchPhotos();
  }

  render() {

    if(!this.props.photos) return <div>Loading photos...</div>;

    return (
      <div className="Home">
        <div className="lander">
          <h1>Home (Sample Component)</h1>
          <h2>Available Properties</h2>
          <p>The following props are available to the Home Component 'this.props': </p>
          <ul>
          {(_.keys(this.props).map(propName => <li key={propName}>{propName}</li>))}
          </ul>
          
          <h2>Where do they come from?</h2>
          <ul>
            <li>'fetchList' </li>
            <li>'photos': example for data retrieved via HTTP using redux=>action/reducer.</li>
            <li>'isAuthenticated' and 'userHasAuthenticated': examples of how to propagate values or functions
              from the top/root 'App' component to its children.  Have a look at components/AppliedRoute).
            </li>
            <li>'match', 'location', and 'history' come from the react router / routes</li>
          </ul>  

          <h2>Sample data: photos</h2>
          <ul>
          {this.props.photos.map(photo => {

            return (
              <li key={photo.id}>
                {photo.title}
                <img src={photo.thumbnailUrl} />
              </li>
            )
          })}
          </ul>
          

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photos: state.demoReducer ? state.demoReducer : '' };
}

export default connect(mapStateToProps, { fetchPhotos } )(Home)