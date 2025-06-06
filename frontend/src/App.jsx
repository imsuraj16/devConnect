import React from 'react'
import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='w-full h-full bg-amber-200'>
      <Nav/>
      <Mainroutes/>
      
    </div>
  )
}

export default App
