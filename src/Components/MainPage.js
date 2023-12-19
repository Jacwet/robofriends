import React, { Component } from "react";
import ErrorBoundry from "../Components/ErrorBoundry";
import "../Containers/App.css"
import SearchBox from "../Components/SearchBox";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";




class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot?.name.toLowerCase().includes(this.props.searchField?.toLowerCase())
    })
  }

  render() {
    const { onSearchChange, robots, isPending } = this.props;
    
    return isPending ?
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          </Scroll>
        </div>

      );
  }
}

export default MainPage;