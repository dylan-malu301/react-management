import Containter from '../components/Containter'
import Login from '../pages/Login'
import { Spin } from "antd"
import { connect } from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import { useState, useEffect } from 'react'
const mapStateToProps = (state) => ({
  user: state.user
})
function RootRouter({user}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  if (loading)
    return (
      <Spin size="large" wrapperClassName="loading-page" tip="Loading...">
        <div className="loading-page"></div>
      </Spin>
    );
  if (!user.token) return <Login />
  return (
    <BrowserRouter>
      <Containter></Containter>
    </BrowserRouter>
  )
}
export default connect(mapStateToProps)(RootRouter)