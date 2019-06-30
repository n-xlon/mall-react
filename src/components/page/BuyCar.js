import React, { Component } from 'react'
import {connect} from "react-redux"
import Nav from '../common/nav'
import {createModal} from '../common/modal'
import AddressList from './Address/address_list'

class BuyCar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showAddress: false
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  changeAddress () {
    // this.setState((prevState) => ({showAddress: !prevState.showAddress}))
    createModal({ExtraComponent: AddressList, root: '.buyer'})
  }

  render() {
    return (
      <div className='buyer'>
        <div className='header'>
          {/*<i className='iconfont icon-fanhui back'></i>*/}
          我的物品
        </div>
        <div className='buyer-cont'>
          <div className='address'><i className='iconfont icon-didian01'></i><span onClick={this.changeAddress.bind(this)}>{this.props.address}</span></div>
          <span className='no-goods'>购物车空空如也...</span>
        </div>

        {
          this.state.showAddress ? (
            <div className='mask'></div>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.state)
  return {
    address: state.state.shopAddress.addr
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav(BuyCar))