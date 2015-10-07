import React, { Component, PropTypes } from 'react';
import { createStore, compose, combineReducers } from 'redux';
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import createHistory from 'history/lib/createBrowserHistory';

import App from './components/app';
import NoMatch from './components/no-match';
import Home from './components/home';
import { cardsReducer } from './reducers/cards-reducer';
import { cardsChanged } from './actions/cards-actions';
import { Cards } from './collections';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

import './styles/app.css';

const reducer = combineReducers({
  cards: cardsReducer,
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({ createHistory }),
  devTools()
)(createStore)(reducer);

// TODO: move closer to collection definition
Meteor.startup(() => {
  if (Meteor.isClient) {
    trackCollection(Cards, (data) => {
      store.dispatch(cardsChanged(data));
    });
  }
});

class ReduxRouterWrapper extends Component {
  render() {
    return (
      <ReduxRouter>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="*" component={NoMatch}/>
        </Route>
      </ReduxRouter>
    )
  }
}

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          { () => <ReduxRouterWrapper /> }
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

React.render(<Root />, document.getElementById('root'));
