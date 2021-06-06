// React & Redux related
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchHighScores} from '../../actions'
import ScoresDisplay from './ScoresDisplay'

export class HighScores extends Component {
  componentDidMount() {
    this.props.fetchHighScores()
  }
  
  render() {
    return (
      <div>
        {this.props.highScores.length > 0 ? <ScoresDisplay games={this.props.highScores} /> : <></>}
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
