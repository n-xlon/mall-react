import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from "../../store";
import {Provider} from "react-redux";

function ModalFun(ExtraComponent, root) {
  return class Modal extends Component{
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      // console.log(this)
    }

    closeModal () {
      let node = document.querySelector('.mask-contain')
      document.querySelector(root).removeChild(node)
    }

    stopClickToParent (e) {
      e.stopPropagation()
    }

    render() {
      return (
        <div className='mask' onClick={this.closeModal.bind(this)}>
          <div className='body' onClick={this.stopClickToParent.bind(this)}>
            {
              ExtraComponent ? <ExtraComponent closeModal={this.closeModal} /> : null
            }
          </div>
        </div>
      )
    }
  }
}

function createModal({ExtraComponent, className, root}) {
  let Dom = ModalFun(ExtraComponent, root)
  let newNode = document.createElement('div')
  newNode.className = className || 'mask-contain'
  ReactDOM.render(
    <Provider store={store}>
      <Dom />
    </Provider>,
    document.querySelector(root).appendChild(newNode)
  )
}

export {
  createModal
}