import React from 'react'
import Navbar from './Navbar'
import Appbar from './Appbar'
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <Appbar/>
        {children}
    </div>
  )
}

export default Layout