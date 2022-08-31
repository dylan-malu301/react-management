import React, { Component } from 'react'
import MenuItem from '../MenuItem'
import {baseRouters as menuList} from '../../router/baseRouter'
import './index.less'
export default class SideBar extends Component {
  render() {
    return (
      <div className='side-bar'>
        <MenuItem menu={menuList.filter(item => item.title)}/>
      </div>
    )
  }
}
