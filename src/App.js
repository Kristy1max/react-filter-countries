import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Countries />
      <Footer />
    </>
  )
}

export default App;
