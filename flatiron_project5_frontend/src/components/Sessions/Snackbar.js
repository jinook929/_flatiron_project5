import React from 'react';
import {useDispatch} from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    dispatch({type: 'RESET_USER'})
  };

  return (
    <div id="login-snackbar" className={classes.root}>
      <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
