import React, { Component } from 'react'
import { connect } from 'react-redux'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ProfileCard from './ProfileCard'

export class User extends Component {
  renderUserInfo = () => (this.props.user && this.props.user.id) ? 
    <div>
      <ProfileCard user={this.props.user} />
    </div>
  :
    <div></div>
  
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

export default connect(mapStateToProps)(User)
