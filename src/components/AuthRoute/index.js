import React from 'react'
import {connect} from 'react-redux'
import {setActiveMenuAction, setTabListAction} from '../../store/actions/user'

class AuthRoute extends React.Component{
  constructor() {
    super(...arguments)
    if (this.props.cacheLifecycles) {
      this.props.cacheLifecycles.didRecover(this.componentDidRecover)
    }
  }
  componentDidMount() {
    this.setInfo()
  }
  setInfo = () => {
    const {pathname} = this.props.history.location
    const {tabs, title, path, setActiveMenu, setTabList} = this.props
    document.title = title
    const hasRouter = tabs.find(item => item.path === pathname)
    setActiveMenu(pathname)
    if (!hasRouter && title) {
      tabs.push({path, title})
      setTabList(tabs)
    }
  }
  componentDidRecover = () => {
    this.setInfo()
  }
  render() {
    const {Component, ...rest} = this.props
    return (
      <Component {...rest}/>
    )
  }
}

export default connect(
  state => ({
    tabs: state.user.tabs
  }),
  {
    setActiveMenu: setActiveMenuAction,
    setTabList: setTabListAction
  }
)(AuthRoute)