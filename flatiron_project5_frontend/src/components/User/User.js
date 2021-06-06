// React & Redux related
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUser} from '../../actions'
import ProfileCard from './ProfileCard'
// Material UI related
import AccountBoxIcon from '@material-ui/icons/AccountBox'

export class User extends Component {
  componentDidMount() {
    this.props.setPathname(this.props.history.location.pathname)
    this.props.fetchUser(sessionStorage.getItem("id"))
  }

  renderUserInfo = () => {
    return (this.props.user && this.props.user.id) ? 
    <div>
      <ProfileCard user={this.props.user} />
    </div>
    :
    <div>Something's wrong...</div>
  }
  
  render() {
    return (
      <div style={{textAlign: "center"}}>
        {
          sessionStorage.getItem("jwt") ? 
          <><h1>User Profile</h1><div><AccountBoxIcon color="primary" style={{fontSize: "10rem"}} /></div>{this.renderUserInfo()}</> 
          : 
          <h2>Please log in first.</h2>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
