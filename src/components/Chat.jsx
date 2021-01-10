import React from 'react';
import Messages from './Messages';
import InfoBar from './InfoBar';
import InputBox from './InputBox';
import useSocket from './useSocket';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  table: {
    minWidth: 660,
  },
  chatSection: {
    width: '100%',
    height: '82vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '71vh',
    overflowY: 'auto'
  },
  roomBox: {
    color: '#40637E',
    fontWeight: 'bold',
    fontSize: "25px"
  },
});

const Chat = ({name, room}) => {
  const classes = useStyles();
  const [messages, typeMsg, sendNewMessage, sendTypingMsg] = useSocket(
    name,
    room
  );

  //Get current time:
  var date = new Date();
  var time = date.toLocaleTimeString();


  return (
    <div>
      <Grid container component={Paper} className={classes.chatSection}>
          <Grid item xs={3} className={classes.borderRight500}>
              <List>
                  <ListItem button >
                      <Typography className={classes.roomBox}>{room}</Typography>
                  </ListItem>
                  <Divider />
                  <ListItem button >
                      <ListItemIcon>
                          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                      </ListItemIcon>
                      <ListItemText >Remy Sharp</ListItemText>
                  </ListItem>
              </List>
          </Grid>
          <Grid item xs={9}>
              <List className={classes.messageArea}>
                  <ListItem key="1">
                      <Grid container>
                          <Grid item xs={12}>
                              <ListItemText align="right" primary={"Hey man, What's up ?"}></ListItemText>
                          </Grid>
                          <Grid item xs={12}>
                              <ListItemText align="right" secondary={`${name}- ${time}`}></ListItemText>
                          </Grid>
                      </Grid>
                  </ListItem>
                  <ListItem key="2">
                      <Grid container>
                          <Grid item xs={12}>
                              <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                          </Grid>
                          <Grid item xs={12}>
                              <ListItemText align="left" secondary="09:31"></ListItemText>
                          </Grid>
                      </Grid>
                  </ListItem>
                  <ListItem key="3">
                      <Grid container>
                          <Grid item xs={12}>
                              <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                          </Grid>
                          <Grid item xs={12}>
                              <ListItemText align="right" secondary="10:30"></ListItemText>
                          </Grid>
                      </Grid>
                  </ListItem>
              </List>
              <Divider />
              <Grid container style={{padding: '20px'}}>
                  <Grid item xs={11}>
                      <TextField id="outlined-basic-email" label="Type a message..." fullWidth />
                  </Grid>
                  <Grid xs={1} align="right">
                      <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    </div>
);


  //       <Messages messages={messages} name={name} typeMsg={typeMsg} />
  //       <InputBox
  //         sendNewMessage={sendNewMessage}
  //         sendTypingMsg={sendTypingMsg}
  //       />

};
export default Chat;
