// React related
import React from 'react'
// Material UI related
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SwapVertIcon from '@material-ui/icons/SwapVert'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus'
import BugReportIcon from '@material-ui/icons/BugReport'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const RuleLists = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ExitToAppIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Prepare to Start" secondary="To enjoy the game, you have to log in. If you do not have an account with us, please sign up first." />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SwapVertIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Guess (Higher || Lower)" secondary="Guess whether the next card would be higher or lower than the current one. FYI, in the beginning, you have a deck of 52 cards shuffled to be drawn." />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DoneOutlineIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Click & Check" secondary="Click either HIGHER or LOWER button to see if your choice is right. If right, then you are going to the next round! Just make another good guess about the next card." />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ViewCarouselIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Suit Ranks" secondary="When you have the same numbers, here's the rankings: Spade(highest) - Heart - Diamond - Club(lowest)." />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Filter9PlusIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Score" secondary="The number of correct answers is your score. The lowest score is 0 and the highest possible is 51. You can also check the high scores of other players." />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BugReportIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="In Games..." secondary="Sometimes the Deck of Cards API has network issues. If that happens during the game, please click the HIGHER/LOWER button one more time." />
        </ListItem>
      </List>
    </div>
  );
}

export default RuleLists