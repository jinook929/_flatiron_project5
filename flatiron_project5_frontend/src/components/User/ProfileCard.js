// React related
import React from 'react'
// Material UI related
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const ProfileCard = (props) => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Username
        </Typography>
        <Typography variant="h5" component="h2">
          {props.user.email.split("@")[0].toUpperCase().split("").join("•")}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.user.email}
        </Typography>
        <br /><hr style={{width: "50%"}} /><br />
        <Typography variant="h5" component="h2">
          Games Played by This User
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Average Score : {Math.round(props.user.games.reduce((acc, el) => {return acc + el.score}, 0) * 100 / props.user.games.length)} points
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          {
            (props.user.games.length > 0) ? 
            [...props.user.games].reverse().map(game => <React.Fragment key={game.id}>{`${game.score * 100} points @ ${game.created_at.split("T")[0]}, ${game.created_at.split("T")[1].slice(0, 11)}`}<br /></React.Fragment>) 
            : 
            <>No game played yet. Click the Game link on the Navbar!</>
          }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProfileCard