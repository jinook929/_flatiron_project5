// React & Axios related
import React, { Component } from 'react'
import axios from 'axios'
// files imported
import ScoreButton from './ScoreButton'
import Card from './Card'
import GameButtons from './GameButtons'
import './Deck.css'

const BASE_URL = "https://deckofcardsapi.com/api/deck/"

export class Deck extends Component {
  state ={
    deck: "",
    drawn: [],
    remaining: ""
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}new/shuffle/`)
    this.setState({deck: res.data, drawn: [], remaining: res.data.remaining})
    this.handleButtonClick()
  }

  async persistGameResult(score, userId) {
    axios.post("http://localhost:5000/games", {score, userId}, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${sessionStorage.getItem("jwt")}`
      }
    })
  }

  getCardValue = (card) => {
    if(card) {
      let value
      switch(card.code[0]) {
        case "0":
          value = 10
          break
        case "J":
          value = 11
          break
        case "Q":
          value = 12
          break
        case "K":
          value = 13
          break
        case "A":
          value = 14
          break
        default:
          value = parseInt(card.code[0])
      }
      switch(card.code[1]) {
        case "C":
          return value + 0.2
        case "D":
          return value + 0.4
        case "H":
          return value + 0.6
        case "S":
          return value + 0.8
        default:
          return 0
      }
    }
  }

  handleButtonClick = async (decision) => {
    try {
      const res = await axios.get(`${BASE_URL}${this.state.deck.deck_id}/draw/?count=1`)
      const card = res.data.cards[0]
      const currentCardValue = this.getCardValue(card)
      const previousCardValue = this.state.remaining < 52 ? this.getCardValue(this.state.drawn[this.state.drawn.length - 1]) : undefined
      // If fetching successful
      if(res.data.success && this.state.remaining !== 1) {
        // If game over
        if(previousCardValue && !(currentCardValue > previousCardValue && decision === "HIGHER") && !(currentCardValue < previousCardValue && decision === "LOWER")) {
          this.persistGameResult(this.state.drawn.length - 1, sessionStorage.getItem("id"))
          if (window.confirm(`Sorry, but the next card was NOT ${decision} [${card.suit} ${card.value}].\nDo you want to play another game?`)) {
            this.componentDidMount()
            return
          }
          document.querySelectorAll(".MuiButton-root").forEach(el => el.classList.add("Mui-disabled"))
          return
        }
        // If game on
        this.setState(state => ({drawn: [...state.drawn, card], remaining: state.remaining - 1}))
      } else { // if error or all 52 cards drawn
        if (window.confirm("Congratularions!!! You've reached to the highest score.\nDo you want to play another game?")) {
          this.componentDidMount()
          return
        }
        throw new Error("No More Cards...\nYou won.")
      }
    } catch(err) {
      console.log("message:", err)
    }
  }

  transform = () => {
    const x = Math.random() * 30 - 15
    const y = Math.random() * 30 - 15
    const deg = Math.random() * 90 - 45
    const result = `translate(${x}px, ${y}px) rotate(${deg}deg)`
    return result
  }

  render() {
    const drawnCards = this.state.drawn.map(card => {
      return <Card key={`${this.state.deck.deck_id}-${card.code}`} card={card} transform={this.transform()} />
    })
    return (
      <div style={{textAlign: "center"}}>
        <p style={{fontSize: "0.75rem"}}>[ Remaing Cards: {this.state.remaining} ]</p>
        <ScoreButton score={51 - this.state.remaining} handleButtonClick={this.handleButtonClick} />
        <br />
        {drawnCards}
        <GameButtons handleButtonClick={this.handleButtonClick} />
      </div>
    )
  }
}

export default Deck
