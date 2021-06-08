// React related
import React from 'react'
// Material UI related
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ScoreRow from './ScoreRow'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 30
  },
});

const ScoresDisplay = (props) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">RANK</TableCell>
            <TableCell align="center">SCORE (When tied, recent score gets higher rank.)</TableCell>
            <TableCell align="center">PLAYER</TableCell>
            <TableCell align="center">PLAYED_AT</TableCell>
            {/* for live coding */}
            {/* <TableCell align="center">Likes</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.games.map((game, i) => (
            <ScoreRow key={game.id} game={game} i={i} />
            // for live coding
            // <ScoreRow key={game.id} game={game} i={i} number={props.number} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ScoresDisplay