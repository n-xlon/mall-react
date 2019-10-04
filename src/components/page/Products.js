import React, {Component} from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import ScreenGoods from './ScreenGoods'

export default class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFilterList: false,
      filterListSize: {
        width: 0,
        height: 0
      },
      productList: []
    }
    this.scrollType = false
    this.scrollT = 0
    this.products = [
      {
        img: require('../../static/images/list-img1.png'),
        title: 'Apple 苹果 iPhone Xs Max 手机 金色 全网通 256GB',
        money: '800',
        float: '00',
        oldMoney: 23.5,
        label: ['A12芯', 'ios系统', 'SSD']
      },
      {
        img: require('../../static/images/list-img1.png'),
        title: 'Apple 苹果 iPhone Xs Max 手机 金色 全网通 256GB',
        money: '800',
        float: '00',
        label: ['A10芯', 'ios系统']
      },
      {
        img: require('../../static/images/list-img1.png'),
        title: 'Apple 苹果 iPhone Xs Max 手机 金色 全网通 256GB',
        money: '800',
        float: '00',
        label: ['A10芯', 'ios系统']
      },
      {
        img: require('../../static/images/list-img1.png'),
        title: 'Apple 苹果 iPhone Xs Max 手机 金色 全网通 256GB',
        money: '800',
        float: '00',
        label: ['A10芯', 'ios系统']
      },
      {
        img: require('../../static/images/list-img1.png'),
        title: 'Apple 苹果 iPhone Xs Max 手机 金色 全网通 256GB',
        money: '800',
        float: '00',
        label: ['A10芯', 'ios系统']
      }
    ]
  }

  static defaultProps = {
    searchContent: ''
  }

  static propTypes = {
    searchContent: PropTypes.string
  }

  componentWillMount() {
    this.searchProducts()
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scroll = document.documentElement.scrollTop
      if (scroll > 0) {
        if (!this.scrollType) {
          this.scrollType = true
          this.props.scrollEvent(true)
        }
      } else {
        if (this.scrollType) {
          this.scrollType = false
          this.props.scrollEvent(false)
        }
      }
      this.scrollT = scroll
    })
    document.documentElement.scrollTop = this.props.scrollT
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.searchContent !== this.props.searchContent) {
      console.log(prevProps.searchContent, this.props.searchContent)
      this.searchProducts()
    }
  }

  searchProducts = () => {
    const regExp = new RegExp(this.props.searchContent, 'i')
    const arr = this.products.filter(it => regExp.test(it.title))
    console.log(regExp, arr, this.products)
    this.setState({productList: arr})
  }

  filterGoodsList = () => {
    let size = !this.state.showFilterList ? {
      width: '90%',
      height: '94%'
    } : {width: 0, height: 0}
    this.setState({showFilterList: !this.state.showFilterList, filterListSize: size})
  }

  closeGoodFilter = () => {
    this.setState({showFilterList: false, filterListSize: {width: 0, height: 0}})
  }

  screenConditions = (data) => {
    console.log(data)
  }

  routerToDetails = () => {
    this.props.history.push({
      pathname: '/details',
      parmas: {
        path: this.props.location.pathname,
        cont: this.props.searchContent,
        scrollT: this.scrollT
      }
    })
  }

  render() {
    return (
      <div className='products-list'>
        <div className='filter-goods'>
          <span className='screening' onClick={this.filterGoodsList}>筛选</span>
        </div>
        <div className='content'>
          {
            this.state.productList.map((res, index) => (
              <div onClick={this.routerToDetails}
                className='product-list_item'
                    key={index}>
                <div className='list'>
                  <div className='product-img'>
                    <img className='img' src={res.img} alt="商品"/>
                  </div>
                  <div className='desc'>
                    <p className='title'>{res.title}</p>
                    <div className='labels'>
                      {
                        res.label && res.label.map((v, idx) => (
                          <span className='item' key={idx}>{v}</span>
                        ))
                      }
                    </div>
                    <p className='money'>
                      <span className='font'>¥{res.money}</span>
                      <span>.{res.float}</span>
                      {
                        'oldMoney' in res ? (
                          <span className='old'>{res.oldMoney}</span>
                        ) : null
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className='filter-details' style={this.state.filterListSize}>
          <div style={this.state.showFilterList ? {opacity: 1, height: '100%'} : {opacity: 0}}>
            <ScreenGoods closeGoodFilter={this.closeGoodFilter} screenConditions={this.screenConditions}/>
          </div>
        </div>
      </div>
    )
  }
}