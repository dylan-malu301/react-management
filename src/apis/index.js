import request from "../utils/axios";
const queryTaskCont = () => (
  request({
    url: '/dataIssue/queryTaskCont',
    method: 'get'
  })
)
const login = (params) => (
  request({
    url: '/user/login',
    method: 'get',
    params
  })
)
export {
  queryTaskCont,
  login
}
