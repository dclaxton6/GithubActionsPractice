import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import AppRoutes from './appRoutes';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Router>
          <Routes>
            {AppRoutes.map((route, index) => {
              const {element, ...rest} = route;
              return <Route key={index} {...rest} element={element} />
            })}
          </Routes>
          </Router>
      </Layout>
    );
  }
}