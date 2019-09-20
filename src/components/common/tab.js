import React, { Component } from 'react'

const tabList = [
  {text: 'Tab1'},
  {text: 'Tab2'},
  {text: 'Tab3'},
  {text: 'Tab4'},
  {text: 'Tab5'}
]

class Tab extends Component {
  // constructor(props) {
  //   super(props)
  //   // this.tabIndex = 0
  // }

  changeTabIndex = (index) => {
    this.props.changeTabIndex(index)
  }

  render() {
    return (
      <div className='Tab'>
        <div className='bg' style={{'width': `${tabList.length * 1.5}rem`}}>{
          tabList.map((v, index) => (
            <a
              key={index}
              href="javascript:void(0)"
              className={this.props.tabIndex === index ? 'tab-list active' : 'tab-list'}
              onClick={() => (this.changeTabIndex(index))}
            >{v.text}</a>
          ))
        }</div>
      </div>
    )
  }
}

export default Tab
