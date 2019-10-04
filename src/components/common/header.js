import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    hasBack: true,
    headerName: '',
    backBg: false,
    isFixed: false,
    backCallback: () => {}
  }

  static propTypes = {
    hasBack: PropTypes.bool,
    headerName: PropTypes.string,
    backBg: PropTypes.bool,
    backCallback: PropTypes.func
  }

  componentWillMount() {
    console.log(this.props.children)
  }

  routerBack = () => {
    console.log(this.props.history, 11)
    this.props.backCallback()
  }

  render() {
    return (
      <div className={this.props.isFixed ? 'common-header is_fixed' : 'common-header'}>
        {this.props.hasBack && (
          <div className={this.props.backBg ? 'common-header_back back_bg' : 'common-header_back'} onClick={this.routerBack}>
            <i className='iconfont icon-fanhui'/>
          </div>)}
        {this.props.headerName && (<div className='common-header_name'>{this.props.headerName}</div>)}
        {
          Object.prototype.toString.call(this.props.children) === '[object Array]' ?
            this.props.children.map(child => child) :
            this.props.children
        }
      </div>
    )
  }
}