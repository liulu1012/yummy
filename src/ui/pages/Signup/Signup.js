import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import TitleHeader from '../../shared/TitleHeader/TitleHeader.js'
import Settings from '../../../settings'
import axios from 'axios'
import store from '../../../redux/store.js'
import {connect} from 'react-redux'

class Signup extends React.Component{
  signup = (e) => {
    e.preventDefault()
    let username = this.userNameSignup.value
    let password = this.passwordSignup.value
    let data = {username,password}
    axios.post(`${Settings.host}/user/signup`,data)
      .then(res => {
        if(res.data.username){
          console.log(res.data)
          store.dispatch({type:'AUTH_USER',username:res.data.username})
          localStorage.setItem('userId',res.data.userId)
          this.signupForm.reset()
        }
      })
      .catch(err=>{
        this.props.dispatch({type:'SHOW_ALERT',msg:err.response.data.msg})
      })
  }
  render(){
    return(
      <div className='signup'>
        <TitleHeader title ='signup'/>
        <div className='signup-content'>
          <div className='signup-hero'>
            <h1 className='title'>
              注册
            </h1>
            <p className='slogan'>
              连接小而确定的幸福
            </p>
          </div>
          <form className='signup-form' onSubmit = {this.signup}>
            <div className='signup-text-inputs'>
              <div className='signup-text-inputs-inner'>
                <input type='text' placeholder='用户名' ref={value=>this.userNameSignup=value}/>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='密码' ref={value=>this.passwordSignup=value}/>
                <input type='password' placeholder='再次输入密码'/>
              </div>
            </div>
            <div className='signup-actions'>
              <button type='sumbit'>注册</button>
            </div>
          </form>
        </div>
        <div className='signup-other-option'>
          <Link to='/login'>已有账号？点此登陆</Link>
        </div>
      </div>
    )
  }
}

export default Signup
