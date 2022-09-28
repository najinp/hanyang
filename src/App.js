import './App.css'
import React from 'react'
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import MainVisual from './components/MainVisual';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' />
        <Route path='/sub01' />
        <Route path='/sub02' />
        <Route path='/sub03' />
        <Route path='/sub04' />
        <Route path='/board' />
      </Routes>
      <Footer content={COMPANY} />
    </Wrapper>
  )
}

export default App