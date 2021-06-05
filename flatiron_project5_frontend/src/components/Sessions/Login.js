import React from 'react'
import {useSelector} from 'react-redux'
import TextFieldsForm from './TextFieldsForm'
import Snackbar from './Snackbar'

export const Login = () => {
  const user = useSelector(state => state.user)
  console.log("Login user:", user)
  return (
    <div>
      {(user && user.message) ? <Snackbar message={user.message} severity="info" /> : <></>}
      <TextFieldsForm button="Log In" color="blue" />
    </div>
  )
}

export default Login