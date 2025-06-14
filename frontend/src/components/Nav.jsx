import { Code, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className='w-full bg-white shadow-sm border-b border-gray-100 py-2'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo/Brand */}
          <NavLink to='/' className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              DevConnect
            </span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4 lg:space-x-8'>
              <NavLink 
                to='/' 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to='/users' 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                Users
              </NavLink>
              <NavLink 
                to='/projects' 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to='/add-project' 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                Add Project
              </NavLink>
               <NavLink 
              to='/about' 
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              About
            </NavLink>
              <NavLink 
                to='/add-user' 
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-green-600 text-white hover:bg-green-700 border border-green-600'
                  }`
                }
              >
                Add User
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              onClick={toggleMobileMenu}
              className='bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200'
              aria-controls='mobile-menu'
              aria-expanded={isMobileMenuOpen}
            >
              <span className='sr-only'>
                {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {isMobileMenuOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`} 
          id='mobile-menu'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100'>
            <NavLink 
              to='/' 
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to='/users' 
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Users
            </NavLink>
            <NavLink 
              to='/projects' 
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to='/about' 
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to='/add-project' 
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`
              }
            >
              Add Project
            </NavLink>
            <NavLink 
              to='/add-user' 
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`
              }
            >
              Add User
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav