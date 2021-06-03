import React, { Component } from 'react'
import { connect } from 'react-redux'

export class User extends Component {
  renderUserInfo = () => (this.props.user && this.props.user.id) ? 
    <div>
      <h2>User ID: {this.props.user.id}</h2>
      <h2>User Email: {this.props.user.email}</h2>
      <h3>Games Played by [ {this.props.user.email.split("@")[0]} ] : </h3>
      {
        (this.props.user.games.length > 0) ? 
        this.props.user.games.map(game => <p key={game.id}>{`${game.score} points ("${game.memo}") @ ${game.created_at.split("T")[0]}, ${game.created_at.split("T")[1].slice(0, 8)}`}</p>) 
        : 
        <p>No game played yet. Click the Game link on the Navbar!</p>
      }
    </div>
  :
    <div></div>
  
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>User Home</h1>
        <>{this.renderUserInfo()}</>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(User)
