import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setActiveMenuAction} from '../../store/actions/user'
import {Menu} from 'antd'


class MenuItem extends Component {
  componentWillMount() {
    // const {pathname} = this.props.history.location
    // this.props.setActiveMenu(pathname)
  }
  renderSubMenu = ({title, Icon, path, children}) => {
    return (
      <Menu.SubMenu
        key={path}
        title={
          <span>
            {Icon && <Icon />}
            <span>{title}</span>
          </span>    
        }
      >
        {
          children && children.map((item) => {
            return item.children && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }
  renderMenuItem = ({title, Icon, path}) => {
    return (
      <Menu.Item key={path}>
        <Link to={path}>
          {Icon && <Icon />}
          <span>{title}</span>
        </Link>
      </Menu.Item> 
    )
  }

  render() {
    return (
      <Menu
        mode='inline'
        selectedKeys={this.props.user.currentPath}
      >
        {
          this.props.menu && this.props.menu.map((item) => {
            return item.children && item.children.length ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu>
    )
  }
}
export default connect(
  state => ({
    user: state.user
  }),
  {
    setActiveMenu: setActiveMenuAction
  }
)(MenuItem)