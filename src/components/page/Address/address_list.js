import React, {Component} from 'react'
import {connect} from "react-redux";
import {changeShopAddress} from "../../../store/actions";

class AddressList extends Component{
  constructor (props) {
    super(props)
    this.addressList = [
      { addr: '地址1', index: 0 },
      { addr: '地址2', index: 1 },
      { addr: '地址3', index: 2 }
    ]
    this.state = {
      addrIndex: 0
    }
  }

  componentDidMount() {
    let {shopAddress} = this.props
    this.setState({addrIndex: shopAddress.index})
  }

  changeAddr = (index) => {
    this.setState({addrIndex: index})
  }

  selectedAddress = () => {
    this.props.changeShopAddress({
      addr: this.addressList[this.state.addrIndex].addr,
      index: this.state.addrIndex
    })
    this.props.closeModal()
  }

  render() {
    let { addrIndex } = this.state
    return (
      <div className='addrBg'>
        <div className='title'>选择收获地址</div>
        <div className='addressContent'>
          {
            this.addressList.map((it, index) => (
              <div className='addressList' key={index}>
                <i className={it.index !== addrIndex ? 'iconfont icon-dui defaultSelect' : 'iconfont icon-dui defaultSelect active'} onClick={() => this.changeAddr(index)}></i>
                <span className='addr'>{it.addr}</span>
                <i className='iconfont icon-xiugai fixAddr'></i>
              </div>
            ))
          }
        </div>
        <div className='selected' onClick={this.selectedAddress}>确认</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shopAddress: state.state.shopAddress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeShopAddress: ({addr, index}) => {
      dispatch(changeShopAddress({addr, index}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)