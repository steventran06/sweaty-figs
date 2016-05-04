import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { 
  RouteHandler, 
  Router, 
  Route, 
  Link, 
  browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Nav from './NavBar/Nav';
import Routes from '../config/Routes';
import configStore from '../redux/store/configStore.js';

// Exporting store so redux actions can use it to dispatch!!!
export const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

export class App extends React.Component {

  // static now works with stage-0, passing all PropTypes down to children
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <Nav />
          <Router history={history} routes={Routes} />
        </div>
      </Provider>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));

