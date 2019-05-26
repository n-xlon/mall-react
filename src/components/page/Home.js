import React, { Component } from 'react'
import {store} from "../../store";
import Nav from '../common/nav'
import Tab from '../common/tab'

const swiftImgs = [
  { img: require('../../static/images/img1.jpg'), title: '' },
  { img: require('../../static/images/img2.jpg'), title: '' },
  { img: require('../../static/images/img3.jpg'), title: '' }
]

const detailList = ['item1', 'item2', 'item3', 'item4', 'item5']

const goodsList = [
  { img: '', title: '标题1标题1标题1' },
  { img: '', title: '标题2' },
  { img: '', title: '标题3' },
  { img: '', title: '标题4' },
  { img: '', title: '标题5' },
  { img: '', title: '标题6' },
  { img: '', title: '标题7' },
  { img: '', title: '标题8' }
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.tabIndex = 0
    this.state = {
      imgIndex: 0,
      rowImgTimer: 3000,
      isShowImg: true,
      showMoreList: false,
      isScrolling: false
    }
    this.hotGoodsList = [
      {img: 'https://img10.joybuy.com/cms/s200x200_jfs/t16258/331/459606767/84159/426a6334/5a3232ddN20e51799.jpg.dpg', text: '商品名商品名商品名', label: ''},
      {img: 'https://img10.joybuy.com/cms/s200x200_jfs/t17935/117/1537625558/101968/d1c677c7/5acf2373N68e34e7f.jpg.dpg', text: '商品名', label: ''},
      {img: '', text: '商品名', label: ''},
      {img: '', text: '商品名', label: ''}
    ]
  }

  // 组件挂载完毕
  componentDidMount() {
    let index = this.state.imgIndex
    this.timer = setInterval(() => {
      this.setState({isShowImg: false})
      index++
      if (index >= swiftImgs.length) {
        index = 0
      }
      this.setState({
        imgIndex: index
      })
      setTimeout(() => {
        this.setState({isShowImg: true})
      }, 50)
    }, this.state.rowImgTimer)

    document.addEventListener('scroll', this.changeScrollType)
  }

  // 组件将解除挂载时
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  getDetailList = (e) => {
    e.stopPropagation()
    this.setState({showMoreList: !this.state.showMoreList})
  }

  clearModal = (e) => {
    console.log(e.currentTarget)
    this.setState({showMoreList: false})
  }

  changeLabel = (e) => {
    e.stopPropagation()
  }

  changeCurrentTabIndex = (index) => {
    this.tabIndex = index
  }

  changeScrollType = () => {
    let scrollT = document.documentElement.scrollTop || document.querySelector('body').scrollTop
    if (scrollT === 0 && this.state.isScrolling) {
      this.setState({isScrolling: false})
    } else if (scrollT > 0 && !this.state.isScrolling) {
      this.setState({isScrolling: true})
    }
  }

  // 返回到用户界面
  toLogin () {
    console.log(this.props.history)
    if (!store.state.isLogin) this.props.history.push('/user')
  }

  returnTop = () => {
    document.documentElement.scrollTop = document.querySelector('body').scrollTop = 0
  }

  render() {
    return (
      <div className='content' onClick={(e) => (this.clearModal(e))}>
        <div className='header' style={{'background': this.state.isScrolling ? '#fb3925' : ''}}>
          <i className='iconfont icon-gengduo-2 more-list' onClick={(e) => (this.getDetailList(e))}></i>
          <span>Header</span>
          <i className='iconfont icon-denglu login-btn' onClick={this.toLogin}></i>
        </div>
        <div className='swift-img'>{
          this.state.isShowImg ?
            <div className='showImg'>
              <img src={swiftImgs[this.state.imgIndex].img} alt={swiftImgs[this.state.imgIndex].title}/>
            </div>
          : ''
          }
          <div className='imgPos'>{
            swiftImgs.map((it, index) => (
              <span key={index} className={this.state.imgIndex === index ? 'pos active' : 'pos'}></span>
            ))
          }</div>
        </div>
        <div className='content-item'>
          <Tab changeTabIndex={(index) => (this.changeCurrentTabIndex(index))} tabIndex={this.tabIndex}></Tab>
          <div className='goods-list'>
            {
              goodsList.map((it, index) => (
                <div key={index} className='goods-bg'>
                  <img src={it.img} alt=''/>
                  <span className='title'>{it.title}</span>
                </div>
              ))
            }
          </div>
          <div className='activity-goods'>
            <div className='label'>商品类别</div>
            <div className='content'></div>
          </div>
          <div className='hot-goods-list'>
            <div className='label'>热门商品</div>
            <div className='content'>
              {
                this.hotGoodsList.map((v, index) => (
                  <div className='list-bg' key={index}>
                    <div className='image'><img src={v.img} alt={v.text}/></div>
                    <span className='desc'>{v.text}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='more-cont'
             style={{'left': this.state.showMoreList ? '0' : '-10.2rem'}}>
          <ul className='ct'>{
            detailList.map((it, index) => (
              <li className='list' key={index} onClick={(e) => (this.changeLabel(e))}>{it}</li>
            ))
          }</ul>
        </div>
        {
          this.state.isScrolling ? (
            <div
              className='returnToTop'
              onClick={() => this.returnTop()}
            >
              <span className='iconfont icon-huidaodingbu'></span>
            </div>
          ) : ''
        }

      </div>
    )
  }
}

export default Nav(Home)