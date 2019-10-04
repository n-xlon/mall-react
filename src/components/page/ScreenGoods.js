import React, { Component } from 'react'

class ScreenGoods extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenItems: [
        {
          title: '品牌',
          englishName: 'brand',
          content: ['Apple', '华为', '小米', 'vivo', 'oppo']
        }
      ],
      selects: {
        brand: -1
      }
    }
  }
  componentWillMount() {
    // ...todo
  }
  componentDidMount() {
    console.log(this.state.screenItems)
  }

  changeBrand = (index) => {
    const v = this.state.selects
    v.brand = index
    // this.state.selects.brand = index
    this.setState({selects: v})
  }

  cancelEvent = () => {
    console.log('cancel')
    this.props.closeGoodFilter()
  }

  okEvent = () => {
    this.props.screenConditions(this.state.selects)
    this.props.closeGoodFilter()
  }

  render() {
    return (
      <div className='screen-contain'>
        {
          this.state.screenItems.map((it, index) => (
            <div className='screen-contain_label' key={index}>
              <div className='screen-contain_title'>{it.title}<span>{it.englishName}</span></div>
              <div className='screen-contail_brand-bg'>
                {
                  it.content.map((n, index) => (
                    <div className={index === this.state.selects.brand ? 'screen-contain_brand-name actived' : 'screen-contain_brand-name'} key={index} onClick={() => this.changeBrand(index)}>{n}</div>
                  ))
                }
              </div>
            </div>
          ))
        }
        <div className='screen-footer'>
          <div className='screen-footer_cancel' onClick={() => this.cancelEvent()}>取消</div>
          <div className='screen-footer_ok' onClick={() => this.okEvent()}>确认</div>
        </div>
      </div>
    )
  }
}

export default ScreenGoods