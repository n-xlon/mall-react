import React, { Component } from 'react';
import RouterMap from './router/index'
// import nav from "./components/common/nav";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    console.log(this.props)
  }
  render() {
    return (
        <div className='contain'>
          <RouterMap />
        </div>
    );
  }
}

export default App;
