import React, { Component } from 'react'
import {withRouter, Switch, Redirect} from 'react-router-dom'
import AuthRoute from '../../components/AuthRoute'
import LoadComponent from '../../components/LoadComponent'

const Home = LoadComponent(() => import('../Home'))
const ButtonDemo = LoadComponent(() => import('../General/Button'))
const IconDemo = LoadComponent(() => import('../General/Icon'))
class MainContent extends Component {
  render() {
    return (
      <div>
        <Switch>
          <AuthRoute exact path='/home' component={Home}/>
          <AuthRoute exact path='/home/general/button' component={ButtonDemo}/>
          <AuthRoute exact path='/home/general/icon' component={IconDemo}/>

          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}
export default withRouter(MainContent)