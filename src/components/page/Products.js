import React, { Component } from 'react'

export default class Products extends Component{
  constructor(props) {
    super(props)
    this.state = {
      showFilterList: false,
      filterListSize: {
        width: 0,
        height: 0
      },
      productList: [
        {img: require('../../static/images/list-img1.png'), title: 'Apple 苹果 iPhone Xs Max 手机 金色 全网通 256GB', money: '800', float: '00'},
        {img: require('../../static/images/list-img1.png'), title: 'Apple 苹果 iPhone Xs Max 手机 金色 全网通 256GB', money: '800', float: '00', label: ['A10芯', 'ios系统']}
      ]
    }
  }

  filterGoodsList = () => {
    let size = !this.state.showFilterList ? {
      width: '90%',
      height: '94%'
    } : {width: 0, height: 0}
    this.setState({showFilterList: !this.state.showFilterList, filterListSize: size})
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
              <div className='list' key={index}>
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
                  <p className='money'><span className='font'>{res.money}</span><span>.{res.float}</span></p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='filter-details' style={this.state.filterListSize}></div>
      </div>
    )
  }
}