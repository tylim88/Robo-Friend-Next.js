//this type of file knowns as smart componenet container

import React, { Component } from 'react';
import Head from 'next/head';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import MainPage from '../component/MainPage';
import { apicall } from '../api/api';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const url = 'https://jsonplaceholder.typicode.com/users';

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots(apicall, url))
  };
};

class App extends Component {
  render() {
    return (
      <div>
        <Head>
          <link href="/static/App.css" rel="stylesheet" />
        </Head>
        <MainPage {...this.props} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
