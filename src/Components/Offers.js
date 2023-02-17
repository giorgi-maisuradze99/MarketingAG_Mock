import React from 'react'
import './Offers.css'
import squigglydiggly from './xuwu.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



function Offers() {

    useEffect(()=> {
        AOS.init({duration: 1000})
    }, [])


  return (
    <div className='mainOffersPanel'>
        <p>ჩვენი სერვისები</p>
        <br></br>
        <div className='offerDialogDiv'>
            <h1 data-aos='fade-right'>გთავაზობთ ყველაფერს, რაც სჭირდება შენ ონლაინ ბიზნესს</h1>
            <img src={squigglydiggly}/>
        </div >

        
        <div className='offerItemsDiv' data-aos='fade-down'>
                <div className='offerItem'>
                    <svg>
                        <circle cx='50' cy='50' r='30'></circle>
                    </svg>
                    <h2>რეკლამა სოციალურ ქსელში</h2>
                    <a>→</a>
                </div> 
                <div className='offerItem'>
                    <svg>
                        <circle cx='50' cy='50' r='30'></circle>
                    </svg>
                    <h2>ვიზუალების შექმნა უმაღლეს დონეზე</h2>
                    <a>→</a>
                </div>
                <div className='offerItem'>
                    <svg>
                        <circle cx='50' cy='50' r='30'></circle>
                    </svg>
                    <h2>თქვეზე მორგებული ბრენდინგის შექმნა</h2>
                    <a>→</a>
                </div> 
                <div className='offerItem'>
                    <svg>
                        <circle cx='50' cy='50' r='30'></circle>
                    </svg>
                    <h2>სტუდიოს ხარისხის პროდუქტის ფოტოგრაფია</h2>
                    <a>→</a>
                </div>
                <div className='offerItem'>
                    <svg>
                        <circle cx='50' cy='50' r='30'></circle>
                    </svg>
                    <h2>UGC კამპანიების დაგეგმვა</h2>
                    <a>→</a>
                </div>
                <div className='offerItem'>
                    <svg>
                        <circle cx='50' cy='50' r='30'></circle>
                    </svg>
                    <h2>მიკრო-ინფლუენსერის დაქირავება პროდუქტის ვიდეოსთვის</h2>
                    <a>→</a>
                </div>
        </div>

    </div>
  )
}

export default Offers