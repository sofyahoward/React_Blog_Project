import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/my-app">
      {/* this allows you to tell the server to serve your application from eg. www.example.com/my-app */}
       {/* The default is "/", so you dont need to set that up */}
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
