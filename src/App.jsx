import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Header } from './components/Header.jsx';
import { InfoHeader } from './components/InfoHeader.jsx';
import { Articles } from './components/Articles.jsx';
const useStyle = makeStyles(theme=>({
  container: {
    marginTop: 110,
    width:'59%',
    margin:'0 auto',
    fontWeight:300,
    [theme.breakpoints.down('md')]:{
      width:'75%'
    },
    [theme.breakpoints.down('sm')]:{
      width:'85%'
    }
  }
}));
function App() {
  const classes = useStyle();
  return (<>
    <Box>
      <Header />
      <Box className={classes.container}>
        <InfoHeader />
        <Articles />
      </Box>
    </Box>
  </>);
}

export { App };
