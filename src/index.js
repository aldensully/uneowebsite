import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/theme';
import App from './App';
import "@fontsource/comfortaa/700.css"
import "@fontsource/comfortaa/400.css"

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
 