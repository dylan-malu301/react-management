import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './store'
import LoadComponent from './components/LoadComponent'
const RootRouter = LoadComponent(() => import('./router/RootRouter'))
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    )
  }
}

