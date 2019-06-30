import React, {Component} from 'react'
import {connect} from "react-redux";
import {changeShopAddress} from "../../../store/actions";

class AddressList extends Component{
  constructor (props) {
    super(props)
    this.state = {
      addrIndex: 0,
      addressList: [],
      editAddr: false,
      value: '',
      editIndex: 0
    }
  }

  getAddressList = () => {
    let list = [
      {addr: '地址1', index: 0},
      {addr: '地址2', index: 1},
      {addr: '地址3', index: 2}
    ]
    list.map(it => {
      it.isEdit = false
    })
    this.setState({addressList: list})
  }

  componentDidMount() {
    let {shopAddress} = this.props
    this.setState({addrIndex: shopAddress.index})
    this.getAddressList()
}

  changeAddr = (index) => {
    this.setState({addrIndex: index})
  }

  selectedAddress = () => {
    this.props.changeShopAddress({
      addr: this.state.addressList[this.state.addrIndex].addr,
      index: this.state.addrIndex
    })
    this.props.closeModal()
  }

  editAddress = (index) => {
    let addrs = this.state.addressList
    addrs.map(it => {
      if (it.index === index) {
        it.isEdit = true
      }
    })
    this.setState({addressList: addrs, editAddr: true, value: addrs[index].addr, editIndex: index})
  }

  // 保存修改过的地址
  saveEditedAddr = () => {
    let addrs = this.state.addressList
    addrs[this.state.editIndex].addr = this.state.value
    addrs[this.state.editIndex].isEdit = false
    this.setState({editAddr: false, addressList: addrs})
  }

  changeAddressValue = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
    let { addrIndex } = this.state
    return (
      <div className='addrBg'>
        <div className='title'>选择收获地址</div>
        <div className='addressContent'>
          {
            this.state.addressList.map((it, index) => (
              <div className='addressList' key={index}>
                <i className={it.index !== addrIndex ? 'iconfont icon-dui defaultSelect' : 'iconfont icon-dui defaultSelect active'} onClick={() => this.changeAddr(index)}></i>
                {
                  !it.isEdit ? (
                    <span className='addr'>{it.addr}</span>
                  ) : (
                    <input className='editAddr' value={this.state.value} autoFocus={true} type="text" onChange={this.changeAddressValue}/>
                  )
                }
                <i className={this.state.editAddr ? 'iconfont icon-xiugai fixAddr disabled' : 'iconfont icon-xiugai fixAddr'} onClick={() => this.editAddress(index)}></i>
              </div>
            ))
          }
        </div>
        {
          this.state.editAddr ? (
            <div className='save' onClick={this.saveEditedAddr}>保存</div>
          ) : (
            <div className='selected' onClick={this.selectedAddress}>确认</div>
          )
        }
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