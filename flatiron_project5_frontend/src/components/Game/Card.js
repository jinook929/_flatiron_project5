import React, { Component } from 'react'
import './Card.css'

export class Card extends Component {
  state = {
    transform: this.props.transform
  }
  render() {
    return (
      <div className="Card">
        <img src={this.props.card.image} alt={this.props.card.code} style={{marginTop: "100px", transform: this.state.transform}} />
      </div>
    )
  }
}

export default Card
