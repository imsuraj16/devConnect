import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full flex items-center justify-center gap-[4rem] px-[3rem] py-[2rem]'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/users'>users</NavLink>
      <NavLink to='/add-project'>Add Project</NavLink>
      <NavLink to='/add-user'>Add User</NavLink>
    </div>
  )
}

export default Nav
