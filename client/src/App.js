import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getTeams } from "./actions/teams"

// Components
import Teams from './components/Teams/Teams';
import Form from './components/Form/Form';

// Styles
import useStyles from './styles';

// Images
import huntingGrounds from './assets/HuntingGrounds.png'

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Hunting Grounds Stream Overlay</Typography>
        <img className={classes.image} src={huntingGrounds} alt="hunting grounds" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Teams />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;