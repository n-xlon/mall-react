import React, {Component} from 'react'
import Products from './Products'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchContent: '',
      showSearchResult: false
    }
  }

  inputSearchCont (v) {
    console.log(!!v.target.value.trim())
    this.setState({
      showSearchResult: !!v.target.value.trim()
    })
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
            <input className='search-item sec' type="text" placeholder='输入商品' onInput={this.inputSearchCont.bind(this)}/>
          </div>
        </div>
        <div className='search-cont'>
          {
            this.state.showSearchResult ? (
              <Products></Products>
            ) : (
              <div className='history'>
                <span className='label'>历史搜索</span>
                <div></div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}