import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';

import ApplicationBar from './ApplicationBar';
import Stages from './Stages'

import {DataContextProvider} from './Data.context';

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <DataContextProvider>
        <ApplicationBar />
        <Stages />
      </DataContextProvider>
    </MuiThemeProvider>
  );
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#59B7E7',
      main: '#31ADE3',
      dark: '#014263',
      contrastText: '#FFF'
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default App;
