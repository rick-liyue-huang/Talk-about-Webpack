import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  render() {
    return <div>hello world</div>;
  }
  componentDidMount() {
    axios.get('/react/api/header.json').then(res => {
      console.log(res.data);
    });
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
