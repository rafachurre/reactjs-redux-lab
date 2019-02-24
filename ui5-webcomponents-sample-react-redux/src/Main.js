import React, { Component } from 'react';
//Components
import App from './App'
//Redux
import { Provider } from 'react-redux'
import store from './redux/store'

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <App/>
        </div>
      </Provider>
    );
  }
}

export default Main;