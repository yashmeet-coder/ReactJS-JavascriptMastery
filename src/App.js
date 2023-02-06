import React from 'react'
import {Blog,Features,Header,Footer,Possibility,Whatgpt3} from './containers';
import {Article,Cta,Brand,Navbar,Feature} from './components';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        {/* <Header /> */}
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
