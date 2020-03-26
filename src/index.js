import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';
import List from './list';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/list' component={List} />
        </div>
      </BrowserRouter>
    );
  }
  // componentDidMount() {
  //   axios.get('/react/api/header.json').then(res => {
  //     console.log(res.data);
  //   });
  // }
}

ReactDOM.render(<App />, document.getElementById('root'));
