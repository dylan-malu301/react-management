import LoginForm from './components/LoginForm'
import "./index.less"

const Login = () => {
  return (
    <div className="page-login">
      <div className="login-bg">
        <LoginForm />
      </div>
    </div>
  )
}
export default Login