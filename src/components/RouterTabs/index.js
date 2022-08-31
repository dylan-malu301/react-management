import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setTabListAction} from '../../store/actions/user'
import {baseRouters} from '../../router/baseRouter'
import {Tabs} from 'antd'
const {TabPane} = Tabs

const mapStateToProps = (state) => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
  setTabList: tabs => dispatch(setTabListAction(tabs))
})
function RouterTabs({user, history, setTabList}) {
  const {tabs, currentPath} = user
  const tabChange = (key) => {
    history.push({pathname: key})
  }
  const onEdit = (targetKey, action) => {
    action === 'remove' && remove(targetKey)
  }
  const remove = (targetKey) => {
    let toPath = ''
    let tabList = [...tabs]
    tabList.forEach((item, index) => {
      if (item.path === targetKey) {
        tabList.splice(index, 1)
      }
      if (currentPath === targetKey) {
        if (tabList.length) {
          toPath = tabList[tabList.length - 1].path
        } else {
          toPath = '/Home'
          tabList = baseRouters.filter(item => item.path === toPath)
        }
      }
    })
    setTabList(tabList)
    toPath && history.push({pathname: toPath})
  }
  return (
    <Tabs type='editable-card' hideAdd activeKey={user.currentPath} onChange={tabChange} onEdit={onEdit}>
      {
        tabs.map((tab) => (
          <TabPane tab={tab.title} key={tab.path} closable={true}></TabPane>
        ))
      }
    </Tabs>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RouterTabs))