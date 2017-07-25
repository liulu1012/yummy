import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

class Loginin extends React.Component{
	render(){
		return(
			<div className='loginin'>
				<div className='loginin-top'>   		
		      <Icon type='bars' />
		      <span>login</span>
		      <Icon type='bars' />
      	</div>
      	<div className='loginin-botm'>     		
	        <h1>登录</h1>
	        <h3>连接一个个小而确定的幸福</h3>
	        <form className='loginin-form'>
	        	<div>	
	        		<input type="text" placeholder='用户名'/>
	        	</div>
	        	<div>       		
	        		<input type="password" placeholder='密码'/>
	        	</div>
	        	<button type='submit'>登录</button>
	        </form> 
					<Link to='/signup'>没有账号？点此注册</Link>
      	</div>
			</div>
		)
	}
}

export default Loginin