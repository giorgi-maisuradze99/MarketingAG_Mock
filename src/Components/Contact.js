import React from 'react'
import './Contact.css'
import PLogo from './PixelPeakLogo.png'

function Contact() {
  return (
    <div className='mainContactContainer'>
        <h1>დაგვიტოვეთ წერილი და ჩვენ აუცილებლად დაგიკავშირდებით</h1>
        <section className='inputContainer'>
            <form>
                <label>სახელი</label>
                <br></br>
                <input type='text'></input>
                <br></br>

                <label>მეილი</label>
                <br></br>
                <input type='email' placeholder='example@example.com'></input>
                <br></br>

                <label>თქვენი წერილი</label>
                <br></br>
                <input type='text' id='messageinput' placeholder='...'></input>
                <button type='submit'>გაგზავნა</button>
            </form>

        </section>

        <div className='contactUsDiv'>
            <img src={PLogo} />
            <div className='findUs'>
              <h1>გვიპოვე სოციალურ ქსელში</h1>
              <a href='https://www.facebook.com/pixelpeakgeorgia/'>Facebook</a>
              <a href='https://www.instagram.com/pixelpeakgeorgia/'>  Instagram</a>
            </div>

            <div>
                <h1>მოგვწერეთ მეილზე</h1>
                <a>info@pixelpeak.ge</a>
            </div>

        </div>
    </div>
  )
}

export default Contact