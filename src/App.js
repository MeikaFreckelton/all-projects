import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom' 
import YellingGreeter from './components/YellingGreeter'
import CookieClicker from './components/CookieClicker/CookieClicker'
import Navbar from './components/Navbar'
import HappyMessage from './components/HappyMessage'
import BusinessCard from './components/BusinessCard'
import Home from './components/Home'
import Tweeter from './components/Tweeter/Tweeter'
import ToDoList from './components/ToDoList'
import BillAndTip from './components/BillAndTip'
import MovieList from './components/MovieList'
import './styles/businessCard.css'




const App = () => {
  return (
    
    <div >
      <BrowserRouter>
      <Navbar />
      
      {/* <YellingGreeter /> */}
        <Route exact path="/BillAndTip" component={BillAndTip} />
        <Route exact path="/todolist" component={ToDoList} />
        <Route exact path="/tweeter" component={Tweeter} />
        <Route path="/cookieClicker" component={CookieClicker} />
        <Route path="/yellingGreeter" component={YellingGreeter} />
        <Route path="/happyMessage" component={HappyMessage} />
        <Route path="/businessCard" component={BusinessCard} />
        <Route path="/movieList" component={MovieList} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
          
    </div>
  )
}

export default App
