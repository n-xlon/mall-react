import React, {Component} from 'react'
import {utils} from "../../utils/index.js"
import Nav from '../common/nav'

class User extends Component {
  constructor(props) {
    super(props)
    this.storge = {
      setCookie: (key, value, time) => utils.setCookie(key, value, time),
      getCookie: ({key}) => utils.getCookie({key})
    }
    this.state = {
      labelIndex: -1,
      showPassword: false,
      formList: [
        {key: 'name', type: 'text', text: '用户名', placeContent: '用户名/邮箱/手机号', value: ''},
        {key: 'password', type: 'password', text: 'password', placeContent: '密码', value: ''}
      ]
    }
  }

  focusLabel = (index) => {
    if (this.state.labelIndex === index) return
    this.setState({labelIndex: index})
  }

  changeValue = (index, e) => {
    console.log(index, e.target.value)
    let ct = this.state.formList
    ct[index].value = e.target.value
    this.setState({formList: ct})
  }

  userLogin = () => {
    let obj = {}
    this.state.formList.forEach(it => {
      obj[it.key] = it.value.trim()
    })
    this.storge.setCookie('userLogin', JSON.stringify(obj), 2 * 60 * 60 * 1000)
    this.props.history.push('/user-detail')
  }

  passwordDetail (e) {
    // e.stopPropagation()
    // e.preventDefault = false
    this.setState({showPassword: !this.state.showPassword})
  }

  componentWillMount() {
    let ct = this.storge.getCookie({key: 'userLogin'})
    ct && this.props.history.push('/user-detail')
    console.log(this.storge.getCookie({key: 'userLogin'}))
  }

  render() {
    return (
      <div className='login '>
        <div className='header'>
          <i className='iconfont icon-fanhui back' onClick={() => window.history.back()}></i>
          <span>用户登录</span>
        </div>
        <div className='login-cont'>
          {
            this.state.formList.map((v, index) => (
              <label className={v.value ? 'form-list isShow' : 'form-list'} key={index}>
                <p
                  className={this.state.labelIndex === index ? 'list-name active' : 'list-name'}>{v.text}</p>
                <input className='input-user-name' type={v.key === 'password' ? (this.state.showPassword ? 'text' : v.type) : v.type} placeholder={v.placeContent}
                       onFocus={() => this.focusLabel(index)}
                       onChange={(e) => this.changeValue(index, e)}/>
                {
                  v.type === 'password' ? (
                    <i className={this.state.showPassword ? 'iconfont icon-chakan' : 'iconfont icon-biyan'} onClick={(e) => this.passwordDetail(e)}></i>
                  ) : ''
                }
              </label>
            ))
          }
          <div className='btn user-login' onClick={() => this.userLogin()}>登录</div>
          <div className='btn user-register'>注册</div>
        </div>
      </div>
    )
  }
}

export default Nav(User)