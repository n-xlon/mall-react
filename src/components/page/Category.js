import React, { Component } from 'react'
// import {View, Text} from 'react-native'
import { Route } from 'react-router-dom'
import Nav from '../common/nav'
import Search from "./Search";

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLabelIndex: 0,
      goodsDetails: [
        {
          title: '热门商品',
          cont: [
            {img: require('../../static/images/pc.png'), text: '游戏本'},
            {img: require('../../static/images/pc.png'), text: '移动硬盘'},
            {img: require('../../static/images/pc.png'), text: '超级本'},
            {img: require('../../static/images/pc.png'), text: '超级本'},
            {img: require('../../static/images/pc.png'), text: '超级本'},
            {img: require('../../static/images/pc.png'), text: '超级本'},
            {img: require('../../static/images/pc.png'), text: '超级本'},
            {img: require('../../static/images/pc.png'), text: '超级本'},
            {img: require('../../static/images/pc.png'), text: '超级本'}
          ]
        }
      ]
    }
    this.classifyList = [
      {id: 1, text: '数码设备'},
      {id: 2, text: '生活百货'},
      {id: 3, text: '书刊杂志'},
      {id: 4, text: '电脑办公'}
    ]
  }

  componentWillMount() {
    this.classifyList.push({id: 5, text: '汽车生活'})
    console.log(this.props)
  }

  historyBack = () => {
    window.history.back()
  }

  changeCurrentLabel = (index) => {
    this.setState({
      currentLabelIndex: index
    })
  }

  linkToSearch = () => {
    window.location.href = '/category/search'
  }

  selectGoods () {
    console.log('goods')
  }

  render() {
    return (
      <div className='goods-contains'>
        {
          this.props.location.pathname === '/category/search' ? (
            <Route path='/category/search' component={Search} />
          ) : (
            <div className='classify-goods'>
              <div className='search-header'>
                <span className='iconfont icon-fanhui back' onClick={() => this.historyBack()}></span>
                <div className='search-frame'>
                  <span className='iconfont icon-sousuo search-icon'></span>
                  <input className='search-item' type="text" placeholder='输入商品' onFocus={() => this.linkToSearch()}/>
                </div>
              </div>
              <div className='goods-list'>
                <div className='classify-goods-list'>
                  <ul className='list'>
                    {
                      this.classifyList.map((v, index) => (
                        <li
                          className={this.state.currentLabelIndex === index ? 'title active' : 'title'}
                          data-item-id={index}
                          onClick={() => this.changeCurrentLabel(index)}
                          key={index}
                        >
                          {v.text}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className='classify-goods-content'>
                  {
                    this.state.goodsDetails.map((v, index) => (
                      <div className='contain' key={index}>
                        <span className='title'>{v.title}</span>
                        {
                          v.cont.map((ct, index) => (
                            <div className='goods-item' key={index} onClick={this.selectGoods}>
                              <img src={ct.img} alt=""/>
                              <span>{ct.text}</span>
                            </div>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Nav(Category)