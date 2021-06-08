import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
// for live coding
// import ThumbUpIcon from '@material-ui/icons/ThumbUp'

export class ScoreRow extends Component {
  // for live coding
  // state = {
  //   likes: 0
  // }
  // handleClick = (e) => {
  //   if(this.props.number !== "") {
  //     this.setState({likes: this.state.likes + parseInt(this.props.number)})
  //   }
  // }

  render() {
    return (      
        <TableRow>
          <TableCell align="center" component="th" scope="row"><strong>{this.props.i + 1}</strong></TableCell>
          <TableCell align="center"><strong>{this.props.game.score * 100}</strong> points</TableCell>
          <TableCell align="center">{this.props.game.user.email.split("@")[0].toUpperCase().split("").join("•")}</TableCell>
          <TableCell align="center">{`${this.props.game.created_at.split('T')[0]} @ ${this.props.game.created_at.split('T')[1].slice(0, 11)}`}</TableCell>
          {/* for live coding */}
          {/* <TableCell align="center"><ThumbUpIcon id={this.props.game.id} name={this.props.game.id} onClick={this.handleClick} style={{cursor: "pointer"}} /> {this.state.likes}</TableCell> */}
        </TableRow>
    )
  }
}

export default ScoreRow
