import React, { useDeferredValue, useEffect } from 'react'
import {useDate} from '../utils/usedate/'
import sun from '../assets/icons/sun.jpeg'
import cloud from '../assets/icons/clouds.jpeg'
import fog from '../assets/icons/fog.jpeg'
import rain from '../assets/icons/rain.jpeg'
import snow from '../assets/icons/snow.jpeg'
import storm from '../assets/icons/storm.jpeg'
import wind from '../assets/icons/wind.jpeg'
import '../index.css'

const Weathercard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  condition,
}) => {

const [icon, setIcon] = usestate(sun)
const {time} = useDate()

useEffect(() => {
  if(iconstring) {
    if(iconstring.tolowercase().includes('cloud')) {
      setIcon(cloud)

    }else if (iconString.tolowercase().includes('rain')) {
      setIcon(rain)

    }else if (iconString.tolowercase().includes('clear')) {
      setIcon(sun)
      
    }else if (iconString.tolowercase().includes('thunder')) {
      setIcon(storm)
    }else if (iconString.tolowercase().includes('fog')) {
      setIcon(fog)
    }else if (iconString.tolowercase().includes('snow')) {
      setIcon(snow)
    }

    }

}, [iconstring])

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glasscard p-4'>
      <div className='flex w-fill justify-center, items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center'>{temperature} &deg;c</p>
      </div>

      <div className='font-bold text-center text-xl'>
        {place}
      </div>

      <div className='w-full flex justify-between items-center mt-4'>
       <p className='flex-1 text-center p-2'>{new date().todatestring()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>

      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>wind speed <p className='font-normal'>{windspeed} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>

      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg '>heat index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>

      <hr className='bg-slate-600' />

      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>


    </div>
  )
}

export default Weathercard