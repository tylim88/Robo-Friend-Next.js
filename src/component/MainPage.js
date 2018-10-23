import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/Boundary';
import Header from '../component/Header';
import Head from 'next/head';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    return (
      <div className="tc">
        <Head>
          <link href="/static/MainPage.css" rel="stylesheet" />
        </Head>
        <Header />
        <SearchBox searchChange={onSearchChange} />

        <Scroll>
          {isPending ? (
            <h1 className="tc">Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={this.filteredRobots()} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
