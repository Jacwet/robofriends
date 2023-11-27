import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";
import ErrorBoundry from "../Components/ErrorBoundry";
import "./App.css"
import SearchBox from "../Components/SearchBox";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";



const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot?.name.toLowerCase().includes(searchField?.toLowerCase())
  
    })
    console.log(filteredRobots);

    return isPending ?
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>

      );


}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);