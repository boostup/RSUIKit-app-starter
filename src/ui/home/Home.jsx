import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./Home.css";
import { fetchList } from "../../redux/demo_api";

class Home extends Component {

  componentDidMount() {
    //get dummy data from a json placeholder online service
    //Integrate redux and redux-thunk to allow sync code syntaxe to run async'ly
    // + test await / async in this environment
    this.props.fetchList();
  }

  render() {

    if(!this.props.items) return <div></div>;

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
            <li>'items': example for data retrieved via HTTP using redux=>action/reducer.</li>
            <li>'isAuthenticated' and 'userHasAuthenticated': examples of how to propagate values or functions
              from the top/root 'App' component to its children.  Have a look at components/AppliedRoute).
            </li>
            <li>'match', 'location', and 'history' come from the react router / routes</li>
          </ul>  

          <h2>Sample data: items</h2>
          <ul>
          {this.props.items.map(item => {

            return (
              <li key={item.id}>
                {item.title}
                <img src={item.thumbnailUrl} />
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
  return { items: state.demoReducer ? state.demoReducer : '' };
}

export default connect(mapStateToProps, { fetchList } )(Home)