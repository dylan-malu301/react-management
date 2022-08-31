import React, { Component } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Loadable from 'react-loadable'
class LoadPage extends Component {
  UNSAFE_componentWillMount () {
    NProgress.start()
  }
  componentWillUnmount () {
    NProgress.done()
  }
  render() {
    return (
      <div></div>
    )
  }
}
const LoadComponent = (conponent) => {
  return Loadable({
    loader: conponent,
    loading: () => <LoadPage/>
  })
}
export default LoadComponent
