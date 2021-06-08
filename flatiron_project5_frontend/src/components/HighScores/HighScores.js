// React & Redux related
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchHighScores} from '../../actions'
import ScoresDisplay from './ScoresDisplay'

export class HighScores extends Component {
  // for live coding
  // state = {
  //   number: 1
  // }

  componentDidMount() {
    this.props.fetchHighScores()
  }
  render() {
    return (
      <div>
        {/* for live coding */}
        {/* <div style={{textAlign: "center", marginTop: 30}}>
          <label>How many thumb-ups do you want to give by one click?</label>
          <br /><br />
          <input type="number" value={this.state.number} onChange={(e) => e.target.value < 1 ? "" : this.setState({number: e.target.value})} style={{textAlign: "center", fontSize: "1.5rem", width: 200}} />
        </div>
        {this.props.highScores.length > 0 ? <ScoresDisplay games={this.props.highScores} number={this.state.number} /> : <></>} */}
        {this.props.highScores.length > 0 ? <ScoresDisplay games={this.props.highScores} /> : <>No Games Played at All!!!</>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  highScores: state.highScores
})

const mapDispatchToProps = dispatch => {
  return {
    fetchHighScores: () => dispatch(fetchHighScores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScores)
