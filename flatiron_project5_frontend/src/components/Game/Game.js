import React, { Component } from 'react'
import { connect } from 'react-redux'
import Deck from './Deck'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import './Game.css'

export class Game extends Component {
  render() {
    return (
      <div>
        <p className="title" style={{marginTop: 50}}><LiveHelpIcon color="primary" style={{fontSize: "2rem"}} /> <LiveHelpIcon color="secondary" style={{fontSize: "2rem"}} /></p>
        <h1 className="title">HIGHER or LOWER </h1>
        <h2 className="title">What do you think is the next card?</h2>
        <Deck />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
