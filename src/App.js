import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />

          <div className="container">
            {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
    );
  };

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => { //Viết map nhớ return về
        return (
          //Route là phần nội dung thay đổi với URL tương ứng
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return <Switch>{result}</Switch>
  }

}

export default App;




