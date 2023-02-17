import React from 'react'
import './Firstpanel.css'
import dots from './Dots.webp'
import sayviri from './sayviri.webp'
import growth from './growth.webp'



function Firstpanel() {
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var scrollArea = 1000 - windowHeight;


    const Dots = document.getElementsByClassName('panelImage')[0];
    const Horn = document.getElementsByClassName('panelImage')[1];
    const Growth = document.getElementsByClassName('panelImage')[2];
    
    window.addEventListener('scroll', function() {
      Growth.style.top = window.scrollY*0.3 + 'px'
      Horn.style.top = window.scrollY*0.3 - 'px'
      Dots.style.top = window.scrollY*0.3 + 'px';
    });

  return (
      <div className='fisrtPanelContainer'>

      <div className='leftSidePanel'>
        <div>
          <h1>გაზარდე შენი <h1 className='tealtext'>WuWu</h1> სწორი რეკლამის ვიზუალებით</h1>
        </div>
        
        <p>გაინტერესებს რამდენად მნიშვნელოვანია სარეკლამო
           სტრატეგიასთან ერთად სწორი ვიზუალების გამოყენება? 
           დარეგისტრირდი უფასო ინდივიდუალურ შეხვედრაზე და
            მიიღე ყველა კითხვაზე პასუხი!</p>
        
        <a className='registerForMeetingButton'>რეგისტრაცია შეხვედრაზე</a>
        
        <svg viewBox=''>
          <line x1="0" y1="0" x2="400" y2="0" stroke="black" ></line>
        </svg>
        <div className='ratingDivContainer'>
          <div className='ratingDiv'>
            <h2>95+</h2>
            <p>დამზადებული ვიზუალი</p>
          </div>
          <div className='ratingDiv'>
            <h2>99%</h2>
            <p>კლიენტებისა კმაყოფილია</p>
          </div>
        </div>
      
      </div>

      <div className='panelImages'>
        <img src={dots} alt='PolkaDots' className='panelImage'></img>
        <img src={sayviri} alt='SayviriIMG' className='panelImage'></img>
        <img src={growth} alt='GrowthGraph' className='panelImage'></img>
      </div>
    
    </div>
  )
}

export default Firstpanel