import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';

@connect(state => ({ routerState: state.router }))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      return React.addons.cloneWithProps(child, {
        dispatch: this.props.dispatch
      })
    }.bind(this));
  }

  render() {   

    return (
      <div>
          <AppBar title="Roster" />
          { this.renderChildren() }
      </div>
    );
  }
}
