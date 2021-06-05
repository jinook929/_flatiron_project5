// React & Redux related
import React from 'react'
import {useSelector} from 'react-redux'
// Material UI related
import TextFieldsForm from './TextFieldsForm'
import Snackbar from './Snackbar'

export const Login = () => {
  const user = useSelector(state => state.user)
  return (
    <div>
      {(user && user.message) ? <Snackbar message={user.message} severity="info" /> : <></>}
      <TextFieldsForm button="Log In" color="blue" />
    </div>
  )
}

export default Login