import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_main'>
        <div className='brandname'>
            <p>rajkumar<span className='band_sub'>.</span></p>
        </div>
        <div>
            <ul className='menu_list'>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar