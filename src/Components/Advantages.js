import React from 'react'
import './Advantages.css'

function Advantages() {
  return (
    <>
    <div className='advantagesPanel'>

        <h1>ჩვენი უპირატესობები</h1>
      <div className='advantagesContainer'>

        <div className='singleAdvantageDiv'>
            <svg>
                <circle cx='50' cy='50' r='50'></circle>
            </svg>
            <h2>გამოცდილება ციფრული ხელოვნების ინდუსტრიაში</h2>
        </div>
        <div className='twoSingleAdvantagesDiv'>
            <div className='singleAdvantageDiv'>
                <svg>
                    <circle cx='50' cy='50' r='50'></circle>
                </svg>
                <h2>უფასო საცდელ პერიოდი და დაბალი ფასები</h2>
            </div>

            <div className='singleAdvantageDiv'>
                <svg>
                    <circle cx='50' cy='50' r='50'></circle>
                </svg>
                <h2>სარეკლამო კამპანიების განხორციელების გამოცდილება ქართულ, ინგლისურ და რუსულ ენებზე</h2>
            </div>
        </div>
        <div className='singleAdvantageDiv'>
            <svg>
                <circle cx='50' cy='50' r='50'></circle>
            </svg>
            <h2>გამოცდილი გუნდი ციფრული მარკეტინგის ინდუსტრიაში</h2>
        </div>      

    </div>
    </div>
    </>
  )
}

export default Advantages