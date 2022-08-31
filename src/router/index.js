import React, {useMemo} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {CacheRoute, CacheSwitch} from 'react-router-cache-route'
import LoadComponent from '../components/LoadComponent'
import AuthRoute from '../components/AuthRoute'
import {baseRouters} from './baseRouter'
function useRouter() {
  const routers = []
  const handleRouter = (list) => {
    list.forEach(item => {
      if (item.children?.length) {
        handleRouter(item.children)
      } else {
        if (item.title) {
          item.Component = LoadComponent(() => import(`../pages${item.path}`))
        } else {
          item.Component = Redirect
        }
        routers.push(item)
      }
    })
  }
  const routerBody = useMemo(() => {
    if (baseRouters.length) {
      handleRouter(baseRouters)
      return routers.map((item) => {
        const {path, keepAlive, Component} = item
        const RenderRoute = keepAlive ? CacheRoute : Route
        return (
          <RenderRoute
            key={path}
            exact={true}
            path={path}
            render={(props) => (
              <AuthRoute 
                {...props}
                {...item}
                Component={Component}
              />
            )}
            ></RenderRoute>
        )
      })
    }
    return null
  }, [baseRouters])
  return {routerBody}
}

const Router = () => {
  const {routerBody} = useRouter()
  return <CacheSwitch>{routerBody}</CacheSwitch>
}
export default Router