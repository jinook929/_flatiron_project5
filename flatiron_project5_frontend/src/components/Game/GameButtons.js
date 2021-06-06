// React related
import React from 'react'
// Material UI related
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
import GetAppIcon from '@material-ui/icons/GetApp'
import PublishIcon from '@material-ui/icons/Publish'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const GameButtons = (props) => {
  const classes = useStyles()

  const handleClick = (e) => {
    props.handleButtonClick(e.currentTarget.innerText)
  }

  return (
    <div className={classes.root}>
      <ButtonGroup aria-label="outlined primary button group">
        <Button color="primary" onClick={handleClick}><PublishIcon />Higher</Button>
        <Button color="secondary" onClick={handleClick}>Lower<GetAppIcon /></Button>
      </ButtonGroup>
    </div>
  )
}

export default GameButtons
