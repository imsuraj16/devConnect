import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Userspage from "../pages/Userspage"
import Addproject from "../pages/Addproject"
import Adduser from "../pages/Adduser"
import Projects from '../pages/Projects'
import Userdetails from '../pages/Userdetails'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/users' element = {<Userspage/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/add-project' element = {<Addproject/>}/>
      <Route path='/add-user' element = {<Adduser/>}/>
      <Route path='/users/:id/projects' element = {<Userdetails/>}/>
    </Routes>
  )
}

export default Mainroutes
