export const isHasAuth = () => {
  return window.sessionStorage.getItem('token')
}