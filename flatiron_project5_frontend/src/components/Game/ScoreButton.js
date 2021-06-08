// React related
import React from 'react';
// Material UI related
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: 400,
    height: 50,
    cursor: "initial"
  }
}));

const ScoreButton = (props) =>  {
  const classes = useStyles();
  const handleScoreButtonClick = e => {
    if(props.score === -1) {
      props.handleButtonClick()
    }
  }

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="default" className={classes.button} onClick={handleScoreButtonClick}>
        Current Score: {props.score * 100}
      </Button>
    </div>
  )
}

export default ScoreButton