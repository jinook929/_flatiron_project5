// React related
import React from 'react'
import {Route, Switch, useHistory} from 'react-router-dom'
// Redux related
import {connect} from 'react-redux'
// Material UI related
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper, Typography, Box} from '@material-ui/core'
// From files
import Signup from '../Sessions/Signup'
import Login from '../Sessions/Login'
import MyButton from './MyButton'
import RuleLists from './RuleLists'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: '20px',
    maxWidth: 600,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

export const Home = props => {
  const classes = useStyles()
  const history = useHistory()

  const handleButtonClick = route => {
    history.push(route)
  }

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <div className={classes.image}>
            <img className={classes.img} alt="complex" src="https://cdn.dribbble.com/users/1778225/screenshots/10868819/media/e2b74ca9e20aa7792bcb3974f715efe4.png" />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Typography variant="h4"  align="center">
              How to Play
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <RuleLists />
        </Grid>
      </Paper>
      <Grid container style={{display: !props.user ? "flex" : "none"}}>
        <MyButton onClick={() => handleButtonClick("/signup")} variant="contained" color="red" style={{marginLeft: "auto", marginTop: "20px"}}>Sign Up</MyButton>
        <MyButton onClick={() => handleButtonClick("/login")} variant="contained" color="blue" style={{marginRight: "auto", marginTop: "20px"}}>Log In</MyButton>
      </Grid>
      <Switch>
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Home)