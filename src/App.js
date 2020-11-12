import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom' 
import YellingGreeter from './components/YellingGreeter'
import CookieClicker from './components/CookieClicker'
import Navbar from './components/Navbar'
import HappyMessage from './components/HappyMessage'
import BusinessCard from './components/BusinessCard'
import Home from './components/Home'
import Tweeter from './components/Tweeter/Tweeter'
import './styles/businessCard.css'




const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      
      {/* <YellingGreeter /> */}
        <Route exact path="/tweeter" component={Tweeter} />
        <Route path="/cookieClicker" component={CookieClicker} />
        <Route path="/yellingGreeter" component={YellingGreeter} />
        <Route path="/happyMessage" component={HappyMessage} />
        <Route path="/BusinessCard" component={BusinessCard} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
          
    </div>
  )
}

export default App
