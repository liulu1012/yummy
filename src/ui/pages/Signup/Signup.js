import React from 'react'
import { Icon } from 'antd';
import {Link} from 'react-router-dom'


class Signup extends React.Component{
  render(){
    return(
      <div className='signup'>
      	<div className='signup-top'>   		
		      <Icon type='bars' />
		      <span>signup</span>
		      <Icon type='bars' />
      	</div>
      	<div className='signup-botm'>     		
	        <h1>注册</h1>
	        <h3>连接一个个小而确定的幸福</h3>
	        <form className='signup-form'>
	        	<div>	
	        		<input type="text" placeholder='用户名'/>
	        	</div>
	        	<div>      		
	        		<input type="text" placeholder='Email'/>
	        	</div>
	        	<div>       		
	        		<input type="password" placeholder='密码'/>
	        	</div>
	        	<div>      		
	        		<input type="password" placeholder='再输入一遍'/>
	        	</div>
	        	<button type='submit'>注册</button>
	        </form> 
					<Link to='/loginin'>已有账号？点此登录</Link>
      	</div>
      </div>
    )
  }
}

export default Signup
