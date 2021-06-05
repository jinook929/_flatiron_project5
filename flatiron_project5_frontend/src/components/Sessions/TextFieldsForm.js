// React & Redux related
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom"
import {loginUser, addUser} from '../../actions'
// Material UI related
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import {Box, Typography} from '@material-ui/core'
import MyButton from '../Home/MyButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const TextFieldsForm = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  const handleFormSubmit = e => {
    e.preventDefault()
    if(email && password) {
      const user = {email, password}
      if(e.target.children[0].children[2].innerText === "LOG IN") {
        dispatch(loginUser(user, history))
      } else {
        dispatch(addUser(user, history))
      }
      setEmail("")
      setPassword("")
    }
  }
  
  return (
    <Grid container>
      <form onSubmit={handleFormSubmit} className={classes.root} noValidate autoComplete="off" style={{marginLeft: "auto", marginRight: "auto", marginTop: "20%"}}>
        <div>
          <TextField
            required
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
          <MyButton variant="contained" color={props.color} style={{height: "56px"}}>{props.button}</MyButton>
        </div>
        <Box textAlign="center">
          <Typography >
            Boxes with ( * ) are required fields.
          </Typography>
        </Box>
      </form>
    </Grid>
  )
}

export default TextFieldsForm