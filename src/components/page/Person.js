import React, { Component } from 'react'
import {store} from '../../store/index'

class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'username',
      headerImg: require('../../static/images/img2.jpg'),
      showUserDetail: false
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    document.addEventListener('click', this.cancelEvent)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.cancelEvent)
  }

  cancelEvent = (e) => {
    if (!e.target.className.includes('m-list') && this.state.showUserDetail) {
      this.setState({showUserDetail: false})
    }
  }

  showUserDetails = () => {
    this.setState((prevState) => ({showUserDetail: !prevState.showUserDetail}))
  }

  render() {
    return (
      <div className='user-detail'>
        <div className='header'>
          <i className='iconfont icon-fanhui back' onClick={() => this.props.history.push('/home')}></i>
          用户
          <i className='iconfont icon-gengduo-copy m-list' onClick={this.showUserDetails}></i>
        </div>
        <div className='user-content'>
          <div className='user-header'>
            <i className='red-point'/>
            <div className='header-img'>
              <img src={this.state.headerImg} alt="头像"/>
            </div>
            <span className='name'>{store.state.user.name}</span>
            <p className='user-id'>ID:<span>1111122222</span></p>
          </div>
        </div>
        {
          this.state.showUserDetail ? (
            <div className='user-detail-list'>
              <ul className='content'>
                <li className='list'>修改收获地址</li>
                <li className='list'>修改密码</li>
              </ul>
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default UserDetail