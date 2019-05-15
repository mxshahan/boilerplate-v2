import React from 'react';
import { connect } from 'react-redux';

class View extends React.Component {


  render() {
    return (
      <div className="bg-nav fixed-top" id="header">
        <h1>Navbar</h1>
      </div>
    )
  }
}

const mapState = (state) => ({
  token: state.auth.token
})

const mapDispatch = dispatch => ({
})

export const Header = connect(mapState, mapDispatch)(View);