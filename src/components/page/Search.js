import React, {Component} from 'react'
import Products from './Products'
import Header from '../common/header'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchContent: '',
      showSearchResult: false,
      scrollT: 0
    }
  }

  inputSearchCont (v) {
    this.setState({
      searchContent: v.target.value,
      showSearchResult: !!v.target.value.trim(),
      isScroll: false
    })
  }

  componentWillMount() {
    if (typeof this.props.location !== 'undefined') {
      const {parmas} = this.props.location
      let cont = ''
      let scrollT = this.state.scrollT
      if (parmas !== undefined) {
        if (parmas.cont) {
          cont = parmas.cont
        }
        if (parmas.scrollT) {
          scrollT = parmas.scrollT
        }
        this.setState({searchContent: cont, showSearchResult: !0, scrollT: scrollT})
      }
    }
  }


  componentDidMount() {
    // let dom = document.getElementsByClassName('sec')[0]
    // dom.focus()
    // console.log(this.props)
  }

  changeScrollType = (v) => {
    this.setState({isScroll: typeof v === 'boolean' ? v : false})
  }

  routerComeBack = () => {
    this.props.history.push('/category')
  }

  render() {
    return (
      <div className='search-page'>
        <Header backCallback={this.routerComeBack} isFixed={this.state.isScroll} backBg={this.state.isScroll}>
          <div papa="content" className='search-frame'>
            <span className='iconfont icon-sousuo search-icon'></span>
            <input className='search-item sec' type="text" autoFocus placeholder='输入商品' defaultValue={this.state.searchContent} onInput={this.inputSearchCont.bind(this)}/>
          </div>
        </Header>
        <div className='search-cont'>
          {
            this.state.showSearchResult ? (
              <Products searchContent={this.state.searchContent} scrollEvent={this.changeScrollType} scrollT={this.state.scrollT} {...this.props}/>
            ) : (
              <div className='history'>
                <span className='label'>历史搜索</span>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}