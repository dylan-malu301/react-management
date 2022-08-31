import React, { Component } from 'react'
import md5 from 'md5-js'
import {connect} from 'react-redux'
import {Input, Button, message} from 'antd'
import {setTokenAction} from '../../../../store/actions/user'
import {login} from '../../../../apis/index'
import './index.less'

class LoginForm extends Component {
  state = {
    account: '',
    password: ''
  }
  userNameChange = (e) => {
    this.setState({
      account: e.target.value
    })
  }
  passwordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handelSubmit = async () => {
    const {account: username, password} = this.state
    const params = {
      username,
      password: md5(password)
    }
    const {data} = await login(params)
    const result = data.data
    if (result.statu === 200) {
      this.props.setToken(result.username)
    } else {
      message.error(result.message)
    }
  }
  
  render() {
    const {account, password} = this.state
    return (
      <div className="login-form">
        <h2>后台管理系统</h2>
        <div className='form-bxo'>
          <div className='form-item-box'>
            <span>账号</span>
            <Input onChange={e => this.userNameChange(e)}/>
          </div>
          <div className='form-item-box'>
            <span>密码</span>
            <Input.Password onChange={e => this.passwordChange(e)}/>
          </div>
          <Button type="primary" disabled={!(account && password)} onClick={this.handelSubmit}>登录</Button>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    user: state.user
  }),
  {
    setToken: setTokenAction
  }
)(LoginForm)