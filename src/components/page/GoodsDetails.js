import React, { Component } from 'react'
import Header from '../common/header'

class GoodsDetails extends Component{
  constructor(props) {
    super(props)
    this.state = {
      goodsDetail: {
        goodImg: '',
        promotion: {
          isPromotion: true,
          time: 2 * 24 * 60 * 60 * 1000,
          money: [9999, 12699]
        },
        goodName: 'Apple/苹果 iPhone 11 Pro Max',
        expressFee: 0,
        place: '上海',
        content: {
          promote: '购买可得869积分',
          activity: '闲鱼回收, 焕新享优惠',
          service: ['假一赔四', '极速退款', '退货运费险', '七天无理由退换'],
          details: ''
        }
      }
    }
  }

  componentWillMount() {
    // console.log(this.props)
  }

  callbackFunc = () => {
    const { parmas } = this.props.location
    console.log(parmas)
    if (parmas && parmas.path) {
      this.props.history.push({pathname: parmas.path, parmas})
    } else {
      this.props.history.goBack()
    }
  }

  render() {
    const { goodsDetail } = this.state

    return (
      <div className='goods-details'>
        <Header backBg={true} isFixed={true} backCallback={this.callbackFunc} {...this.props}/>
        <div className='goods-details_image'><img src={goodsDetail.goodImg} alt="商品图片"/></div>
        {
          goodsDetail.promotion.isPromotion ? (
            <div className='goods-details_promotion'></div>
          ) : null
        }
        <div className='goods-details_title'>
          <div className='goods-details_title-text'>{goodsDetail.goodName}</div>
          <div className='goods-details_title-msg'>
            <div>快递:<span>&nbsp;{goodsDetail.expressFee.toFixed(2)}</span></div>
            <div>货源地:<span>{goodsDetail.place}</span></div>
          </div>
        </div>
        <div className='goods-details-footer'>
          <div className='goods-details-footer_add-shopping'><i className='iconfont icon-gouwuche'></i>加入购物车</div>
        </div>
      </div>
    )
  }
}

export default GoodsDetails