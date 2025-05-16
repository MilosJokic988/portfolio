import React from 'react';
import DarkPortfolio from './components/DarkPortfolio';
import About from './components/About'; // importuj About ako već imaš
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <DarkPortfolio />
      <About />
      <Footer/>
    </>
  );
};

export default App;
