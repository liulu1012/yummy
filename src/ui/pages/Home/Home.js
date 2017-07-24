import React from 'react'
import yummy from '../../../ui/img/28445969-589_05.jpg'
import {Link} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div className='home'>
      	<img src={yummy} alt="" className='logo-yummy'/>
        <h1>吮&nbsp;指</h1>
        <h4>享受舌尖艳遇</h4>
        <div className='home_btn'>
					<Link to='/signup'>注册</Link>
					<Link to='/loginin'>登录</Link>
				</div>
      </div>
    )
  }
}

export default Home
