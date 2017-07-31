import React from 'react'
import './alert-box.css'

class AlertBox extends React.Component{
  state = {
    showAlert : true
  }
  closeAlert = () => {
    this.setState({
      showAlert:false
    })
  }
  render(){
    return(
      <div className={this.state.showAlert?"alert-box show":"alert-box"}>
        <div className='alert-content-card'>
          <div className='alert-msg'>
            报错信息
          </div>
          <div className='alert-close-button' onClick={this.closeAlert}>
            关闭
          </div>
        </div>
      </div>
    )
  }
}

export default AlertBox
