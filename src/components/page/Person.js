import React, { Component } from 'react'

class UserDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'username',
      headerImg: require('../../static/images/img2.jpg')
    }
  }

  componentWillMount() {
    console.log(this.props.history)
  }

  render() {
    return (
      <div className='user-detail'>
        <div className='header'>
          <i className='iconfont icon-fanhui back' onClick={() => this.props.history.push('/home')}></i>
          用户
        </div>
        <div className='user-content'>
          <div className='user-header'>
            <i className='red-point'/>
            <div className='header-img'>
              <img src={this.state.headerImg} alt="头像"/>
            </div>
            <span className='name'>{this.state.userName}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail