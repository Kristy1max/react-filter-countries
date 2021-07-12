import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="countries-app">
      <Header />
      <Countries />
      <Footer />
    </div>
  )
}

export default App;
