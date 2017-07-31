import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './login.css'
import Settings from '../../../settings.js'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component{
  login = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username,password}
    axios.post(`${Settings.host}/user/login`,data)
      .then(res => {
        console.log(res.data)
        this.props.history.push('/dashboard')
      })
      .catch(err => console.log(err.response.data.msg))
  }
  render(){
    return(
      <div>
        <TitleHeader title='login' />
        <div className='login-content'>
          <div className='login-hero'>
            <h1 className='title'>
              登陆
            </h1>
            <p className='slogan'>
              连接小而确定的幸福
            </p>
          </div>
          <form className='login-form'>
            <div className='login-text-inputs'>
              <div className='login-text-inputs-inner'>
                <input type='text' placeholder='用户名' ref={value => this.usernameInput = value}/>
                <input type='password' placeholder='密码' ref={value => this.passwordInput = value}/>
              </div>
            </div>
            <div className='login-actions'>
              <button type='sumbit'>登陆</button>
            </div>
          </form>
        </div>
        <div className='login-other-option'>
          <Link to='/signup'>没有账号？点此注册</Link>
        </div>
      </div>
    )
  }
}

export default Login
