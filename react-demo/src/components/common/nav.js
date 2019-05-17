import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {utils} from "../../utils";
// import '../../style/nav.css'

function nav(OtherComponent) {
  return class Nav extends Component {
    constructor(props) {
      super(props)
      // console.log(this.props)
      this.routeList = ['/home', '/category', '/buyCar']
      this.state = {
        name: 'v',
        currentPath: '/home',
        toolbar: {
          'home': {img: 'icon-shouye-', text: '首页', path: '/home'},
          'category': {img: 'icon-fenlei', text: '分类', path: '/category'},
          'buyer': {img: 'icon-gouwuche', text: '购物车', path: '/buyCar'},
          'user': {img: 'icon-yonghu', text: '用户', path: '/user'}
        }
      }
    }

    // changeRoute = (it) => {
    //   console.log(it.path)
    //   this.setState({
    //     currentPath: it.path
    //   })
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    // }

    componentWillMount() {
      let msg = JSON.parse(utils.getCookie({key: 'userLogin'}))
      Object.keys(this.state.toolbar).map(it => {
        if (it === 'user') {
          this.state.toolbar[it].text = (msg == null || !msg.name) ? '未登录' : '用户'
        }
      })
    }

    render() {
      return (
        <div className='root-contain'>
          <OtherComponent {...this.props}/>
          {
            this.routeList.includes(this.props.location.pathname) ? (
              <div className='nav-toolbar'>{
                Object.keys(this.state.toolbar).map((key, index) => (
                  <Link to={this.state.toolbar[key].path}
                        className={this.props.location.pathname === this.state.toolbar[key].path ? 'item-list active' : 'item-list'}
                        key={index}
                  >
                    <i className={`iconfont ${this.state.toolbar[key].img}`}></i>
                    <span>{this.state.toolbar[key].text}</span>
                  </Link>
                ))
              }</div>
            ) : ''
          }
        </div>
      );
    }
  }
}

export default nav