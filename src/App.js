import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import DashboardContainer from './containers/DashboardContainer';

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<DashboardContainer />
		</Provider>
    );
  }
}

export default App;
