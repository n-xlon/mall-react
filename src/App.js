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
    const doc = document.documentElement
    if (/iPhone|Android/.test(navigator.appVersion)) {
      const changeFontSize = () => {
        let rem = 100 / 750
        doc.style.fontSize = rem * 100 + 'vw'
      }
      changeFontSize()
      window.addEventListener('resize', changeFontSize)
    } else {
      doc.style.fontSize = '54px'
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
