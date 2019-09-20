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
  componentWillMount() {
    if (/iPhone|Android/.test(navigator.appVersion)) {
      const changeFontSize = () => {
        const doc = document.documentElement
        let rem = 100 / 750
        doc.style.fontSize = rem * 100 + 'vw'
      }
      changeFontSize()
      window.addEventListener('resize', changeFontSize)
    }
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
