import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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
          </TableRow>
        </TableHead>
        <TableBody>
          {props.games.map((name, i) => (
            <TableRow key={name.id}>
              <TableCell align="center" component="th" scope="row"><strong>{i + 1}</strong></TableCell>
              <TableCell align="center"><strong>{name.score * 100}</strong> points</TableCell>
              <TableCell align="center">{name.user.email.split("@")[0].toUpperCase().split("").join("•")}</TableCell>
              <TableCell align="center">{`${name.created_at.split('T')[0]} @ ${name.created_at.split('T')[1].slice(0, 11)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ScoresDisplay