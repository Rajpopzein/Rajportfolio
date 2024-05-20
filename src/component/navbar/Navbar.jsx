import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_main'>
        <div className='brandname'>
            <a href='/'>rajkumar<span className='band_sub'>.</span></a>
        </div>
        <div>
            <ul className='menu_list'>
                <li><a href='/'>Work</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar