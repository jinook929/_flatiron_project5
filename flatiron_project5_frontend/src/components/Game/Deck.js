import React, { Component } from 'react'
import axios from 'axios'

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
    const res = await axios.post("http://localhost:5000/games", {score, userId})
    console.log(res.data)
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
    if(this.state.remaining < 52) {
      console.log("handleButtonClick ln 63:", decision)
    }

    try {
      const res = await axios.get(`${BASE_URL}${this.state.deck.deck_id}/draw/?count=1`)
      const card = res.data.cards[0]
      console.log("card ln 69:", card)
      
      const previousCardValue = this.state.remaining < 52 ? this.getCardValue(this.state.drawn[this.state.drawn.length - 1]) : undefined
      console.log("previousCardValue ln72:", previousCardValue, "score ln 72:", 52 - this.state.remaining)
      
      console.log("remaining ln 74", this.state.remaining)
      
      const currentCardValue = this.getCardValue(card)
      console.log("currentCardValue ln 77:", currentCardValue, "score", 52-this.state.remaining)

      if(res.data.success && this.state.remaining !== 1) {

        if(previousCardValue && !(currentCardValue > previousCardValue && decision === "HIGHER") && !(currentCardValue < previousCardValue && decision === "LOWER")) {
          console.log("GAME OVER...", this.state.remaining)
          console.log("Final Score:", this.state.drawn.length - 1)

          this.persistGameResult(this.state.drawn.length - 1, sessionStorage.getItem("id"))

          if (window.confirm(`Sorry, but the next card was NOT ${decision} [${card.suit} ${card.value}].\nDo you want to play another game?`)) {
            this.componentDidMount()
            return
          }
          document.querySelectorAll(".MuiButton-root").forEach(el => el.classList.add("Mui-disabled"))
          return
        }

        this.setState(state => ({drawn: [...state.drawn, card], remaining: state.remaining - 1}))

        if(previousCardValue && currentCardValue > previousCardValue && decision === "HIGHER") {
          console.log("CORRECT, HIGHER!")
        } else if(previousCardValue && currentCardValue < previousCardValue && decision === "LOWER") {
          console.log("CORRECT, LOWER!")
        } 
        // else if(previousCardValue) {
        //   console.log("GAME OVER...", this.state.remaining)
        //   console.log("Final Score:", this.state.drawn.length)
        //   if (window.confirm(`Sorry, but the next card was NOT ${decision} [${card.suit} ${card.value}].\nDo you want to play another game?`)) {
        //     this.componentDidMount()
        //   }
        // }
      } else {
        console.log("Congratularions!!! You've reached to the highest score.")
        if (window.confirm("Do you want to play another game?")) {
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
        <ScoreButton score={51 - this.state.remaining} />
        <br />
        {drawnCards}
        <GameButtons handleButtonClick={this.handleButtonClick} />
      </div>
    )
  }
}

export default Deck
