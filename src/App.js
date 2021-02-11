import React from 'react';
import Routes from './routes';
import { Provider } from "react-redux";
import store from './store';
import {  
  ThemeProvider, 
  createMuiTheme,
 } from '@material-ui/core';

function App() {
  
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#fafafa'
      },
    }
  });
  
  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </Provider>

  );

}

export default App;
