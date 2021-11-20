import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import theme from './components/theme';
import Platform from './pages/Platform'
import "@fontsource/rubik/300.css"
import "@fontsource/inter/700.css"
import "@fontsource/montserrat/500.css"

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Router basename="/">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;