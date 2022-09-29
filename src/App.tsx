import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './layout/Header'
import Pricing from './layout/Pricing'
import { Features } from './layout/Features'

function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
      <Features />
    </div>
  )
}

export default App
