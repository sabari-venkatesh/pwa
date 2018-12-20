/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";

class Grid extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (typeof window !== 'undefined' && __isBrowser__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = this.props.staticContext.data;
    }

    this.state = {
      repos,
      loading: repos ? false : true,
    }

    this.fetchRepos = this.fetchRepos.bind(this)
  }
  componentDidMount() {
    if (!this.state.repos) {
      this.fetchRepos(this.props.match.params.id)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchRepos(this.props.match.params.id)
    }
  }
  fetchRepos(lang) {
    this.setState(() => ({
      loading: true
    }))

    this.props.init(lang)
      .then((repos) => this.setState(() => ({
        repos,
        loading: false,
      })))
  }
  render() {
    const { loading, repos } = this.state
    if (loading === true) {
      return <p>LOADING</p>
    }

    return (
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          repos.map(({ name, owner, stargazers_count, html_url }) => (
            <li key={name} style={{ margin: "30px 20px" }}>
              <div><a href={html_url}>{name}</a></div>
              <div>@{owner.login}</div>
              <div>{stargazers_count} stars</div>
            </li>
          ))
        }
      </ul >
    );
  }
}

Grid.propTypes = {
  staticContext: PropTypes.object,
  init: PropTypes.func,
  match: PropTypes.any
};

export default Grid;