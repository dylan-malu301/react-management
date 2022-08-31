import {
  SET_TOKEN,
  UNSET_TOKEN,
  SET_ACTIVE_MENU,
  SET_TAB_LIST
} from '../constant'
export const setTokenAction = data => ({type: SET_TOKEN, data})
export const unsetTokenAction = data => ({type: UNSET_TOKEN, data})
export const setActiveMenuAction = data => ({type: SET_ACTIVE_MENU, data})
export const setTabListAction = data => ({type: SET_TAB_LIST, data})