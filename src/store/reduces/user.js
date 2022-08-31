import {
  SET_TOKEN,
  UNSET_TOKEN,
  SET_ACTIVE_MENU,
  SET_TAB_LIST
} from '../constant'
const initState = {
  token: window.sessionStorage.getItem('token'),
  currentPath: window.sessionStorage.getItem('currentPath'),
  tabs: JSON.parse(window.sessionStorage.getItem('tabs')) || []
}
export default function loginReduce (prevState = initState, action) {
  const {data, type} = action
  switch (type) {
    case SET_TOKEN:
      window.sessionStorage.setItem('token', data)
      return Object.assign({}, prevState, {token: data})
    case UNSET_TOKEN:
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('tabs')
      return Object.assign({}, prevState, {token: ''})  
    case SET_ACTIVE_MENU:
      window.sessionStorage.setItem('currentPath', data)
      return Object.assign({}, prevState, {currentPath: data})
    case SET_TAB_LIST:
      window.sessionStorage.setItem('tabs', JSON.stringify(data))
      return {
        ...prevState,
        tabs: data
      }
    default:
      return prevState
  }
}
