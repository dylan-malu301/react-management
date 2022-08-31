import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {unsetTokenAction} from '../../store/actions/user'
import './index.less'

class HeaderBar extends Component {

  logOut = () => {
    this.props.unsetToken()
    window.location.reload();
  }

  render() {
    return (
      <div className='header-bar'>
        <div className='logo'></div>
        <div onClick={this.logOut} style={{color: '#fff'}}>{this.props.user.token ? '退出登录' : ''}</div>
      </div>
    )
  }
}
export default connect(
  state => ({
    user: state.user
  }),
  {
    unsetToken: unsetTokenAction
  }
)(withRouter(HeaderBar))
