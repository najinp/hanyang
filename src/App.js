import './App.css'
import React from 'react'
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import MainVisual from './components/MainVisual';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <MainVisual />
      </main>
    </Wrapper>
  )
}

export default App