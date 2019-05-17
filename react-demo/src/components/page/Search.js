import React, {Component} from 'react'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let dom = document.getElementsByClassName('sec')[0]
    dom.focus()
    console.log(this.props)
  }

  render() {
    return (
      <div className='search-page'>
        <div className='search-header'>
          <span className='iconfont icon-fanhui back' onClick={() => this.props.history.push('/category')}></span>
          <div className='search-frame'>
            <span className='iconfont icon-sousuo search-icon'></span>
            <input className='search-item sec' type="text" placeholder='输入商品'/>
          </div>
        </div>
        <div className='search-cont'>
          <div className='history'>
            <span className='label'>历史搜索</span>
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}