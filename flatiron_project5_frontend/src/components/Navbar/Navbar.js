// React related
import React, {useState} from 'react'
import {Route, Switch, useHistory} from 'react-router-dom'
// Redux related
import {useSelector, useDispatch} from "react-redux"
import {logoutUser} from '../../actions' // for action creaters
// Material UI ralated
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, IconButton, MenuItem, Menu} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
// From files
import Home from '../Home/Home'
import HighScores from '../HighScores/HighScores'
import Signup from '../Sessions/Signup'
import Login from '../Sessions/Login'
import Game from '../Game/Game'
import User from '../User/User'

// Material UI custom styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  highScores: {
    marginRight: theme.spacing(5),
  },
  accountMenu: {
    marginRight: theme.spacing(2),
  },
  activeNavBtn: {
    color: '#E0FFFF',
    fontWeight: 'bold',
    textDecoration: 'underline' 
  }
}))

const Navbar = () => {
  const user = useSelector(state => state.user)
  console.log("Navbar Component", user)
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNavbarItem = e => {
    setAnchorEl(e.currentTarget);
  }

  const handleNavbarItemClick = route => {
    setAnchorEl(null);
    history.push(route)
  }

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setAnchorEl(null);
      dispatch(logoutUser(user.id, history))
    }
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => handleNavbarItemClick("/")} variant="h6" className={`${classes.title} ${(history.location.pathname === "/") ? classes.activeNavBtn : ""}`}>
            The Higher Lower Game
          </IconButton>
          <IconButton color="inherit" onClick={() => handleNavbarItemClick("/game")} style={{display: sessionStorage.getItem("jwt") ? "flex" : "none"}} className={(history.location.pathname === "/game") ? classes.activeNavBtn : ""}>
            Game
          </IconButton>
          <IconButton color="inherit" onClick={() => handleNavbarItemClick("/high-scores")}  className={`${classes.highScores} ${(history.location.pathname === "/high-scores") ? classes.activeNavBtn : ""}`}>
            High Scores
          </IconButton>
          <div>
            <IconButton
              edge="start"
              className={classes.accountMenu}
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleNavbarItem}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleNavbarItemClick("/signup")} style={{display: !sessionStorage.getItem("jwt") ? "flex" : "none"}}>Sign Up</MenuItem>
              <MenuItem onClick={() => handleNavbarItemClick("/login")} style={{display: !sessionStorage.getItem("jwt") ? "flex" : "none"}}>Log In</MenuItem>
              <MenuItem onClick={() => handleNavbarItemClick(`/users/${user.id}`)} style={{display: sessionStorage.getItem("jwt") ? "flex" : "none"}}>Profile</MenuItem>
              <MenuItem onClick={() => handleLogoutClick("/")} style={{display: sessionStorage.getItem("jwt") ? "flex" : "none"}}>Log Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/high-scores" render={props => <HighScores {...props} />} />
        <Route path="/game" render={props => <Game {...props} />} />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/users/:id" render={props => <User {...props} />} />
      </Switch>
    </div>
  )
}

export default Navbar
