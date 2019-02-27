import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import DashboardContainer from './containers/DashboardContainer';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import QuestionContainer from './containers/QuestionContainer.jsx';
import ModalContainer from './containers/ModalContainer.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
       (
        <Component {...props} />
      ) 
    }
  />
);

class App extends Component {
  render() {
    return (
		<Provider store={store}>
      <Router>
        <React.Fragment>
          <PublicRoute exact path="/" component={DashboardContainer} />
          <PublicRoute path="/" component={ModalContainer} />
          <PublicRoute path="/question/:id" component={QuestionContainer} />
        </React.Fragment>
			{/* <DashboardContainer /> */}
      </Router>
		</Provider>
    );
  }
}

export default App;
