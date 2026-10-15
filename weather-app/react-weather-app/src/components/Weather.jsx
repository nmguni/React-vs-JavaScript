import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear from '../assets/clear.png'
import drizzle from '../assets/drizzle.png'
import cloud from '../assets/cloud.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'


const Weather = () => {
   return (
      <div className='weather'>
         <div className="search-bar">
            <input type="text" placeholder='Search' />
            <img src={search_icon} alt="" />
         </div>
         <img className="weather-icon" src={clear} alt="" />
         <p className='temperature'>16°C</p>
         <p className='location'>London</p>

         <div className='weather-data'>
            <div className="col">
               <img src={humidity} alt="" />
               <div>
                  <p>90%</p>
                  <span>humidity</span>
               </div>
            </div>
            <div className="col">
               <img src={wind} alt="" />
               <div>
                  <p>50 km/h</p>
                  <span>wind speed</span>
               </div>
            </div>
         </div>
      </div>

   )
}

export default Weather