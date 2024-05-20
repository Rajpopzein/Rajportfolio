import React from 'react'
import App from '../../App'
import './contact.css'
import soccer from '../../assets/marse.jfif'

function Contact() {
  return (
    <App>
        <div className='main'>
            <div className='contact-card'>
            <div className='contact-card-details contact_heading'>
              {/* <div className='contact_heading'>
              <h1>Get in touch</h1>
              <p>Let's create a universe of possibilities together!</p>
            </div> */}
              <h1>Let's connect constellations</h1>
              <p>Let's align our constellations! Reach out and let the magic of collabration illuminate our skies</p>
              <div className='contact-form'>
                <form>
                  <div className='conatact-name'>
                    <input placeholder='First name'/>
                    <input placeholder='last name'/>
                  </div>
                  <div className='Contact-conten-pages'>
                    <input placeholder='Email'/>
                    <textarea placeholder='Message'/>
                  </div>
                  <button className='mars-btn'><p>Send it to mars <i class="fa-solid fa-shuttle-space"></i></p></button>
                </form>
              </div>
            </div>
            <div className='contact_showcase'>
              <img src={soccer} alt='soccer' className='marse-img'/>
            </div>
            </div>
        </div>
    </App>
    
  )
}

export default Contact