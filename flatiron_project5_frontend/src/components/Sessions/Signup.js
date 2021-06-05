import React from 'react'
import {useSelector} from 'react-redux'
import Snackbar from './Snackbar'
import TextFieldsForm from './TextFieldsForm'

export const Signup = () => {
  const user = useSelector(state => state.user)
  console.log("Signup user:", user)
  return (
    <div>
      {(user && user.message) ? <Snackbar message={user.message} severity="error" /> : <></>}
      <TextFieldsForm button="Sign Up" color="red" />
    </div>
  )
}

export default Signup