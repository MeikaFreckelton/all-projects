import React, { useReducer } from 'react'

import DisplayCount from './components/DisplayCount'
import PerClick from './components/PerClick'
import PerSecond from './components/PerSecond'

import stateReducer from './config/stateReducer'
import {StateContext} from './config/globalState'


const CookieClicker = () => {
  const initialState = {
    cookieClicks: 0,
    autoIncrease: 1
  }

  const [store, dispatch] = useReducer(stateReducer, initialState)
//   const { cookieClicks, autoIncrease } = store

  

  const divStyle = {
    textAlign: "center"
  }

  return (
    <div style={divStyle}>
      <StateContext.Provider value={{store, dispatch}}>
        <h1>Cookie Clicker</h1>
        <DisplayCount />
        <PerClick />
        <PerSecond />
      </StateContext.Provider>
    </div>
  )
}

export default CookieClicker
