import React from 'react';
import Header from './components/Header/Header.tsx';
import Home from './pages/Home/Home.tsx';
import About from './pages/About/About.tsx';
import PageProgress from './components/PageProgress/PageProgress.tsx';

function App() {
  return (
    <>
      <Header />
      <PageProgress />
      <Home />
      <About />
    </>
  );
}

export default App;
