import React, { Component } from 'react'
import {Layout} from 'antd'
import SideBar from '../SideBar'
import HeaderBar from '../HeaderBar'
import Router from '../../router'
import RouterTabs from '../RouterTabs'
import './index.less'
const {Sider, Header, Content} = Layout

class Containter extends Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div className='layout-page'>
        <Layout>
          <Header>
            <HeaderBar />
          </Header>
          <Layout>  
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.toggle}
              theme="light"
            >
              <SideBar />
            </Sider>
            <Content>
              <RouterTabs />
              <div className='main-page-wrap'>
                <Router />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Containter