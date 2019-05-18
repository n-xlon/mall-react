import React, { Component } from 'react'
import Nav from '../common/nav'

class BuyCar extends Component {
  render() {
    return (
      <div className='buyer'>
        <div className='header'>
          {/*<i className='iconfont icon-fanhui back'></i>*/}
          我的物品
        </div>
        <div className='buyer-cont'>
          <span className='no-goods'>购物车空空如也...</span>
        </div>
      </div>
    )
  }
}

export default Nav(BuyCar)