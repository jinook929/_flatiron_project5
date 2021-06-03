import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button> */}
      <Button variant="outlined" color="default" className={classes.button}>
        Current Score: {props.score * 100}
      </Button>
      {/* <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button> */}
    </div>
  );
}

export default ScoreButton